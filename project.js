(() => {
  'use strict';
  const data = window.PROJECT_DATA;
  const key = document.body.dataset.projectId;
  const project = data[key];
  let language;
  try { language = localStorage.getItem('homepage-language'); } catch {}
  const query = new URLSearchParams(location.search).get('lang');
  language = query === 'zh' || query === 'en' ? query : language === 'zh' ? 'zh' : 'en';
  function render() {
    const zh = language === 'zh';
    const text = project[language];
    document.documentElement.lang = zh ? 'zh-CN' : 'en';
    document.title = `${text.title} — Shuhan Wang`;
    document.querySelector('meta[name="description"]').content = text.sections[0][1];
    const set = (id, value) => { const node = document.getElementById(id); if (node) node.textContent = value; };
    set('page-title', text.title); set('page-summary', text.sections[0][1]);
    set('skip', zh ? '跳至正文' : 'Skip to content');
    set('page-kicker', zh ? '研究 / 项目笔记' : 'RESEARCH / PROJECT NOTES');
    set('back-home', zh ? '所有项目' : 'All projects');
    document.getElementById('back-home').href = `../../?lang=${language}#research`;
    set('project-language', zh ? 'EN' : '中文');
    document.getElementById('project-language').setAttribute('aria-label', zh ? 'Switch to English' : 'Switch to Chinese');
    set('toc-label', zh ? '本页内容' : 'On this page');
    document.querySelector('.project-toc').setAttribute('aria-label', zh ? '本页内容' : 'On this page');
    text.sections.forEach(([heading, body], i) => {
      document.querySelector(`#section-${i} h2`).textContent = heading;
      document.querySelector(`#section-${i} p`).textContent = body;
      document.querySelector(`.project-toc a[href="#section-${i}"]`).textContent = heading;
    });
    document.querySelectorAll('.project-resources a').forEach((link, i) => {
      if (i < project.links.length) link.textContent = project.links[i][zh ? 1 : 0];
    });
    document.querySelectorAll('.concept-flow li').forEach((li, i) => { li.textContent = project.flow[zh ? 1 : 0][i]; });
    set('concept-caption', zh ? '项目概念示意，非实验数据。' : 'Conceptual sketch of the project; not experimental data.');
    set('result-caption', zh ? '平均成就达成率 · Craftax-Symbolic · 10M 步 · 3 个种子 · 末 200 回合。对照为同预算 50:50 回放基线。数值来自课程报告。' : 'Mean achievement rate · Craftax-Symbolic · 10M steps · 3 seeds · final 200 episodes. Matched 50:50 replay baseline. Values reproduced from the course report.');
    const baseline = document.querySelector('.result-row span');
    if (baseline) baseline.textContent = zh ? '同预算基线' : 'Matched baseline';
    set('show-thesis', zh ? '在本页阅读论文' : 'Read thesis on this page');
    set('reader-heading', zh ? '硕士论文' : 'MSc Thesis');
    set('reader-note', zh ? '可以在下方阅读论文，也可以通过上方 Google Drive 链接在新标签页打开。' : 'Read the dissertation here, or use the Google Drive link above to open it in a new tab.');
    set('updated', zh ? '更新于 2026 年 11 月' : 'Updated November 2026');
    set('related-title', zh ? '浏览其他项目' : 'Explore other projects');
    document.querySelectorAll('[data-related]').forEach(a => { a.textContent = data[a.dataset.related][language].title; a.href = `../${data[a.dataset.related].slug}/?lang=${language}`; });
    document.querySelectorAll('.wordmark, .site-footer a:first-child').forEach(a => { a.href = `../../?lang=${language}`; });
  }
  document.getElementById('project-language').addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('homepage-language', language); } catch {}
    const url = new URL(location.href); url.searchParams.set('lang', language); history.replaceState(null, '', url);
    render();
  });
  render();
})();
