window.PROJECT_DATA = {
  "wm": {
    "en": {
      "title": "Diagnosing World Models",
      "sections": [
        [
          "Why this question",
          "In CLIMB, I designed the action mask around possible errors in the world model and its readout, and I had noticed Dreamer's RSSM losing fidelity over long open-loop rollouts. That led me to ask how far imagined trajectories can be trusted, whether the agent or the model was limiting learning, and how a model's errors can be understood and located. Scores alone could not answer these questions."
        ],
        [
          "Approach",
          "I chose to begin with a controlled environment whose simulator gives the true state, so that competing explanations for a model's errors can be tested. Evaluations use the same physical scenes under different visibility conditions, so they differ in the information available to the model and not in the physics. Controlled faults and simple baselines test whether the diagnostics themselves are reliable."
        ],
        [
          "Current scope",
          "I am building the environment and designing the evaluations; findings will appear here once they are established. The project stops at diagnosis: locating a failure does not by itself explain how it arose during learning."
        ],
        [
          "Where it leads",
          "When a world model supplies an agent's experience, its failures shape what can be learned. Knowing where prediction stops being usable, and why, could inform what an agent imagines, when it returns to the real environment, and which experience is likely to open up new abilities. That is the question I want to pursue next."
        ],
        [
          "My role",
          "Research Assistant at City University of Hong Kong since October 2026, supervised by Prof. Yangchen Pan. I run the project independently and report to Prof. Pan."
        ]
      ]
    },
    "zh": {
      "title": "诊断世界模型",
      "sections": [
        [
          "研究缘起",
          "在 CLIMB 中，我围绕世界模型及其读出可能存在的误差设计了动作掩码；同时注意到 Dreamer 的 RSSM 在较长的开环预测中会逐渐失真。这让我开始追问：想象出的轨迹在多大程度上可信？限制学习的是智能体还是模型？模型的误差又该如何理解与定位？仅看分数无法回答这些问题。"
        ],
        [
          "研究方法",
          "我选择从一个受控环境入手：模拟器给出真实状态，关于模型误差的不同解释因此可以被检验。评测在不同可见条件下使用相同的物理场景，使它们只在模型可获得的信息上不同，而物理过程保持一致。受控故障和简单基线用于检验诊断方法本身是否可靠。"
        ],
        [
          "当前边界",
          "我正在构建环境并设计评测；结论确立后会在这里更新。项目止于诊断：定位一个失败，本身并不能解释它在学习过程中如何产生。"
        ],
        [
          "下一步",
          "当世界模型为智能体提供经验时，它的失败会影响智能体能学到什么。知道预测在哪里、为何不再可用，可以帮助决定智能体想象什么、何时回到真实环境，以及哪些经验更可能带来新的能力。这是我接下来想研究的问题。"
        ],
        [
          "我的角色",
          "自 2026 年 10 月起在香港城市大学担任研究助理，导师为 Yangchen Pan 教授。我独立开展这个项目，并向 Pan 教授汇报。"
        ]
      ]
    },
    "slug": "diagnosing-world-models",
    "links": [],
    "flow": [
      [
        "Observe",
        "Predict",
        "Compare with truth",
        "Diagnose"
      ],
      [
        "观察",
        "预测",
        "对照真实状态",
        "诊断"
      ]
    ]
  },
  "climb": {
    "en": {
      "title": "CLIMB",
      "sections": [
        [
          "The project",
          "A four-person group research project for UCL's Open-Endedness and General Intelligence module, which I led. We wanted DreamerV3 to reach deeper achievements in Craftax-Symbolic, a game with a long technology tree."
        ],
        [
          "What I proposed and implemented",
          "Three interventions, each changing what experience the agent collects or learns from: a feasibility mask on actions, episodic spatial and inventory novelty rewards, and novelty–learnability–uniform replay. Hand-specified feasibility rules use the environment's context during interaction, and a learned head's predictions from the RSSM latent state during imagination."
        ],
        [
          "A design decision",
          "During imagination, the mask relies on a learned estimate of the game state. I made it discourage apparently infeasible actions rather than block them, because errors in the model or its readout could otherwise stop the policy from considering a valid action. That concern, together with the loss of fidelity I noticed in Dreamer's RSSM over long open-loop rollouts, led to my current work on diagnosing world models."
        ],
        [
          "Results",
          "Across 19 configurations and three seeds, the full method roughly doubled the achievements completed per episode compared with a matched 50:50 replay baseline: a mean achievement rate of 0.200 ± 0.005 versus 0.099 ± 0.008 at 10M steps, over the final 200 episodes. Ablations identify the soft mask as the main isolated contributor; they are not a complete test of interactions between the three components."
        ],
        [
          "My role",
          "Project lead and first author of the course report. I proposed and implemented all three interventions."
        ]
      ]
    },
    "zh": {
      "title": "CLIMB",
      "sections": [
        [
          "项目",
          "UCL「开放性与通用智能」课程的四人小组研究项目，由我牵头。我们希望让 DreamerV3 在 Craftax-Symbolic 这一科技树很长的游戏中达成更深层的成就。"
        ],
        [
          "我提出并实现的工作",
          "三项干预，每一项都改变智能体采集或学习的经验：动作可行性掩码、基于空间与物品状态的回合内新颖性奖励，以及新颖性–可学习性–均匀（NLU）结构化回放。人工设定的可行性规则在真实交互中读取环境给出的上下文，在想象轨迹中则使用从 RSSM 隐状态学习的预测头的输出。"
        ],
        [
          "一个设计决定",
          "在想象轨迹中，掩码依赖模型对游戏状态的估计。我让它抑制看似不可行的动作，而不是直接屏蔽，因为模型或读出的误差可能让策略错过一个有效动作。这一考虑，加上我注意到 Dreamer 的 RSSM 在较长开环预测中逐渐失真，引出了我现在诊断世界模型的研究。"
        ],
        [
          "结果",
          "在 19 种配置、3 个种子的实验中，完整方法每回合完成的成就约为同预算 50:50 回放基线的两倍：10M 步时末 200 回合平均成就达成率为 0.200 ± 0.005，基线为 0.099 ± 0.008。消融实验显示，软掩码是单独贡献最大的组件；这些消融并不是对三项组件之间交互作用的完整检验。"
        ],
        [
          "我的角色",
          "项目负责人，课程报告第一作者。三项干预均由我提出并实现。"
        ]
      ]
    },
    "slug": "climb",
    "links": [
      [
        "Course report",
        "课程报告",
        "https://drive.google.com/file/d/1gaMJrD7gSBEMuSX1dTslX5YXVuqKP3I2/view?usp=sharing"
      ],
      [
        "Code",
        "代码",
        "https://github.com/shuhan-wang1/CLIMB"
      ]
    ],
    "flow": [
      [
        "Collect experience",
        "Shape actions & rewards",
        "Replay",
        "Learn"
      ],
      [
        "采集经验",
        "调整动作与奖励",
        "回放",
        "学习"
      ]
    ]
  },
  "qft": {
    "en": {
      "title": "OpenQFT",
      "sections": [
        [
          "The research question",
          "Can an agent discover the rules of an unfamiliar system through experiments, then use what it learns in a new system? OpenQFT studies scientific discovery and continual learning in controlled, interactive environments."
        ],
        [
          "The current direction",
          "The project has moved from particle-physics simulators to a simpler bead-machine laboratory. An agent chooses experiments, observes noisy outcomes, and builds an explanation that must make predictions beyond the observations it has collected. The interface is deliberately simple, so the challenge comes from discovery rather than specialist terminology."
        ],
        [
          "What I want to understand",
          "I am interested in the connection between choosing useful experiments, revising hypotheses, and carrying knowledge between unfamiliar systems. A good explanation should help with a new prediction; a useful memory should help with a new investigation."
        ],
        [
          "Current status",
          "Active, unpublished research. The benchmark and manuscript are being developed. This page gives a conceptual introduction; the full protocol, hidden mechanisms, experimental results, and manuscript are not yet public."
        ],
        [
          "My role",
          "Independent research: environment and benchmark design, implementation, agent evaluation, and experimental analysis."
        ]
      ]
    },
    "zh": {
      "title": "OpenQFT",
      "sections": [
        [
          "研究问题",
          "智能体能否通过实验发现陌生系统的规律，再把学到的知识用于新的系统？OpenQFT 在受控的交互环境中研究科学发现与持续学习。"
        ],
        [
          "当前方向",
          "项目已从粒子物理模拟转向更简洁的珠子机实验室。智能体自主选择实验、观察带噪声的结果，并建立能够预测已有观测之外情况的解释。简洁的界面让挑战集中在发现本身，而非专业术语。"
        ],
        [
          "我想理解什么",
          "我关心选择有用的实验、修订假设，以及在陌生系统之间积累知识如何联系起来。好的解释应当帮助做出新的预测；有用的记忆应当帮助开展下一次探索。"
        ],
        [
          "当前状态",
          "正在开展、尚未发表的研究。基准与论文仍在开发中。本页仅作概念介绍；完整协议、隐藏机制、实验结果和论文全文暂未公开。"
        ],
        [
          "我的角色",
          "独立研究：环境与基准设计、代码实现、智能体评测和实验分析。"
        ]
      ]
    },
    "slug": "openqft",
    "links": [],
    "flow": [
      [
        "Choose an experiment",
        "Observe outcomes",
        "Revise a hypothesis",
        "Predict something new"
      ],
      [
        "选择实验",
        "观察结果",
        "修订假设",
        "预测新情况"
      ]
    ]
  },
  "temporal": {
    "en": {
      "title": "Temporal Routing",
      "sections": [
        [
          "MSc dissertation",
          "Encoder-Based Temporal Routing for Software Engineering Agents: An Empirical Study of Trajectory-Conditioned Value Estimation. Dissertation supervisor: Professor Ilija Bogunovic (UCL)."
        ],
        [
          "The model",
          "A roughly 149M-parameter ModernBERT trajectory encoder with task-conditioned pooling and causal temporal modelling. The work examines whether partial agent trajectories contain useful information for cost-aware decisions."
        ],
        [
          "What the audits establish",
          "Preregistered multi-seed, bootstrap, fixed-budget, and cross-domain audits exposed sensitivity to model pair, domain, and model selection. The dissertation does not establish a universally deployable routing policy."
        ],
        [
          "Follow-up research",
          "Current empirical work separates aggregate prediction of task difficulty from discrimination among attempts at the same task. Early prefixes can mostly rank tasks; within-task discrimination appears later, with limited selection and pruning benefits in the evaluated settings. This follow-up remains a manuscript in development."
        ]
      ]
    },
    "zh": {
      "title": "时序路由与轨迹预测",
      "sections": [
        [
          "硕士论文",
          "Encoder-Based Temporal Routing for Software Engineering Agents: An Empirical Study of Trajectory-Conditioned Value Estimation。UCL 硕士论文，硕士论文导师为 Professor Ilija Bogunovic。"
        ],
        [
          "模型",
          "采用约 149M 参数的 ModernBERT 编码智能体轨迹，并结合任务条件池化与因果时序建模，研究部分执行轨迹能否为成本敏感决策提供有用信息。"
        ],
        [
          "审计结论",
          "预注册、多种子、bootstrap、固定预算与跨域审计发现，结果受到模型对、任务域与模型选择的影响。论文没有建立普适、可部署的路由策略。"
        ],
        [
          "后续研究",
          "当前实证工作区分总体题目难度预测与同题不同尝试的判别。早期前缀可能主要对题目排序；题内判别在后期出现，并在已评估设置下带来有限的选择与剪枝收益。这部分仍是开发中的研究手稿。"
        ]
      ]
    },
    "slug": "temporal-routing",
    "links": [
      [
        "MSc Thesis",
        "硕士论文",
        "https://drive.google.com/file/d/1APfXcH07AjycjdiYZ2i10BH3FxVxAXoh/view?usp=sharing"
      ]
    ],
    "flow": [
      [
        "Task",
        "Partial trajectory",
        "Value estimate",
        "Decision"
      ],
      [
        "任务",
        "部分轨迹",
        "价值估计",
        "决策"
      ]
    ]
  },
  "swe": {
    "en": {
      "title": "SWE-Router",
      "sections": [
        [
          "The question",
          "When should a multi-turn coding agent switch models? This collaborative project studies cost-aware routing from partial execution trajectories."
        ],
        [
          "My contribution",
          "I ran official SWE-bench and SWE-Smith grading in containers, collected multi-model trajectories with per-step cost annotations, and contributed to the public Hugging Face datasets."
        ],
        [
          "A research thought",
          "Intermediate behaviour becomes useful evidence when it is connected to a verifiable outcome. Collection, isolation, grading, and reproduction are central to that connection."
        ],
        [
          "Research output",
          "Co-authored work presented at the ICML 2026 Deep Learning for Code Workshop. The linked paper describes the collaborative method and findings."
        ]
      ]
    },
    "zh": {
      "title": "SWE-Router",
      "sections": [
        [
          "研究问题",
          "多轮编程智能体何时应该切换模型？这项合作研究从部分执行轨迹出发，研究成本敏感的模型路由。"
        ],
        [
          "我的贡献",
          "我在容器中运行 SWE-bench 和 SWE-Smith 官方评测，采集带逐步成本标注的多模型轨迹，并参与公开的 Hugging Face 数据集工作。"
        ],
        [
          "研究思考",
          "智能体的中间行为需要连接到可验证的结果，才能成为有用的证据。采集、隔离、评分与复现是这条连接的核心。"
        ],
        [
          "研究产出",
          "共同作者论文，发表于 ICML 2026 Deep Learning for Code Workshop。完整合作方法与结果见所附论文。"
        ]
      ]
    },
    "slug": "swe-router",
    "links": [
      [
        "Paper",
        "论文",
        "https://arxiv.org/abs/2607.00053"
      ]
    ],
    "flow": [
      [
        "Task & trajectory",
        "Routing decision",
        "Model execution",
        "Verified outcome"
      ],
      [
        "任务与轨迹",
        "路由决策",
        "模型执行",
        "验证结果"
      ]
    ]
  },
  "rope": {
    "en": {
      "title": "RopeBand",
      "sections": [
        [
          "The question",
          "Can rotations that respect RoPE geometry help dynamic 4-bit quantisation? The project connects a mathematical characterisation with an empirical test."
        ],
        [
          "Theory",
          "The work characterises rotations that commute with RoPE and derives closed-form optimal angles for a scoped variance surrogate."
        ],
        [
          "What the experiments show",
          "The evaluated pairwise-only transforms did not outperform full-head Hadamard. The study examines the mismatch between the surrogate objective, mixing support, and the scale statistic used by the quantiser."
        ],
        [
          "A research thought",
          "An optimum for a surrogate is a precise mathematical statement. Whether that optimum improves the deployed computation is a separate question, which the experiments must answer."
        ],
        [
          "Status",
          "First author; under review at TMLR. The preprint is linked below."
        ]
      ]
    },
    "zh": {
      "title": "RopeBand",
      "sections": [
        [
          "研究问题",
          "尊重 RoPE 几何结构的旋转，能否帮助动态 4-bit 量化？项目将数学刻画与实证检验连接起来。"
        ],
        [
          "理论",
          "工作刻画与 RoPE 可交换的旋转族，并为限定的方差代理目标推导闭式最优角。"
        ],
        [
          "实验发现",
          "所测逐对旋转未优于全头 Hadamard。研究分析代理目标、混合支持与量化器定标统计量之间的失配。"
        ],
        [
          "研究思考",
          "代理目标上的最优解是一个精确的数学结论。它是否改善实际计算，需要由另一个实证问题来回答。"
        ],
        [
          "状态",
          "第一作者，TMLR 审稿中。预印本链接见下方。"
        ]
      ]
    },
    "slug": "ropeband",
    "links": [
      [
        "Preprint",
        "预印本",
        "https://arxiv.org/abs/2608.13365"
      ]
    ],
    "flow": [
      [
        "RoPE geometry",
        "Scoped objective",
        "Optimal rotation",
        "Quantisation test"
      ],
      [
        "RoPE 几何",
        "限定的目标",
        "最优旋转",
        "量化检验"
      ]
    ]
  },
  "rent": {
    "en": {
      "title": "RentCompass",
      "sections": [
        [
          "The product",
          "An independently built UK rental agent for listing searches, commute planning, and neighbourhood comparison."
        ],
        [
          "What I built",
          "Structured conversational state, a bounded function-calling loop, evidence checks, optional MCP tools, and recoverable multi-turn sessions. Releases support rollback."
        ],
        [
          "A design thought",
          "A housing decision depends on several constraints at once. Keeping those constraints in structured state allows the conversation to connect tool-backed evidence to the next practical decision."
        ],
        [
          "Current status",
          "Deployed product. Visit the live site through the link below."
        ]
      ]
    },
    "zh": {
      "title": "RentCompass",
      "sections": [
        [
          "产品",
          "独立构建的英国租房智能体，支持房源搜索、通勤规划和社区比较。"
        ],
        [
          "实现内容",
          "结构化会话状态、有界函数调用循环、证据核查、可选 MCP 工具，以及可恢复的多轮会话。发布流程支持回滚。"
        ],
        [
          "设计思考",
          "租房决策同时依赖多个约束。将约束保存在结构化状态中，才能让对话把工具提供的证据连接到下一步实际决策。"
        ],
        [
          "当前状态",
          "已部署产品，可通过下方链接访问。"
        ]
      ]
    },
    "slug": "rentcompass",
    "links": [
      [
        "Visit RentCompass",
        "访问 RentCompass",
        "https://rentcompass.co.uk"
      ]
    ],
    "flow": [
      [
        "Your constraints",
        "Search & tools",
        "Check evidence",
        "Compare options"
      ],
      [
        "你的需求",
        "搜索与工具",
        "核查证据",
        "比较方案"
      ]
    ]
  }
};
