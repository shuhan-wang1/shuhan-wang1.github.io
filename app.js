(() => {
  'use strict';

  const zh = {
    skip: '跳至正文', projectPage: '完整页面', thesis: '硕士论文', navAbout: '关于', navResearch: '研究', navPapers: '论文', navContact: '联系', cv: '简历',
    heroEyebrow: '世界模型 · 开放式学习', nameNote: '王书涵 <span class="name-divider">/</span> 研究与构建',
    heroStatement: '让智能体从自己的经验中<br><em>持续成长。</em>',
    heroDescription: '我研究从智能体已有经验中学到的世界模型，如何为它生成开放式课程，使其能力不断扩展。目前我在香港城市大学担任研究助理，研究习得的世界模型在哪里出错、为何出错。',
    exploreResearch: '了解我的研究', email: '邮件',
    affiliation: '香港城市大学 · 研究助理<br>伦敦大学学院 · 机器学习硕士 · 曼彻斯特大学 · 数学与物理学士',
    figureLabel: '贯穿我的研究的一个问题', figureQuestion: '智能体接下来<br>应该经历什么？',
    diagramWorld: '世界', diagramModel: '模型', diagramExperience: '01 / 积累经验', diagramDiagnose: '02 / 诊断误差', diagramCurriculum: '03 / 生成课程',
    phaseExperience: '经验', phaseDiagnose: '诊断', phaseCurriculum: '课程',
    interestsLabel: '研究兴趣', interestWorld: '世界模型', interestMBRL: '基于模型的强化学习', interestOpen: '开放式课程', interestContinual: '持续学习',
    researchEyebrow: '01 / 研究与项目', researchTitle: '把问题变成实验。',
    researchIntro: '从诊断世界模型，到科学发现。<br>这些是我正在研究的问题。',
    filterAll: '全部项目 <span>07</span>', filterWorld: '世界模型', filterAgents: '智能体与系统', filterTheory: '理论与效率', toolbarNote: '研究 + 实现',
    catDiagnosis: '当前研究 · 世界模型诊断', wmTitle: '诊断世界模型', wmQuestion: '习得的世界模型在哪里出错？为什么？',
    wmDescription: '在香港城市大学独立开展的研究项目，导师为 Yangchen Pan 教授。我正在构建一个已知真实状态的受控环境，让关于模型误差来源的不同解释可以被检验，而不只是假设。',
    wmInsight: '评测在保持环境动力学不变的同时，改变模型能观察到的信息；并用受控故障和简单基线检验诊断方法本身。',
    wmRole: '研究助理 <span class="role-dot">·</span> 香港城市大学 <span class="role-dot">·</span> 2026 年 10 月起',
    tagWorldModels: '世界模型', tagGroundTruth: '已知真实状态', tagDiagnostics: '诊断设计',
    catDiscovery: '科学发现与持续学习', qftQuestion: '智能体能通过实验发现陌生系统的规律吗？',
    qftDescription: '一个研究科学发现与持续学习的交互式基准。当前主线是简洁的珠子机实验室：智能体选择实验、观察带噪声的结果，并预测尚未尝试的情况。',
    qftInsight: '我关心智能体如何修订假设，以及学到的知识能否帮助下一次探索。项目尚未发表，目前仅公开概念介绍。',
    qftRole: '独立研究 <span class="role-dot">·</span> 未发表 · 进行中', tagSMC: '持续学习', tagExperiment: '实验设计', details: '项目简介',
    catRL: '世界模型与持续强化学习', climbQuestion: '帮助世界模型智能体获得下一个技能。',
    climbDescription: 'UCL「开放性与通用智能」课程的小组研究项目。我在 Craftax-Symbolic 中为 DreamerV3 提出并实现了三项干预：动作的软可行性掩码、基于新颖性的内在奖励，以及结构化回放。',
    climbResult: '平均成就达成率 · Craftax-Symbolic',
    climbScope: '10M 步，3 个种子，末 200 回合；对照为同预算 50:50 回放基线。消融实验显示，软掩码是单独贡献最大的组件。',
    climbRole: '项目负责人 <span class="role-dot">·</span> 课程报告第一作者', tagReplay: '结构化回放', code: '代码', report: '报告',
    catRouting: '多轮智能体模型路由', sweQuestion: '编程智能体何时应该切换模型？',
    sweDescription: '基于部分执行轨迹进行成本敏感模型路由的合作研究。我在容器中运行 SWE-bench / SWE-Smith 官方评测，采集带逐步成本标注的多模型轨迹，并发布为公开的 Hugging Face 数据集。',
    sweInsight: '采集、隔离、评分、复现。通过实验基础设施，将智能体的中间行为与可验证的结果连接起来。',
    sweRole: '共同作者 <span class="role-dot">·</span> ICML 2026 DL4C Workshop', paper: '论文',
    catTrajectory: '轨迹条件结果预测', temporalTitle: '时序路由', temporalQuestion: '智能体的部分轨迹，究竟告诉了我们什么？',
    temporalDescription: '硕士论文研究紧凑的轨迹条件价值估计；后续研究进一步区分题目难度识别，与对同一题目不同尝试的排序能力。',
    temporalInsight: '早期总体判别可能掩盖弱题内判别。在已评估的设置下，晚期信号带来有限的选择与剪枝收益。',
    temporalRole: '硕士论文 <span class="role-dot">·</span> UCL', tagTemporal: '时序建模', tagAudits: '实证审计',
    catTheory: '几何与大模型量化', ropeQuestion: '一个几何最优解，以及它的实证边界。',
    ropeDescription: '完整刻画与 RoPE 可交换的旋转族，并为限定的方差代理目标推导闭式最优角；通过实验检验这种结构能否改善动态 4-bit 量化。',
    ropeInsight: '所测逐对旋转未优于全头 Hadamard。研究分析了代理目标、混合支持与量化器定标统计量之间的失配。',
    ropeRole: '第一作者 <span class="role-dot">·</span> TMLR 审稿中', tagTheory: '理论与实验',
    catProduct: '智能体应用系统', rentQuestion: '让研究想法成为可以使用的工具。',
    rentDescription: '独立构建的英国租房智能体，支持房源搜索、通勤规划与社区比较。结构化会话状态与工具证据，将对话连接到实际决策。',
    rentInsight: '有界函数调用循环、可恢复的多轮状态、证据核查、可选 MCP 工具，以及支持回滚的发布流程。',
    rentRole: '独立项目 <span class="role-dot">·</span> 已部署产品', visit: '访问网站',
    researchBottom: '我关心解释结果的实验，<br>也关心负结果告诉了我们什么。', moreGithub: '更多 GitHub 项目',
    papersEyebrow: '02 / 研究产出', papersTitle: '论文。', papersIntro: '理论、证据，以及实验<br>能够支持的结论边界。',
    workshop: '研讨会', preprint: '预印本',
    sweVenue: 'ICML 2026 · Deep Learning for Code Workshop', ropeVenue: 'TMLR 审稿中 · 第一作者',
    backgroundEyebrow: '03 / 学术背景', backgroundTitle: '数学的基础。<br>对 <em>智能</em><br>的好奇。',
    backgroundDescription: '我的工作横跨数学分析、学习算法，以及能够严谨检验它们的实验系统。', fullCV: '查看完整简历',
    uclDegree: '机器学习理学硕士 · Distinction expected <span class="expected">· 预计 2026 年 12 月毕业</span>',
    uclDescription: '授课部分均分 79.3/100。<br>硕士论文研究软件工程智能体的时序路由，导师为 Professor Ilija Bogunovic。',
    manchesterDegree: '数学与物理荣誉理学学士', manchesterDescription: '一等荣誉学位，总均分 76.8/100。',
    cityuDates: '2026 — 至今', cityuRole: '研究助理 <span class="expected">· 导师：Yangchen Pan 教授</span>', cityuDescription: '独立开展的研究项目，诊断习得世界模型中的误差。', toolkitLabel: '常用工具',
    labAssistantLabel: 'FIG. 02 / 实验助理', labAssistantCaption: '<strong>多多</strong>，家里的另一个智能体，兼任我的常驻 Reviewer 2。',
    contactEyebrow: '04 / 保持联系', contactTitle: '好问题，<br>值得一起 <em>探索。</em>',
    contactDescription: '欢迎交流世界模型、开放式学习，<br>或讨论科研合作的可能。', copyEmail: '复制邮箱',
    footerNote: '因好奇而构建，由多多监工。更新于 2026 年 11 月。', backTop: '回到顶部 ↑', dialogLabel: '项目介绍', discussProject: '交流这个项目'
  };

  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const original = new Map(nodes.map(node => [node, node.innerHTML]));
  const languageButton = document.getElementById('language-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const dialog = document.getElementById('project-dialog');
  const figure = document.querySelector('.research-figure');
  let language = 'en';
  let currentProject = null;
  let copyStatusTimer;

  const phases = {
    en: ['An agent\'s existing experience is what its world model learns from.', 'Locate where the model\'s predictions stop being usable, and why.', 'Use what the diagnosis reveals to shape what the agent experiences next.'],
    zh: ['智能体已有的经验，是世界模型学习的来源。', '定位模型的预测从哪里开始不再可用，以及原因。', '依据诊断结果，塑造智能体接下来的经验。']
  };
  const projectNotes = window.PROJECT_DATA;

  function updatePhase() {
    document.getElementById('phase-description').textContent = phases[language][Number(figure.dataset.phase)];
  }

  function renderProject() {
    if (!currentProject) return;
    const note = projectNotes[currentProject][language];
    document.getElementById('dialog-title').textContent = note.title;
    const body = document.getElementById('dialog-body');
    body.replaceChildren();
    const pageLink = document.createElement('a');
    pageLink.className = 'button button-primary';
    pageLink.href = `projects/${projectNotes[currentProject].slug}/?lang=${language}`;
    pageLink.textContent = language === 'zh' ? '查看完整项目页面' : 'Read the full project page';
    body.append(pageLink);
    for (const [en, zhLabel, href] of projectNotes[currentProject].links) {
      const link = document.createElement('a');
      link.className = 'text-link overview-resource';
      link.href = href; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = language === 'zh' ? zhLabel : en;
      body.append(link);
    }
    note.sections.forEach(([heading, description]) => {
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      h3.textContent = heading;
      p.textContent = description;
      body.append(h3, p);
    });
  }

  function closeMenu() {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', language === 'zh' ? '展开导航' : 'Open navigation');
  }

  function setLanguage(next) {
    language = next === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    nodes.forEach(node => {
      node.innerHTML = language === 'zh' ? zh[node.dataset.i18n] ?? original.get(node) : original.get(node);
    });
    document.title = language === 'zh' ? '王书涵 Shuhan Wang — 机器学习研究' : 'Shuhan Wang — Machine Learning Research';
    document.querySelector('meta[name="description"]').content = language === 'zh' ? '王书涵，香港城市大学研究助理，UCL 机器学习硕士。研究世界模型、基于模型的强化学习与开放式学习。' : 'Shuhan Wang — Research Assistant at City University of Hong Kong and UCL MSc Machine Learning. Research in world models, model-based RL, and open-ended learning.';
    document.getElementById('language-label').textContent = language === 'zh' ? 'EN' : '中文';
    languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : 'Switch to Chinese');
    document.getElementById('diagram-title').textContent = language === 'zh' ? '从自生成的经验中学习' : 'Learning from self-generated experience';
    document.getElementById('diagram-desc').textContent = language === 'zh' ? '示意循环：经验训练世界模型，诊断定位其误差，模型再塑造智能体接下来的经验。' : 'An illustrative loop: experience trains a world model, diagnosis locates its errors, and the model shapes what the agent experiences next.';
    document.getElementById('duoduo-photo').alt = language === 'zh' ? '多多，我的白色橘斑小猫，一脸不以为然地看着镜头' : 'Duoduo, my white-and-ginger cat, giving the camera an unimpressed look';
    document.querySelector('.phase-controls').setAttribute('aria-label', language === 'zh' ? '了解交互学习过程' : 'Explore the learning loop');
    document.querySelector('.project-filters').setAttribute('aria-label', language === 'zh' ? '筛选项目' : 'Filter projects');
    document.getElementById('dialog-close').setAttribute('aria-label', language === 'zh' ? '关闭项目简介' : 'Close project overview');
    clearTimeout(copyStatusTimer);
    document.getElementById('copy-status').textContent = '';
    updatePhase();
    renderProject();
    document.querySelectorAll('.project-page-link').forEach(link => { const url = new URL(link.href); url.searchParams.set('lang', language); link.href = url.href; });
    closeMenu();
    try { localStorage.setItem('homepage-language', language); } catch { /* The page also works without storage. */ }
  }

  languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
  menuButton.addEventListener('click', () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', language === 'zh' ? (open ? '收起导航' : '展开导航') : (open ? 'Close navigation' : 'Open navigation'));
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.matchMedia('(min-width: 721px)').addEventListener('change', closeMenu);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  document.querySelectorAll('.phase-controls button').forEach(button => {
    button.addEventListener('click', () => {
      figure.dataset.phase = button.dataset.phase;
      document.querySelectorAll('.phase-controls button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      updatePhase();
    });
  });

  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      let count = 0;
      document.querySelectorAll('.project-card').forEach(card => {
        card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
        if (!card.hidden) count++;
      });
      document.getElementById('filter-announcement').textContent = language === 'zh' ? `显示 ${count} 个项目` : `Showing ${count} projects`;
    });
  });

  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
      currentProject = button.dataset.project;
      renderProject();
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('dialog-open');
    });
  });
  document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });

  document.getElementById('copy-email').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText('jackwsh@outlook.com');
      status.textContent = language === 'zh' ? '邮箱已复制。' : 'Email copied.';
    } catch {
      status.textContent = language === 'zh' ? '请复制：jackwsh@outlook.com' : 'Copy this address: jackwsh@outlook.com';
    }
    clearTimeout(copyStatusTimer);
    copyStatusTimer = setTimeout(() => { status.textContent = ''; }, 6000);
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll('.desktop-nav a').forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    ['about', 'research', 'publications', 'contact'].forEach(id => observer.observe(document.getElementById(id)));
  }

  let savedLanguage;
  try { savedLanguage = localStorage.getItem('homepage-language'); } catch { /* Optional preference. */ }
  const urlLanguage = new URLSearchParams(location.search).get('lang');
  setLanguage(urlLanguage === 'zh' || urlLanguage === 'en' ? urlLanguage : savedLanguage || 'en');
})();
