(() => {
  'use strict';
  const demo = document.getElementById('mask-demo');
  if (!demo) return;
  const wood = document.getElementById('mask-wood');
  const placeable = document.getElementById('mask-placeable');
  const strength = document.getElementById('mask-strength');
  const messages = {
    en: {title:'Try the soft mask', wood:'Wood in the context', placeable:'Facing tile is placeable', strength:'Penalty strength', deficit:'PLACE_TABLE deficit', bias:'Soft logit bias', probability:'PLACE_TABLE probability', raw:'No mask', soft:'Soft mask', hard:'Hard mask', note:'Illustration only: three actions start with equal logits. The other two have no penalty. This is not the trained Craftax policy or an experimental result.', near:'Try wood = 1.95: the deficit is small, so a soft mask applies a mild penalty. A hard mask removes the action whenever the deficit is positive.'},
    zh: {title:'试一试 soft mask', wood:'上下文中的木头数量', placeable:'面前的格子可放置', strength:'惩罚强度', deficit:'PLACE_TABLE 的缺口', bias:'Soft logit 偏置', probability:'PLACE_TABLE 的概率', raw:'不用 mask', soft:'Soft mask', hard:'Hard mask', note:'仅为示意：三个动作的初始 logit 相同，另外两个动作没有惩罚。这不是训练出的 Craftax 策略，也不是实验结果。', near:'试试木头 = 1.95：缺口很小，soft mask 只施加较轻惩罚；hard mask 则在任何正缺口下移除动作。'}
  };
  function render() {
    const zh = document.documentElement.lang.startsWith('zh');
    const text = messages[zh ? 'zh' : 'en'];
    demo.querySelectorAll('[data-mask-label]').forEach(node => { node.textContent = text[node.dataset.maskLabel]; });
    const deficit = Math.max(0, 2 - Number(wood.value)) + (placeable.checked ? 0 : 1);
    const bias = -Number(strength.value) * deficit;
    const soft = Math.exp(bias) / (2 + Math.exp(bias));
    const hard = deficit > 0 ? 0 : 1 / 3;
    document.getElementById('mask-wood-value').textContent = Number(wood.value).toFixed(2);
    document.getElementById('mask-strength-value').textContent = Number(strength.value).toFixed(1);
    document.getElementById('mask-deficit').textContent = deficit.toFixed(2);
    document.getElementById('mask-bias').textContent = bias.toFixed(2);
    document.getElementById('mask-soft-prob').textContent = `${(100 * soft).toFixed(1)}%`;
    document.getElementById('mask-hard-prob').textContent = `${(100 * hard).toFixed(1)}%`;
    document.getElementById('mask-soft-bar').style.width = `${100 * soft}%`;
    document.getElementById('mask-hard-bar').style.width = `${100 * hard}%`;
  }
  [wood, placeable, strength].forEach(input => input.addEventListener('input', render));
  document.addEventListener('project-language-change', render);
  render();
})();
