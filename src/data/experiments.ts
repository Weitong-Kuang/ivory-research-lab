export interface Experiment {
  id: string;
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  status: 'ongoing' | 'completed' | 'failed';
  icon: string; // lucide icon name
  contentEn: string;
  contentZh: string;
  resultsEn: string;
  resultsZh: string;
  date: string;
}

export const experiments: Experiment[] = [
  {
    id: "ui-demos",
    titleEn: "UI Demos",
    titleZh: "UI 演示",
    subtitleEn: "Visual Experiments",
    subtitleZh: "视觉实验",
    descriptionEn: "Exploration of new interface patterns and interaction models for digital consciousness.",
    descriptionZh: "探索数字意识的新界面模式和交互模型。",
    status: 'ongoing',
    icon: "Zap",
    contentEn: `
      # UI Demos: The Visual Language of Consciousness
      
      We are experimenting with interfaces that can represent complex neural data in a way that is intuitive and accessible.
      
      ## Current Prototypes
      
      - **Neural Flow**: A dynamic visualization of real-time data ingestion.
      - **Memory Map**: A spatial representation of personal memory blocks.
      - **Substrate Monitor**: A dashboard for tracking the health of the decentralized network.
    `,
    contentZh: `
      # UI 演示：意识的视觉语言
      
      我们正在试验能够以直观且易于访问的方式表示复杂神经数据的界面。
      
      ## 当前原型
      
      - **神经流**：实时数据摄取的动态可视化。
      - **记忆图**：个人记忆块的空间表示。
      - **基质监视器**：用于跟踪去中心化网络健康状况的仪表板。
    `,
    resultsEn: "Initial user feedback indicates a 30% improvement in data comprehension with the Neural Flow prototype.",
    resultsZh: "初步用户反馈表明，神经流原型使数据理解能力提高了 30%。",
    date: "2026-03-25"
  },
  {
    id: "small-tools",
    titleEn: "Small Tools",
    titleZh: "小工具",
    subtitleEn: "Utility Prototypes",
    subtitleZh: "实用原型",
    descriptionEn: "Quickly validated tools for data capture and neural mapping efficiency.",
    descriptionZh: "快速验证的数据捕捉和神经映射效率工具。",
    status: 'completed',
    icon: "Code",
    contentEn: `
      # Small Tools: Enhancing the Research Workflow
      
      We develop small, focused tools to solve specific problems in our research process.
      
      ## Validated Tools
      
      - **Weight Scanner**: A tool for high-fidelity scanning of synaptic weights.
      - **Tagging Assistant**: An AI-powered tool for emotional tagging of memory blocks.
      - **Substrate Link**: A protocol for linking disparate hardware environments.
    `,
    contentZh: `
      # 小工具：增强研究工作流程
      
      我们开发小型、专注的工具来解决研究过程中的特定问题。
      
      ## 已验证的工具
      
      - **权重扫描器**：用于高保真扫描突触权重的工具。
      - **标记助手**：一个 AI 驱动的记忆块情感标记工具。
      - **基质链接**：一种用于链接不同硬件环境的协议。
    `,
    resultsEn: "The Weight Scanner has achieved a 99.9% fidelity rate in initial tests.",
    resultsZh: "权重扫描器在初步测试中达到了 99.9% 的忠实度。",
    date: "2026-02-28"
  },
  {
    id: "failed-projects",
    titleEn: "Failed Projects",
    titleZh: "失败的项目",
    subtitleEn: "Learning Logs",
    subtitleZh: "学习日志",
    descriptionEn: "Documenting the failures and lessons learned during the development process.",
    descriptionZh: "记录开发过程中的失败和吸取的教训。",
    status: 'failed',
    icon: "Terminal",
    contentEn: `
      # Failed Projects: The Path to Success
      
      Failure is an essential part of the research process. We document our failures to ensure that we don't repeat the same mistakes.
      
      ## Lessons Learned
      
      - **Centralized Substrate**: Our initial attempt at a centralized network failed due to scalability issues.
      - **Raw Data Only**: We learned that capturing raw data without emotional context is insufficient for personality replication.
    `,
    contentZh: `
      # 失败的项目：通往成功的道路
      
      失败是研究过程中不可或缺的一部分。我们记录我们的失败，以确保我们不会重复同样的错误。
      
      ## 吸取的教训
      
      - **中心化基质**：我们最初尝试的中心化网络由于可扩展性问题而失败。
      - **仅原始数据**：我们了解到，如果没有情感背景，仅捕捉原始数据对于人格复制是不够的。
    `,
    resultsEn: "These failures led directly to the development of our current decentralized, emotion-aware architecture.",
    resultsZh: "这些失败直接导致了我们当前去中心化、情感感知架构的开发。",
    date: "2026-01-15"
  }
];
