window.PROJECT_DATA = {
  "wm": {
    "en": {
      "title": "Diagnosing World Models",
      "headline": "When a world model learns unevenly.",
      "summary": "What changes inside a world model while it learns—and which measurements help us understand those changes?",
      "sections": [
        [
          "The question behind the project",
          "A world model does several things at once: it interprets observations, forms a state estimate, and anticipates what might happen next. A single score can tell us that something changed without explaining which of these abilities changed.\n\nMy interest in this began with CLIMB, where an agent depended on imagined experience. I wanted to understand when that experience could be trusted. At City University of Hong Kong, supervised by Prof. Yangchen Pan, I am studying the measurements that might help answer that question."
        ],
        [
          "One model, different directions",
          "In an exploratory offline study, two internal readouts of the same physical quantity moved in opposite directions as training continued. A readout of the visual representation improved, while a readout of the model's inferred state became worse. The direction repeated in three training runs on the same data split.\n\nThe figure below shows selected earlier and later observations, with each run's earlier error set to 100. It is a small piece of evidence for uneven learning within one model. It does not establish where information was lost, or which component caused the difference."
        ],
        [
          "The measurement is part of the problem",
          "A readout is itself a learned model. If it struggles to recover a property, the difficulty may lie in the representation, in the readout, or in the data used to fit it. I have found that changing the readout can change the apparent ordering of internal representations.\n\nThat makes measurement checks central to the research. What a readout can recover is one kind of evidence. It does not establish that the world model uses that information, and failure to recover it does not prove the information is absent."
        ],
        [
          "Finding a change, and explaining it",
          "A more detailed diagnostic has to earn its complexity. In the experiments so far, the internal readouts did not provide a consistent earlier warning than quantities already available in the training losses. Their possible value is in distinguishing what changes inside the model.\n\nI am also treating diagnosis and improvement as separate claims. A plausible explanation does not guarantee that the intervention it suggests will work. The explanation needs a test, and the resulting change needs comparison with simple alternatives."
        ],
        [
          "Understanding the present, predicting the future",
          "A model can become better at representing its current observations without becoming better at predicting far ahead. In the current experiments, short-range gains have not established long-horizon gains. Whether the changes improve an agent's behaviour is still an open question.\n\nThis is the connection I want to understand: which internal changes matter for the experience an agent imagines, and which measurements can help us reason about that experience."
        ],
        [
          "Where the evidence stands",
          "This is ongoing, unpublished research. The figure is an exploratory observation from three training runs sharing one dataset and split; the evaluation data were excluded from world-model training but have been reused during analysis. It is not fresh independent confirmation or a general result about all world models.\n\nThis public note shares observations and research intuition. The diagnostic implementation, specific intervention choices, configurations, and full experimental records remain private while the study develops. I lead the project independently as a Research Assistant at City University of Hong Kong, supervised by Prof. Yangchen Pan, since October 2026."
        ]
      ]
    },
    "zh": {
      "title": "诊断世界模型",
      "headline": "当一个世界模型学得并不同步。",
      "summary": "世界模型在学习过程中，内部究竟发生了什么变化？哪些测量能帮助我们理解这些变化？",
      "sections": [
        [
          "项目背后的问题",
          "世界模型同时在做几件事：理解观测、形成状态估计，以及预测接下来可能发生什么。一个总分可以告诉我们发生了变化，却未必能解释是哪一种能力发生了变化。\n\n我对这个问题的兴趣始于 CLIMB：智能体依赖想象出来的经验，我想理解这些经验何时可信。现在，我在香港城市大学、Yangchen Pan 教授指导下，研究哪些测量可能帮助回答这个问题。"
        ],
        [
          "同一个模型，不同的走向",
          "在一项探索性的离线研究中，对同一个物理量的两种内部读数，随训练呈现出相反的走向。视觉表示上的读数变好，而模型所估计状态上的读数变差。这个方向在使用同一数据划分的三次训练中重复出现。\n\n下图展示选取的早期与后期观测，各次训练的早期误差都设为 100。这为同一模型内部的学习不同步提供了一条局部证据，但不证明信息在哪里丢失，也不证明差异由哪个部件造成。"
        ],
        [
          "测量本身，也是问题的一部分",
          "读数器本身也是一个学习模型。如果它难以恢复某个属性，问题可能来自表示、读数器，或者拟合它所用的数据。我发现，更换读数器，可能改变对不同内部表示优劣的判断。\n\n因此，核查测量方式是这项研究的核心。读数器能恢复什么，是一种证据；它不证明世界模型实际使用了这些信息。读不出来，也不证明信息不存在。"
        ],
        [
          "发现变化，与解释变化",
          "更细的诊断需要证明额外复杂度的价值。目前的实验中，内部读数并没有比训练损失里已有的量提供一致更早的预警。它们可能的价值，在于区分模型内部发生了什么变化。\n\n我也把诊断与改进当作两个需要分别验证的主张。一个看似合理的解释，不保证它建议的干预就有效。解释需要接受检验，改动的效果也需要与简单方案比较。"
        ],
        [
          "理解现在，与预测未来",
          "模型可能更善于表示当前观测，却没有更善于预测更远的未来。在目前的实验里，短期改善尚未带来已确立的长期预测改善。这些变化是否帮助智能体的行为，仍是开放问题。\n\n这也是我想理解的联系：哪些内部变化会影响智能体想象出的经验？哪些测量能帮助我们判断这些经验？"
        ],
        [
          "目前的证据到哪里",
          "这是一项仍在进行、尚未发表的研究。配图来自共享同一数据集与划分的三次训练，是探索性观察。评测数据没有参与世界模型训练，但已在分析中重复使用；它不是新的独立确认，也不能推广为所有世界模型的结论。\n\n这篇公开笔记分享现象与研究直觉。研究进行期间，诊断实现、具体干预选择、配置和完整实验记录暂不公开。我自 2026 年 10 月起在香港城市大学担任研究助理，在 Yangchen Pan 教授指导下独立牵头这个项目。"
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
    ],
    "blog": true,
    "kicker": {
      "en": "WORLD MODELS / RESEARCH JOURNAL",
      "zh": "世界模型 / 研究随笔"
    },
    "overview": {
      "en": [
        [
          "The question",
          "How do perception, state estimation, and prediction change while a visual world model learns? I study which measurements can help distinguish those changes."
        ],
        [
          "An early observation",
          "Two internal readouts can move in opposite directions during training. This exploratory pattern repeated across three runs sharing one dataset and split. The full note discusses what it does—and does not—show."
        ],
        [
          "Role and status",
          "Independent project at City University of Hong Kong, supervised by Prof. Yangchen Pan. Ongoing, unpublished research."
        ]
      ],
      "zh": [
        [
          "研究问题",
          "视觉世界模型学习时，感知、状态估计和预测如何变化？我研究哪些测量能帮助区分这些变化。"
        ],
        [
          "初步观察",
          "两种内部读数可能随训练呈相反走向。这个探索性模式在共享同一数据集和划分的三次训练中重复出现，完整笔记说明了它能与不能支持什么。"
        ],
        [
          "角色与状态",
          "在香港城市大学独立开展的项目，导师为 Yangchen Pan 教授。研究进行中，尚未发表。"
        ]
      ]
    },
    "figures": [
      {
        "after": 1,
        "src": "assets/world-models/uneven-learning.png",
        "width": 2000,
        "height": 1000,
        "en": {
          "alt": "Two selected endpoint comparisons across three training runs. Visual-representation readout error decreases, while state-estimation readout error increases. Each earlier error is normalized to 100.",
          "caption": "Exploratory comparison of two readouts of one physical quantity. Thin lines: three training runs sharing one dataset and split; bold lines: their mean after each run and measure is normalized to its earlier error (100). Lines connect selected endpoints, not a full training curve. Evaluation episodes were excluded from world-model training but reused in analysis. These readout errors do not establish causal responsibility or information loss."
        },
        "zh": {
          "alt": "三次训练的两个选取时点对比。视觉表示读数误差下降，状态估计读数误差上升；各自的早期误差均归一为 100。",
          "caption": "对同一个物理量的两种读数的探索性比较。细线为共享同一数据集与划分的三次训练；每次训练、每种读数的早期误差各自设为 100，粗线为归一化后的均值。连线仅连接选取的时点，不表示完整训练曲线。评测轨迹未参与世界模型训练，但已用于分析。这些读数误差不证明因果责任或信息丢失。"
        }
      }
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
      "headline": "Learning to discover. Learning from discovery.",
      "summary": "Some thoughts on scientific discovery, useful experience, and what it means for an agent to keep learning.",
      "sections": [
        [
          "What should an agent learn from discovery?",
          "I keep coming back to two questions. Can an agent work out something unfamiliar by choosing its own experiments? And when it encounters a new problem, does the earlier investigation make it a better learner?\n\nOpenQFT grew out of wanting to study these questions together. A successful investigation is interesting in its own right. I am even more interested in what survives it: a useful idea, a better question, or a habit of checking an explanation before trusting it."
        ],
        [
          "An intuition from the history of science",
          "One inspiration is the history of particle physics. Observations arrived before a complete explanation. Researchers had to look for regularities, ask what those regularities implied, and decide which observation might change the picture. An explanation earned its value by helping them anticipate something they had not yet seen.\n\nWhat interests me is this movement between evidence and explanation. Each discovery changes the questions that become worth asking. Experience can do more than supply another answer; it can change how the next investigation begins."
        ],
        [
          "A snapshot across models",
          "The initial-evaluation snapshot now includes GPT-6.1 Terra (gpt-6.1-terra), GPT-6 Luna (gpt-6-luna), GPT-6.2 Sol (gpt-6.2-sol), and Claude Opus 5.5 (claude-opus-5-5). All scores below are expressed as a percentage of the theoretical maximum: a perfect score is 100%.\n\nComplete and Partial describe study coverage, not task success. The GPT-6.1 Terra and GPT-6 Luna main studies are complete. The GPT-6.2 Sol study is partial, and Claude Opus 5.5 currently has initial-evaluation results only. The initial batch is complete for all four models; the Partial label refers to the broader study.\n\nThe table separates initial evaluation from the experience comparison. They use different evaluation subsets, so a change between these columns should not be read as an improvement over time. Partial experience results include only completed matched comparisons; unfinished evaluations are omitted, not scored as zero. These are descriptive snapshots, rather than a definitive ranking."
        ],
        [
          "Collecting evidence is only part of the work",
          "Choosing an experiment and making sense of its outcome are different abilities. An agent can collect observations while still missing a useful explanation. It can also settle on a plausible story too early and keep gathering evidence that fits it.\n\nThe GPT-6.1 Terra study motivates a closer look at this distinction. The comparison below places GPT-6.1 Terra alongside a diagnostic reference analysis. That reference also receives additional information, so the gap does not isolate a reasoning deficit. It is a prompt to ask which parts of an investigation need help, rather than a claim that every answer was already available to the agent."
        ],
        [
          "When experience helps—and when it gets in the way",
          "A later investigation need not begin from an empty page. In the selected GPT-6.1 Terra comparison below, accumulated experience is associated with better performance. That is encouraging: something from an earlier investigation can be useful again.\n\nBut useful memory needs judgement. A good explanation can guide a new experiment; an untested assumption can guide it in the wrong direction. I want to understand how an agent can carry forward what it has learnt while staying willing to revise it. The figure also includes the complete GPT-6 Luna study and available partial GPT-6.2 Sol results. Claude Opus 5.5 has no completed experience comparison to show yet. These descriptive means do not imply that memory helps every investigation."
        ],
        [
          "The question I want to keep asking",
          "For me, the exciting possibility is an agent whose experience improves the way it investigates. It notices when an explanation stops working, asks a more revealing question, and brings a useful idea to an unfamiliar problem.\n\nThat connects scientific discovery to continual learning: progress in one investigation becomes part of how the next one is approached. OpenQFT is where I am exploring that connection."
        ],
        [
          "A research note, while the work develops",
          "This is an intuition-led preview of independent, unpublished research. Figures show selected descriptive means, with 100% marking the theoretical maximum for the measure in each figure. The diagnostic measure and the overall evaluation score are different measures. Study coverage is marked explicitly. Experimental mechanisms and the full paper remain private while the work develops."
        ]
      ]
    },
    "zh": {
      "title": "OpenQFT",
      "headline": "学会发现，也从发现中学习。",
      "summary": "关于科学发现、有用的经验，以及智能体如何持续学习的一些思考。",
      "sections": [
        [
          "智能体应该从发现中学到什么？",
          "我一直在想两个问题：智能体能否通过自己选择的实验，理解一个陌生的系统？当它遇到新问题时，之前的探索会不会让它更善于学习？\n\nOpenQFT 源于把这两个问题放在一起研究的想法。完成一次探索本身很有意思，但我更关心探索之后留下了什么：一个有用的想法、一个更好的问题，或者在相信解释之前先检验它的习惯。"
        ],
        [
          "来自科学史的直觉",
          "一个灵感来自粒子物理的发展史。观测往往先于完整的解释出现。研究者需要从中寻找规律，追问规律意味着什么，再决定什么样的新观测可能改变现有认识。一个解释的价值，体现在它能否帮助预见尚未观察到的东西。\n\n我感兴趣的是证据与解释之间的往返。每一次发现，都会改变接下来值得追问的问题。经验除了提供另一个答案，也可能改变下一次探索的起点。"
        ],
        [
          "几种模型的结果快照",
          "初始评测快照现在包括 GPT-6.1 Terra（gpt-6.1-terra）、GPT-6 Luna（gpt-6-luna）、GPT-6.2 Sol（gpt-6.2-sol）和 Claude Opus 5.5（claude-opus-5-5）。下方分数均按理论满分换算为百分比：满分为 100%。\n\nComplete 和 Partial 表示研究的完成状态，不表示任务成功率。GPT-6.1 Terra 和 GPT-6 Luna 的主线研究已完整；GPT-6.2 Sol 的研究仍是 partial，Claude Opus 5.5 目前只有初始评测结果。四个模型的初始批次均已完成；Partial 指的是更完整的研究尚未完成。\n\n表格将初始评测与经验对比分开。两者使用不同的评测子集，因此不能将跨列差值理解为随时间提升。Partial 的经验结果仅包含已完成的匹配比较；未完成评测暂不纳入，也不记为零分。这些是描述性的结果快照，不作为最终排名。"
        ],
        [
          "收集证据，只是工作的一部分",
          "选择实验和理解结果，是两种不同的能力。智能体可能积累了许多观测，却仍然错过一个有用的解释；也可能过早相信一个看似合理的故事，此后只收集符合它的证据。\n\nGPT-6.1 Terra 的研究让我想进一步区分这些环节。下图将 GPT-6.1 Terra 与一个诊断性的参考分析进行对照。参考分析还获得了额外信息，因此差距不能单独归因于推理能力。它促使我追问探索中的哪些环节需要帮助，而不是断言答案早已完整地呈现在智能体面前。"
        ],
        [
          "经验何时有用，又何时会妨碍探索？",
          "后一次探索不必从空白开始。在下方选取的 GPT-6.1 Terra 对比中，积累经验时的表现更好。这是一个令人感兴趣的信号：之前的探索确实可能留下一些再次派得上用场的东西。\n\n但如何使用记忆，同样需要判断。好的解释可以指引下一次实验，未经检验的假设也可能把探索带偏。我想理解的是：智能体如何带着已有知识继续前进，同时保留修订它的意愿。图中也加入了完整的 GPT-6 Luna 研究，以及 GPT-6.2 Sol 已完成的部分结果。Claude Opus 5.5 暂无已完成的经验对比。这些描述性均值并不意味着记忆会帮助每一次探索。"
        ],
        [
          "我想继续追问的问题",
          "让我期待的，是一个能让经验改善自身探索方式的智能体。它能注意到解释何时不再适用，提出更有启发性的问题，也能把一个有用的想法带到陌生的问题中。\n\n这把科学发现与持续学习联系起来：一次探索中的进展，成为下一次探索方式的一部分。OpenQFT 是我探索这条联系的研究项目。"
        ],
        [
          "写在研究进行中",
          "这是尚未发表的独立研究的一篇直觉笔记。图中展示选取结果的描述性均值，100% 表示每张图中相应指标的理论满分。诊断指标与整体评测分数是不同指标。研究完成状态已分别标注。研究进行期间，具体实验机制与论文全文仍暂不公开。"
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
    ],
    "blog": true,
    "overview": {
      "en": [
        [
          "The question",
          "Can an agent learn to investigate an unfamiliar system, and use that experience to approach the next problem better?"
        ],
        [
          "Research note",
          "The full page shares the intuition behind OpenQFT and simplified views of selected model results, including GPT-6.1 Terra."
        ],
        [
          "Status",
          "Independent, unpublished research. Technical details and the manuscript are not public."
        ]
      ],
      "zh": [
        [
          "研究问题",
          "智能体能否学会探索陌生系统，并用这段经验更好地面对下一个问题？"
        ],
        [
          "研究笔记",
          "完整页面分享 OpenQFT 背后的直觉，以及选取模型结果（含 GPT-6.1 Terra）制作的简化公开图。"
        ],
        [
          "状态",
          "独立开展、尚未发表的研究，技术细节与论文全文暂未公开。"
        ]
      ]
    },
    "figures": [
      {
        "after": 2,
        "src": "assets/openqft/model-discovery.png",
        "width": 2200,
        "height": 1000,
        "en": {
          "alt": "Initial evaluation: GPT-6.1 Terra 23.9%, GPT-6 Luna 1.2%, GPT-6.2 Sol 40.0%, Claude Opus 5.5 43.6%. The theoretical maximum is 100%. Sol and Opus are marked Partial for overall study coverage.",
          "caption": "Initial-evaluation means, as a percentage of the theoretical maximum (100%). All four initial batches are complete. Complete/Partial denotes coverage of the broader study; partial studies use hatched bars. This snapshot does not establish a definitive model ranking."
        },
        "zh": {
          "alt": "初始评测：GPT-6.1 Terra 23.9%、GPT-6 Luna 1.2%、GPT-6.2 Sol 40.0%、Claude Opus 5.5 43.6%，理论满分为 100%。Sol 和 Opus 的整体研究标注为 Partial。",
          "caption": "初始评测均值，按理论满分（100%）换算。四个初始批次均已完成。Complete/Partial 表示整体研究覆盖情况，部分研究采用斜线柱形。此快照不构成最终模型排名。"
        }
      },
      {
        "after": 3,
        "src": "assets/openqft/terra-evidence.png",
        "width": 2200,
        "height": 720,
        "en": {
          "alt": "GPT-6.1 Terra: 9.2%; diagnostic reference with extra information: 54.6%. The theoretical maximum for this diagnostic measure is 100%.",
          "caption": "GPT-6.1 Terra: selected diagnostic measure, with its theoretical maximum marked at 100%. The reference has additional information; this is not an equal-information baseline. This measure differs from the overall score in the other figures. Mechanism details remain private."
        },
        "zh": {
          "alt": "GPT-6.1 Terra：9.2%；具有额外信息的诊断参照：54.6%。此诊断指标的理论满分为 100%。",
          "caption": "GPT-6.1 Terra 的选取诊断指标，理论满分标为 100%。参照具有额外信息，并非信息条件相同的基线。此指标与其他图中的整体分数不同；具体机制暂不公开。"
        }
      },
      {
        "after": 4,
        "src": "assets/openqft/model-experience.png",
        "width": 2200,
        "height": 1100,
        "en": {
          "alt": "Without/with accumulated experience: GPT-6.1 Terra 30.4%/37.9%, GPT-6 Luna 0.5%/1.4%, GPT-6.2 Sol 39.5%/46.2%. Perfect score is 100%. Sol is Partial. Opus has no available experience comparison.",
          "caption": "Experience comparison: descriptive means from completed matched comparisons, with 100% marking the theoretical maximum. GPT-6.1 Terra and GPT-6 Luna are complete; GPT-6.2 Sol is partial and covers a different subset. No Claude Opus 5.5 experience result is available. Missing evaluations are not zeros. These means do not establish a universal memory benefit."
        },
        "zh": {
          "alt": "未积累/积累经验：GPT-6.1 Terra 30.4%/37.9%、GPT-6 Luna 0.5%/1.4%、GPT-6.2 Sol 39.5%/46.2%。满分为 100%；Sol 为 Partial，Opus 暂无经验对比。",
          "caption": "经验对比：已完成匹配比较的描述性均值，100% 为理论满分。GPT-6.1 Terra 与 GPT-6 Luna 已完整；GPT-6.2 Sol 为部分结果，覆盖不同子集。Claude Opus 5.5 暂无经验对比结果。缺失评测不记为零；这些均值不代表记忆具有普遍收益。"
        }
      }
    ],
    "resultsTable": {
      "after": 2,
      "en": {
        "headers": [
          "Model",
          "Study coverage",
          "Initial evaluation",
          "Without experience",
          "With experience"
        ],
        "caption": "Results snapshot · theoretical maximum = 100%",
        "missing": "Not available",
        "complete": "Complete",
        "partial": "Partial"
      },
      "zh": {
        "headers": [
          "模型",
          "研究状态",
          "初始评测",
          "未积累经验",
          "积累经验"
        ],
        "caption": "结果快照 · 理论满分 = 100%",
        "missing": "暂无结果",
        "complete": "完整",
        "partial": "部分结果"
      },
      "rows": [
        {
          "model": "GPT-6.1 Terra",
          "identifier": "gpt-6.1-terra",
          "status": "Complete",
          "scores": [
            23.9,
            30.4,
            37.9
          ]
        },
        {
          "model": "GPT-6 Luna",
          "identifier": "gpt-6-luna",
          "status": "Complete",
          "scores": [
            1.2,
            0.5,
            1.4
          ]
        },
        {
          "model": "GPT-6.2 Sol",
          "identifier": "gpt-6.2-sol",
          "status": "Partial",
          "scores": [
            40.0,
            39.5,
            46.2
          ]
        },
        {
          "model": "Claude Opus 5.5",
          "identifier": "claude-opus-5-5",
          "status": "Partial",
          "scores": [
            43.6,
            null,
            null
          ]
        }
      ]
    }
  },
  "temporal": {
    "en": {
      "title": "Temporal Routing",
      "sections": [
        [
          "MSc dissertation",
          "Encoder-Based Temporal Routing for Software Engineering Agents: An Empirical Study of Trajectory-Conditioned Value Estimation. Dissertation supervisor: Professor Ilija Bogunovic (UCL). Thesis mark: 77.5/100."
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
          "Encoder-Based Temporal Routing for Software Engineering Agents: An Empirical Study of Trajectory-Conditioned Value Estimation。UCL 硕士论文，硕士论文导师为 Professor Ilija Bogunovic。 硕士论文成绩：77.5/100。"
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
