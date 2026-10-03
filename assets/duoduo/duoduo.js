(() => {
  'use strict';

  // Duoduo lives on the top border of the contact section. Poses are CSS-animated SVG groups loaded
  // from duoduo.svg; this script only decides which pose is showing and where he stands.
  const root = document.getElementById('duoduo');
  if (!root || !('fetch' in window)) return;
  const runway = root.parentElement;
  const button = root.querySelector('.duoduo-button');
  const stage = root.querySelector('.duoduo-stage');
  const bubble = root.querySelector('.duoduo-bubble');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const TEXT = {
    en: {
      label: 'Pet Duoduo', title: 'Duoduo is supervising. Click to pet.', hello: 'Hello!', startled: 'Hey!',
      lines: ['Meow.', 'Major revisions.', 'Have you tried more seeds?', 'Accept, conditional on treats.', 'Purr…', 'Belly rub? It’s a trap.']
    },
    zh: {
      label: '摸摸多多', title: '多多正在监工。点一下，摸摸他。', hello: '你好呀！', startled: '喵！',
      lines: ['喵～', '大修。', '建议多跑几个种子。', '小修后接收，条件是加罐头。', '呼噜呼噜……', '摸肚子？是陷阱。']
    }
  };
  // Click reactions in order; each index matches a line above.
  const REACTIONS = [{ pose: 'wave' }, { mood: 'unimpressed' }, { mood: 'unimpressed' }, { mood: 'happy' }, { pose: 'knead', cycles: 2 }, { pose: 'belly', cycles: 2 }];
  // Things he does on his own, with relative weights.
  const IDLE = [['stroll', 5], ['groom', 3], ['yawn', 2], ['swat', 2], ['stretch', 1], ['knead', 1], ['loaf', 1], ['wave', 1], ['belly', 1]];
  const SLEEP_AFTER = 45000;

  const slots = {};
  let pose = 'sit', x = 0, token = 0, busy = true, asleep = false, sleptAt = 0, wakeCheck = 0;
  let visible = !('IntersectionObserver' in window), lastActive = performance.now();
  let idleTimer = 0, bubbleTimer = 0, moodTimer = 0, walkFrame = 0, lookFrame = 0, pointer = null, reaction = 0, clicks = [];

  const language = () => (document.documentElement.lang.startsWith('zh') ? 'zh' : 'en');
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const has = name => name in slots;
  const view = name => slots[name]?.dataset.view || 'front';
  const duration = name => Number(slots[name]?.dataset.ms || 2000);

  function setPose(name, restart = false) {
    if (!has(name)) name = 'sit';
    if (name === pose && !restart) return;
    const previous = slots[pose], next = slots[name];
    const fade = view(name) !== view(pose);
    previous.classList.remove('is-on', 'is-fading');
    next.classList.remove('is-off');
    if (fade) {
      previous.classList.add('is-off');
      next.classList.add('is-fading');
      setTimeout(() => { previous.classList.remove('is-off'); next.classList.remove('is-fading'); }, 200);
    }
    if (name === pose) void next.getBoundingClientRect(); // restart the pose's animations
    next.classList.add('is-on');
    const rate = Number(next.dataset.rate || 1);
    if (rate !== 1) next.getAnimations({ subtree: true }).forEach(animation => { animation.playbackRate = rate; });
    pose = name;
    root.dataset.pose = name;
  }

  function setMood(mood) {
    clearTimeout(moodTimer);
    root.classList.remove('is-happy', 'is-unimpressed', 'is-talking', 'is-hopping', 'is-dozing');
    if (!mood) return;
    void root.offsetWidth;
    root.classList.add(`is-${mood}`);
    if (mood === 'happy') root.classList.add('is-hopping');
    if (mood === 'happy' || mood === 'unimpressed') {
      root.classList.add('is-talking');
      moodTimer = setTimeout(() => root.classList.remove('is-talking'), 480);
    }
  }

  function say(text, ms = 2600) {
    bubble.textContent = text;
    root.classList.toggle('bubble-right', x < bubble.offsetWidth + 8);
    bubble.classList.add('is-shown');
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove('is-shown'), ms);
  }

  function bounds() {
    const max = Math.max(0, runway.clientWidth - root.offsetWidth);
    return { min: 0, max, home: Math.max(0, max - Math.min(24, max * .05)) };
  }
  const applyX = () => { root.style.transform = `translateX(${x.toFixed(1)}px)`; };
  const setFacing = direction => root.classList.toggle('is-left', direction < 0);

  function walkTo(target, t) {
    return new Promise(resolve => {
      const direction = Math.sign(target - x);
      if (!direction || !has('walk')) return resolve();
      setFacing(direction);
      setPose('walk');
      // Planted feet move at the pose's ground speed, so moving at that speed keeps them still on the line.
      const speed = Number(slots.walk.dataset.speed || 20) * Number(slots.walk.dataset.rate || 1) * root.offsetWidth / 120;
      let last = performance.now();
      const step = now => {
        if (t !== token) return resolve();
        x += direction * speed * Math.min(.05, (now - last) / 1000);
        last = now;
        const arrived = direction > 0 ? x >= target : x <= target;
        if (arrived) x = target;
        applyX();
        if (arrived) return resolve();
        walkFrame = requestAnimationFrame(step);
      };
      walkFrame = requestAnimationFrame(step);
    });
  }

  async function play(name, ms = duration(name)) {
    if (!has(name)) return;
    setPose(name, true);
    await wait(ms);
  }

  async function toFront(t) {
    if (view(pose) === 'side' && pose !== 'stand' && has('stand')) {
      setPose('stand');
      await wait(220);
      if (t !== token) return;
    }
    setPose('sit');
  }

  async function stroll(t) {
    const { min, max, home } = bounds();
    if (max - min < 60) return;
    // A short wander; when far from home he tends to head back.
    const distance = Math.min(max - min, 90 + Math.random() * 150);
    let direction = Math.abs(x - home) > (max - min) * .4 && Math.random() < .6 ? Math.sign(home - x) : Math.random() < .5 ? -1 : 1;
    if (x + direction * distance < min || x + direction * distance > max) direction = -direction;
    const target = Math.max(min, Math.min(max, x + direction * distance));
    setFacing(direction);
    setPose('stand');
    await wait(350);
    if (t !== token) return;
    await walkTo(target, t);
    if (t !== token) return;
    setPose('stand');
    await wait(450);
    if (t !== token) return;
    if (has('stretch') && Math.random() < .3) {
      await play('stretch');
      if (t !== token) return;
      setPose('stand');
      await wait(300);
      if (t !== token) return;
    }
    setPose('sit');
  }

  async function perform(name, t) {
    if (name === 'stroll') return stroll(t);
    if (name === 'stretch') {
      setPose('stand');
      await wait(400);
      if (t !== token) return;
      await play('stretch');
      if (t !== token) return;
      setPose('stand');
      await wait(500);
    } else {
      const cycles = { knead: 3, belly: 2 }[name] || 1;
      await play(name, name === 'loaf' ? 9000 + Math.random() * 6000 : duration(name) * cycles);
    }
    if (t === token) setPose('sit');
  }

  function pick() {
    const options = IDLE.filter(([name]) => (name === 'stroll' ? has('walk') : has(name)));
    let roll = Math.random() * options.reduce((sum, [, weight]) => sum + weight, 0);
    for (const [name, weight] of options) if ((roll -= weight) < 0) return name;
    return options[0]?.[0];
  }

  function schedule(delay = 7000 + Math.random() * 9000) {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(idle, delay);
  }

  async function idle() {
    if (busy || asleep || reduceMotion.matches) return schedule();
    if (!visible || document.hidden) return schedule(3000);
    if (performance.now() - lastActive > SLEEP_AFTER) return fallAsleep();
    const name = pick();
    if (!name) return;
    const t = ++token;
    busy = true;
    await perform(name, t);
    if (t !== token) return;
    busy = false;
    schedule();
  }

  async function fallAsleep() {
    const t = ++token;
    busy = true;
    await toFront(t);
    if (t !== token) return;
    setMood('dozing');
    await wait(3400);
    if (t !== token) return;
    const bed = ['curl', 'loaf'].find(has);
    if (bed) {
      setMood(null);
      setPose(bed);
    }
    asleep = true;
    sleptAt = performance.now();
    busy = false;
  }

  async function wakeUp(t) {
    asleep = false;
    setMood(null);
    setPose('sit');
    if (!has('yawn')) return;
    await wait(250);
    if (t !== token) return;
    await play('yawn');
    if (t === token) setPose('sit');
  }

  function markActive() {
    const now = performance.now();
    lastActive = now;
    // Once he has slept a while, a visitor who is around again wakes him up gently.
    if (asleep && !busy && now - sleptAt > 20000 && now - wakeCheck > 1000) {
      wakeCheck = now;
      const t = ++token;
      busy = true;
      wakeUp(t).then(() => {
        if (t !== token) return;
        busy = false;
        schedule();
      });
    }
  }

  button.addEventListener('click', async () => {
    markActive();
    const now = performance.now();
    clicks = clicks.filter(time => now - time < 1500).concat(now);
    const t = ++token;
    busy = true;
    cancelAnimationFrame(walkFrame);
    setMood(null);
    const text = TEXT[language()];
    if (asleep || clicks.length >= 4) {
      clicks = [];
      asleep = false;
      say(text.startled, 1800);
      await toFront(t);
      if (t !== token) return;
      if (!reduceMotion.matches) await play('startle');
    } else {
      const index = reaction++ % REACTIONS.length;
      const step = REACTIONS[index];
      say(text.lines[index]);
      await toFront(t);
      if (t !== token) return;
      if (step.mood || reduceMotion.matches || !has(step.pose)) {
        setMood(step.mood || 'happy');
        await wait(2600);
        if (t !== token) return;
        setMood(null);
      } else {
        await play(step.pose, duration(step.pose) * (step.cycles || 1));
      }
    }
    if (t !== token) return;
    setPose('sit');
    busy = false;
    schedule();
  });

  function look() {
    lookFrame = 0;
    if (!pointer) return;
    const box = button.getBoundingClientRect();
    const dx = pointer.x - (box.left + box.width * .46);
    const dy = pointer.y - (box.top + box.height * .45);
    const distance = Math.hypot(dx, dy) || 1;
    const reach = Math.min(1, distance / 140);
    root.style.setProperty('--dd-px', `${(dx / distance * 1.8 * reach).toFixed(2)}px`);
    root.style.setProperty('--dd-py', `${(dy / distance * 1.4 * reach).toFixed(2)}px`);
    root.style.setProperty('--dd-tilt', `${(Math.max(-1, Math.min(1, dx / 500)) * 6).toFixed(1)}deg`);
  }

  window.addEventListener('pointermove', event => {
    markActive();
    if (event.pointerType !== 'mouse') return;
    pointer = { x: event.clientX, y: event.clientY };
    root.classList.add('has-pointer');
    if (!lookFrame) lookFrame = requestAnimationFrame(look);
  }, { passive: true });
  window.addEventListener('scroll', () => {
    markActive();
    if (pointer && !lookFrame) lookFrame = requestAnimationFrame(look);
  }, { passive: true });
  ['keydown', 'touchstart'].forEach(type => window.addEventListener(type, markActive, { passive: true }));
  window.addEventListener('resize', () => {
    x = Math.min(x, bounds().max);
    applyX();
  });

  function translate() {
    const text = TEXT[language()];
    button.setAttribute('aria-label', text.label);
    button.title = text.title;
    bubble.classList.remove('is-shown');
  }
  new MutationObserver(translate).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  function greet() {
    const t = ++token;
    wait(1700).then(async () => {
      if (t !== token) return;
      say(TEXT[language()].hello, 2000);
      await play('wave');
      if (t !== token) return;
      setPose('sit');
      busy = false;
      schedule();
    });
  }

  fetch(root.dataset.src)
    .then(response => (response.ok ? response.text() : Promise.reject(new Error(response.statusText))))
    .then(markup => {
      stage.innerHTML = markup;
      stage.querySelectorAll('.dd-slot').forEach(slot => { slots[slot.dataset.slot] = slot; });
      if (!slots.sit) return;
      slots.sit.classList.add('is-on');
      root.dataset.pose = 'sit';
      translate();
      root.hidden = false;
      x = bounds().home;
      applyX();
      if (!('IntersectionObserver' in window) || reduceMotion.matches) {
        busy = false;
        return schedule();
      }
      new IntersectionObserver(entries => {
        visible = entries[entries.length - 1].isIntersecting; // a batch can hold stale records; the last is current
        root.classList.toggle('is-offscreen', !visible);
      }, { rootMargin: '120px 0px' }).observe(root);
      root.classList.add('is-waiting');
      const entrance = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        entrance.disconnect();
        root.classList.replace('is-waiting', 'is-entering');
        greet();
      }, { threshold: 1 });
      entrance.observe(root);
    })
    .catch(() => { root.hidden = true; });
})();
