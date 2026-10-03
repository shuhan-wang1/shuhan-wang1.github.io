(() => {
  'use strict';

  const zh = {
    skip: '跳至正文', navAbout: '关于', navResearch: '研究', navPapers: '论文', navContact: '联系', cv: '简历',
    heroEyebrow: '机器学习 · 伦敦大学学院', nameNote: '王书涵 <span class="name-divider">/</span> 研究与构建',
    heroStatement: '构建通过交互<br>持续学习的 <em>智能体。</em>',
    heroDescription: '我关注世界模型、开放式学习，以及智能体如何学会发现。我的研究将数学与物理背景，同机器学习算法和实验系统的实践连接起来。',
    exploreResearch: '了解我的研究', email: '邮件',
    affiliation: '伦敦大学学院 · 机器学习硕士在读 · Distinction expected<br>曼彻斯特大学 · 数学与物理学士',
    figureLabel: '贯穿我的研究的一个问题', figureQuestion: '智能体如何理解<br>一个陌生的世界？',
    diagramWorld: '世界', diagramModel: '模型', diagramExperiment: '01 / 选择实验', diagramEvidence: '02 / 获取证据', diagramRevise: '03 / 修订模型',
    phaseExperiment: '实验', phaseObserve: '观察', phaseRevise: '修订',
    interestsLabel: '研究兴趣', interestWorld: '世界模型', interestOpen: '开放式学习', interestScience: '科学发现', interestAgents: '智能体系统',
    researchEyebrow: '01 / 研究与项目', researchTitle: '把问题变成实验。',
    researchIntro: '从隐藏的粒子世界，到编程智能体。<br>这些是我正在研究的问题。',
    filterAll: '全部项目 <span>06</span>', filterWorld: '世界模型', filterAgents: '智能体与系统', filterTheory: '理论与效率', toolbarNote: '研究 + 实现',
    catDiscovery: '主动科学发现', qftQuestion: '智能体能发现隐藏宇宙的物理规律吗？',
    qftDescription: '交互式科学发现基准。智能体主动选择碰撞实验，推断隐藏粒子与相互作用规律，并提交能够预测未见观测的可执行理论。',
    qftInsight: '已完成有界归纳、本体扩展、阶段设计等受控研究；开放式物理学家基准仍在构建中。',
    qftRole: '独立研究 <span class="role-dot">·</span> 开发中', tagExperiment: '实验设计', details: '项目简介',
    catRL: '世界模型与持续强化学习', climbQuestion: '帮助世界模型智能体获得下一个技能。',
    climbDescription: '在 Craftax 中扩展 DreamerV3，结合预测引导的软动作约束、内在新颖性奖励和结构化回放；以可行性规则同时引导真实动作与想象轨迹。',
    climbResult: '平均成就达成率 · Craftax-Symbolic',
    climbScope: '10M 步，3 个种子，末 200 回合；对照为同预算 50:50 回放基线。',
    climbRole: '项目负责人、第一作者 <span class="role-dot">·</span> 研究手稿', tagReplay: '结构化回放', code: '代码',
    catRouting: '多轮智能体模型路由', sweQuestion: '编程智能体何时应该切换模型？',
    sweDescription: '基于部分执行轨迹进行成本敏感模型路由的合作研究。我负责多模型轨迹采集、逐步成本标注，以及 SWE-bench / SWE-Smith 官方评测管线。',
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
    uclDescription: '硕士论文研究软件工程智能体的时序路由。<br>硕士论文导师：Ilija Bogunovic。',
    manchesterDegree: '数学与物理荣誉理学学士', manchesterDescription: '一等荣誉学位。', toolkitLabel: '常用工具',
    labAssistantLabel: 'FIG. 02 / 实验助理', labAssistantCaption: '<strong>多多</strong>，家里的另一个智能体，兼任我的常驻 Reviewer 2。',
    contactEyebrow: '04 / 保持联系', contactTitle: '好问题，<br>值得一起 <em>探索。</em>',
    contactDescription: '欢迎交流世界模型、科学发现，<br>或讨论科研合作的可能。', copyEmail: '复制邮箱',
    footerNote: '因好奇而构建，由多多监工。更新于 2026 年 10 月。', backTop: '回到顶部 ↑', dialogLabel: '项目介绍', discussProject: '交流这个项目'
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
    en: ['Choose an experiment that can distinguish competing explanations.', 'Gather evidence, including uncertainty and unexpected outcomes.', 'Update the model, keep alternatives open, and ask the next question.'],
    zh: ['选择能够区分不同解释的实验。', '收集证据，记录不确定性与意外结果。', '修订模型，保留备选解释，再提出下一个问题。']
  };
  const projectNotes = {
    qft: {
      en: { title: 'OpenQFT-Bench', sections: [
        ['The research question', 'Can an agent discover hidden entities and interaction laws by choosing its own experiments? OpenQFT uses generated particle-physics worlds as a controlled setting for studying that question.'],
        ['What I am building', 'A simulator, budgeted experimental environments, Bayesian reference learners, and structural and predictive evaluation. The current open-ended track uses an LHC-like collider and asks agents to submit an executable theory, a particle table, and a law report.'],
        ['Current scope', 'Tracks A, B, C, and E are completed controlled studies. Track D is parked. Track F, the open-ended physicist benchmark, is under construction; its release protocol is not frozen and it has no valid agent episode under the current physics law. Cross-world learning is an evaluation objective, not an established result.'],
        ['My role', 'Independent research: benchmark design, implementation, reference inference, experiment orchestration, and evaluation.']
      ]},
      zh: { title: 'OpenQFT-Bench', sections: [
        ['研究问题', '智能体能否通过自主选择实验，发现隐藏实体与相互作用规律？OpenQFT 将生成的粒子物理世界作为研究这一问题的受控环境。'],
        ['正在构建', '模拟器、预算约束实验环境、贝叶斯参考学习器，以及结构与预测评测。当前开放式方向使用类 LHC 对撞机，要求智能体提交可执行理论、粒子表与规律报告。'],
        ['当前边界', 'Track A、B、C、E 的受控研究已完成；Track D 暂停。开放式物理学家基准 Track F 仍在构建，发布协议尚未冻结，当前物理规律下还没有有效的智能体 episode。跨世界学习是评测目标，尚非已证实结果。'],
        ['我的角色', '独立研究：基准设计、代码实现、参考推断、实验编排与评测。']
      ]}
    },
    temporal: {
      en: { title: 'Temporal Routing', sections: [
        ['MSc dissertation', 'Encoder-Based Temporal Routing for Software Engineering Agents: An Empirical Study of Trajectory-Conditioned Value Estimation. Dissertation supervisor: Ilija Bogunovic (UCL).'],
        ['The model', 'A roughly 149M-parameter ModernBERT trajectory encoder with task-conditioned pooling and causal temporal modelling. The work examines whether partial agent trajectories contain useful information for cost-aware decisions.'],
        ['What the audits establish', 'Preregistered multi-seed, bootstrap, fixed-budget, and cross-domain audits exposed sensitivity to model pair, domain, and model selection. The dissertation does not establish a universally deployable routing policy.'],
        ['Follow-up research', 'Current empirical work separates aggregate prediction of task difficulty from discrimination among attempts at the same task. Early prefixes can mostly rank tasks; within-task discrimination appears later, with limited selection and pruning benefits in the evaluated settings. This follow-up remains a manuscript in development.']
      ]},
      zh: { title: '时序路由与轨迹预测', sections: [
        ['硕士论文', 'Encoder-Based Temporal Routing for Software Engineering Agents: An Empirical Study of Trajectory-Conditioned Value Estimation。UCL 硕士论文，硕士论文导师为 Ilija Bogunovic。'],
        ['模型', '采用约 149M 参数的 ModernBERT 编码智能体轨迹，并结合任务条件池化与因果时序建模，研究部分执行轨迹能否为成本敏感决策提供有用信息。'],
        ['审计结论', '预注册、多种子、bootstrap、固定预算与跨域审计发现，结果受到模型对、任务域与模型选择的影响。论文没有建立普适、可部署的路由策略。'],
        ['后续研究', '当前实证工作区分总体题目难度预测与同题不同尝试的判别。早期前缀可能主要对题目排序；题内判别在后期出现，并在已评估设置下带来有限的选择与剪枝收益。这部分仍是开发中的研究手稿。']
      ]}
    }
  };

  function updatePhase() {
    document.getElementById('phase-description').textContent = phases[language][Number(figure.dataset.phase)];
  }

  function renderProject() {
    if (!currentProject) return;
    const note = projectNotes[currentProject][language];
    document.getElementById('dialog-title').textContent = note.title;
    const body = document.getElementById('dialog-body');
    body.replaceChildren();
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
    document.querySelector('meta[name="description"]').content = language === 'zh' ? '王书涵，UCL 机器学习硕士在读。研究世界模型、开放式学习、主动科学发现与智能体系统。' : 'Shuhan Wang — UCL MSc Machine Learning. Research in world models, open-ended learning, active scientific discovery, and agentic systems.';
    document.getElementById('language-label').textContent = language === 'zh' ? 'EN' : '中文';
    languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : 'Switch to Chinese');
    document.getElementById('diagram-title').textContent = language === 'zh' ? '通过交互学习' : 'Learning through interaction';
    document.getElementById('diagram-desc').textContent = language === 'zh' ? '选择实验、获取证据与修订世界模型的示意循环。' : 'An illustrative loop connecting an experiment, new evidence, and revision of a world model.';
    document.getElementById('duoduo-photo').alt = language === 'zh' ? '多多，我的白色橘斑小猫，一脸不以为然地看着镜头' : 'Duoduo, my white-and-ginger cat, giving the camera an unimpressed look';
    document.querySelector('.phase-controls').setAttribute('aria-label', language === 'zh' ? '了解交互学习过程' : 'Explore the learning loop');
    document.querySelector('.project-filters').setAttribute('aria-label', language === 'zh' ? '筛选项目' : 'Filter projects');
    document.getElementById('dialog-close').setAttribute('aria-label', language === 'zh' ? '关闭项目简介' : 'Close project overview');
    clearTimeout(copyStatusTimer);
    document.getElementById('copy-status').textContent = '';
    updatePhase();
    renderProject();
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
