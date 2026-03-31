export interface System {
  id: string;
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  status: 'active' | 'beta' | 'planned';
  progress: number;
  icon: string; // lucide icon name
  contentEn: string;
  contentZh: string;
  updates: {
    date: string;
    titleEn: string;
    titleZh: string;
    contentEn: string;
    contentZh: string;
  }[];
}

export const systems: System[] = [
  {
    id: "ivory-system",
    titleEn: "Ivory System",
    titleZh: "Ivory 系统",
    subtitleEn: "Life Recording System",
    subtitleZh: "人生记录系统",
    descriptionEn: "A structured framework for capturing and organizing personal experiences, thoughts, and memories.",
    descriptionZh: "一个用于捕捉和组织个人经历、想法和记忆的结构化框架。",
    status: 'active',
    progress: 85,
    icon: "Box",
    contentEn: `
      # Ivory System: The Foundation of Digital Memory
      
      The Ivory System is our core infrastructure for high-fidelity life recording. It goes beyond simple journaling by implementing a structured neural-link architecture.
      
      ## Core Architecture
      
      The system is built on three main pillars:
      1. **Capture Layer**: Real-time data ingestion from multiple sensory inputs.
      2. **Processing Layer**: Semantic analysis and emotional tagging of captured data.
      3. **Storage Layer**: Substrate-independent, decentralized memory blocks.
      
      ## Current Focus
      
      We are currently refining the emotional tagging algorithms to ensure that the "feeling" of a memory is preserved alongside the raw data.
    `,
    contentZh: `
      # Ivory 系统：数字记忆的基石
      
      Ivory 系统是我们进行高保真人生记录的核心基础设施。它通过实施结构化的神经链接架构，超越了简单的日志记录。
      
      ## 核心架构
      
      该系统建立在三个主要支柱之上：
      1. **捕捉层**：来自多个感官输入的实时数据摄取。
      2. **处理层**：对捕捉到的数据进行语义分析和情感标记。
      3. **存储层**：基质无关的去中心化记忆块。
      
      ## 当前重点
      
      我们目前正在完善情感标记算法，以确保记忆的“感觉”与原始数据一起被保存下来。
    `,
    updates: [
      {
        date: "2026-03-20",
        titleEn: "V2.0 Core Release",
        titleZh: "V2.0 核心发布",
        contentEn: "Implemented the first stable version of the decentralized storage layer.",
        contentZh: "实现了去中心化存储层的第一个稳定版本。"
      },
      {
        date: "2026-02-15",
        titleEn: "Neural Link Alpha",
        titleZh: "神经链接 Alpha 测试",
        contentEn: "Initial testing of the real-time data ingestion protocol.",
        contentZh: "实时数据摄取协议的初步测试。"
      }
    ]
  },
  {
    id: "ai-assistant",
    titleEn: "AI Assistant System",
    titleZh: "AI 助理系统",
    subtitleEn: "Cognitive Extension",
    subtitleZh: "认知扩展",
    descriptionEn: "An integrated AI layer designed to augment human decision-making and knowledge management.",
    descriptionZh: "一个集成的 AI 层，旨在增强人类的决策和知识管理。",
    status: 'beta',
    progress: 60,
    icon: "Cpu",
    contentEn: `
      # AI Assistant: Augmenting Human Intelligence
      
      Our AI Assistant is not just a chatbot; it is a cognitive extension designed to work in tandem with the human mind.
      
      ## Key Features
      
      - **Contextual Awareness**: The assistant understands the user's current environment and mental state.
      - **Proactive Insights**: Suggests connections between disparate pieces of information.
      - **Seamless Integration**: Works across all Ivory Lab modules.
      
      ## Development Roadmap
      
      We are moving towards a more autonomous model that can anticipate user needs before they are explicitly stated.
    `,
    contentZh: `
      # AI 助理：增强人类智能
      
      我们的 AI 助理不仅仅是一个聊天机器人；它是一个旨在与人类思维协同工作的认知扩展。
      
      ## 主要特点
      
      - **上下文感知**：助理了解用户当前的环境和心理状态。
      - **主动洞察**：建议不同信息片段之间的联系。
      - **无缝集成**：在所有 Ivory Lab 模块中工作。
      
      ## 开发路线图
      
      我们正在转向一个更自主的模型，它可以在用户明确陈述需求之前预测他们的需求。
    `,
    updates: [
      {
        date: "2026-03-10",
        titleEn: "Semantic Engine Update",
        titleZh: "语义引擎更新",
        contentEn: "Improved the accuracy of contextual awareness by 25%.",
        contentZh: "将上下文感知的准确性提高了 25%。"
      }
    ]
  },
  {
    id: "future-app-modules",
    titleEn: "Future App Modules",
    titleZh: "未来 App 模块",
    subtitleEn: "Experimental Interfaces",
    subtitleZh: "实验性界面",
    descriptionEn: "Modular components for the next generation of digital interaction and substrate hosting.",
    descriptionZh: "下一代数字交互和基质托管的模块化组件。",
    status: 'planned',
    progress: 30,
    icon: "Layout",
    contentEn: `
      # Future App Modules: The Interface of Tomorrow
      
      We are designing the interfaces that will allow humans to interact with their digital selves and the substrate network.
      
      ## Design Philosophy
      
      - **Minimalism**: Reducing cognitive load to allow for deeper focus.
      - **Fluidity**: Interfaces that adapt to the user's needs in real-time.
      - **Immersiveness**: Bridging the gap between the physical and digital worlds.
    `,
    contentZh: `
      # 未来 App 模块：明天的界面
      
      我们正在设计允许人类与其数字自我和基质网络进行交互的界面。
      
      ## 设计理念
      
      - **极简主义**：减少认知负荷以允许更深层次的专注。
      - **流动性**：实时适应用户需求的界面。
      - **沉浸感**：弥合物理世界和数字世界之间的差距。
    `,
    updates: []
  }
];
