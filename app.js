(() => {
  'use strict';

  const zh = {
    skip: '跳至正文', navAbout: '关于', navResearch: '研究', navPapers: '论文', navContact: '联系', cv: '简历',
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
    researchIntro: '从诊断世界模型，到隐藏的粒子世界。<br>这些是我正在研究的问题。',
    filterAll: '全部项目 <span>07</span>', filterWorld: '世界模型', filterAgents: '智能体与系统', filterTheory: '理论与效率', toolbarNote: '研究 + 实现',
    catDiagnosis: '当前研究 · 世界模型诊断', wmTitle: '诊断世界模型', wmQuestion: '习得的世界模型在哪里出错？为什么？',
    wmDescription: '在香港城市大学独立开展的研究项目，导师为 Yangchen Pan 教授。我正在构建一个已知真实状态的受控环境，让关于模型误差来源的不同解释可以被检验，而不只是假设。',
    wmInsight: '评测在保持环境动力学不变的同时，改变模型能观察到的信息；并用受控故障和简单基线检验诊断方法本身。',
    wmRole: '研究助理 <span class="role-dot">·</span> 香港城市大学 <span class="role-dot">·</span> 2026 年 10 月起',
    tagWorldModels: '世界模型', tagGroundTruth: '已知真实状态', tagDiagnostics: '诊断设计',
    catDiscovery: '开放式科学发现', qftQuestion: '智能体能发现隐藏宇宙的物理规律吗？',
    qftDescription: '一个由简化粒子物理世界组成的基准，不同世界遵循不同的物理规律。智能体主动选择碰撞实验，推断隐藏粒子与相互作用规律，并根据部分、带噪声的观测修订自己的世界模型。',
    qftInsight: '核心循环基于 JAX 实现，其中的贝叶斯学习器会选择信息量最大的下一个实验。长期目标是检验智能体能否学到可迁移到陌生世界的发现策略。',
    qftRole: '独立研究 <span class="role-dot">·</span> 开发中', tagSMC: 'SMC / 贝叶斯推断', tagExperiment: '实验设计', details: '项目简介',
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
    uclDescription: '授课部分均分 79.3/100。<br>硕士论文研究软件工程智能体的时序路由，导师为 Ilija Bogunovic。',
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
  const projectNotes = {
    wm: {
      en: { title: 'Diagnosing World Models', sections: [
        ['Why this question', 'In CLIMB, I designed the action mask around possible errors in the world model and its readout, and I had noticed Dreamer\'s RSSM losing fidelity over long open-loop rollouts. That led me to ask how far imagined trajectories can be trusted, whether the agent or the model was limiting learning, and how a model\'s errors can be understood and located. Scores alone could not answer these questions.'],
        ['Approach', 'I chose to begin with a controlled environment whose simulator gives the true state, so that competing explanations for a model\'s errors can be tested. Evaluations use the same physical scenes under different visibility conditions, so they differ in the information available to the model and not in the physics. Controlled faults and simple baselines test whether the diagnostics themselves are reliable.'],
        ['Current scope', 'I am building the environment and designing the evaluations; findings will appear here once they are established. The project stops at diagnosis: locating a failure does not by itself explain how it arose during learning.'],
        ['Where it leads', 'When a world model supplies an agent\'s experience, its failures shape what can be learned. Knowing where prediction stops being usable, and why, could inform what an agent imagines, when it returns to the real environment, and which experience is likely to open up new abilities. That is the question I want to pursue next.'],
        ['My role', 'Research Assistant at City University of Hong Kong since October 2026, supervised by Prof. Yangchen Pan. I run the project independently and report to Prof. Pan.']
      ]},
      zh: { title: '诊断世界模型', sections: [
        ['研究缘起', '在 CLIMB 中，我围绕世界模型及其读出可能存在的误差设计了动作掩码；同时注意到 Dreamer 的 RSSM 在较长的开环预测中会逐渐失真。这让我开始追问：想象出的轨迹在多大程度上可信？限制学习的是智能体还是模型？模型的误差又该如何理解与定位？仅看分数无法回答这些问题。'],
        ['研究方法', '我选择从一个受控环境入手：模拟器给出真实状态，关于模型误差的不同解释因此可以被检验。评测在不同可见条件下使用相同的物理场景，使它们只在模型可获得的信息上不同，而物理过程保持一致。受控故障和简单基线用于检验诊断方法本身是否可靠。'],
        ['当前边界', '我正在构建环境并设计评测；结论确立后会在这里更新。项目止于诊断：定位一个失败，本身并不能解释它在学习过程中如何产生。'],
        ['下一步', '当世界模型为智能体提供经验时，它的失败会影响智能体能学到什么。知道预测在哪里、为何不再可用，可以帮助决定智能体想象什么、何时回到真实环境，以及哪些经验更可能带来新的能力。这是我接下来想研究的问题。'],
        ['我的角色', '自 2026 年 10 月起在香港城市大学担任研究助理，导师为 Yangchen Pan 教授。我独立开展这个项目，并向 Pan 教授汇报。']
      ]}
    },
    climb: {
      en: { title: 'CLIMB', sections: [
        ['The project', 'A four-person group research project for UCL\'s Open-Endedness and General Intelligence module, which I led. We wanted DreamerV3 to reach deeper achievements in Craftax-Symbolic, a game with a long technology tree.'],
        ['What I proposed and implemented', 'Three interventions, each changing what experience the agent collects or learns from: a feasibility mask on actions, episodic spatial and inventory novelty rewards, and novelty–learnability–uniform replay. Hand-specified feasibility rules use the environment\'s context during interaction, and a learned head\'s predictions from the RSSM latent state during imagination.'],
        ['A design decision', 'During imagination, the mask relies on a learned estimate of the game state. I made it discourage apparently infeasible actions rather than block them, because errors in the model or its readout could otherwise stop the policy from considering a valid action. That concern, together with the loss of fidelity I noticed in Dreamer\'s RSSM over long open-loop rollouts, led to my current work on diagnosing world models.'],
        ['Results', 'Across 19 configurations and three seeds, the full method roughly doubled the achievements completed per episode compared with a matched 50:50 replay baseline: a mean achievement rate of 0.200 ± 0.005 versus 0.099 ± 0.008 at 10M steps, over the final 200 episodes. Ablations identify the soft mask as the main isolated contributor; they are not a complete test of interactions between the three components.'],
        ['My role', 'Project lead and first author of the course report. I proposed and implemented all three interventions.']
      ]},
      zh: { title: 'CLIMB', sections: [
        ['项目', 'UCL「开放性与通用智能」课程的四人小组研究项目，由我牵头。我们希望让 DreamerV3 在 Craftax-Symbolic 这一科技树很长的游戏中达成更深层的成就。'],
        ['我提出并实现的工作', '三项干预，每一项都改变智能体采集或学习的经验：动作可行性掩码、基于空间与物品状态的回合内新颖性奖励，以及新颖性–可学习性–均匀（NLU）结构化回放。人工设定的可行性规则在真实交互中读取环境给出的上下文，在想象轨迹中则使用从 RSSM 隐状态学习的预测头的输出。'],
        ['一个设计决定', '在想象轨迹中，掩码依赖模型对游戏状态的估计。我让它抑制看似不可行的动作，而不是直接屏蔽，因为模型或读出的误差可能让策略错过一个有效动作。这一考虑，加上我注意到 Dreamer 的 RSSM 在较长开环预测中逐渐失真，引出了我现在诊断世界模型的研究。'],
        ['结果', '在 19 种配置、3 个种子的实验中，完整方法每回合完成的成就约为同预算 50:50 回放基线的两倍：10M 步时末 200 回合平均成就达成率为 0.200 ± 0.005，基线为 0.099 ± 0.008。消融实验显示，软掩码是单独贡献最大的组件；这些消融并不是对三项组件之间交互作用的完整检验。'],
        ['我的角色', '项目负责人，课程报告第一作者。三项干预均由我提出并实现。']
      ]}
    },
    qft: {
      en: { title: 'OpenQFT-Bench', sections: [
        ['The research question', 'Can an agent discover hidden entities and interaction laws by choosing its own experiments? OpenQFT uses generated particle-physics worlds with different physical laws as a controlled testbed. The long-term objective is to test whether agents learn discovery strategies that transfer to unfamiliar worlds.'],
        ['What I am building', 'A core loop in JAX: a simulator that generates hidden worlds, an environment in which agents run experiments, a Bayesian learner that updates its beliefs with Sequential Monte Carlo and picks the most informative next experiment, and checks of both its predictions and the rules it recovers. The current open-ended track uses an LHC-like collider and asks agents to submit an executable theory, a particle table, and a law report.'],
        ['Current scope', 'Tracks A, B, C, and E are completed controlled studies. Track D is parked. Track F, the open-ended physicist benchmark, is under construction; its release protocol is not frozen and it has no valid agent episode under the current physics law. Cross-world learning is an evaluation objective, not an established result.'],
        ['My role', 'Independent research: benchmark design, implementation, reference inference, experiment orchestration, and evaluation.']
      ]},
      zh: { title: 'OpenQFT-Bench', sections: [
        ['研究问题', '智能体能否通过自主选择实验，发现隐藏实体与相互作用规律？OpenQFT 以遵循不同物理规律的生成粒子物理世界作为受控测试平台，长期目标是检验智能体能否学到可迁移到陌生世界的发现策略。'],
        ['正在构建', '基于 JAX 的核心循环：生成隐藏世界的模拟器、供智能体开展实验的环境、用序贯蒙特卡洛更新信念并选择信息量最大的下一个实验的贝叶斯学习器，以及对其预测和所恢复规律的检验。当前开放式方向使用类 LHC 对撞机，要求智能体提交可执行理论、粒子表与规律报告。'],
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
