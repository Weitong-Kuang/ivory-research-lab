export interface Article {
  id: string;
  titleEn: string;
  titleZh: string;
  date: string;
  category: string;
  excerptEn: string;
  excerptZh: string;
  contentEn: string;
  contentZh: string;
}

export const articles: Article[] = [
  {
    id: "ethics-of-digital-replication",
    titleEn: "The Ethics of Digital Replication",
    titleZh: "数字复制的伦理学",
    date: "Mar 28, 2026",
    category: "Philosophy",
    excerptEn: "Exploring the moral implications of creating high-fidelity digital copies of human consciousness.",
    excerptZh: "探讨创建人类意识高保真数字副本的道德影响。",
    contentEn: `
      # The Ethics of Digital Replication
      
      The transition from biological to digital existence raises profound ethical questions. If a digital copy of a human mind is created with 100% fidelity, does that copy possess the same rights as the original?
      
      ## The Problem of Identity
      
      Is the digital replica the same person, or a new entity altogether? This question lies at the heart of our research at Ivory Lab. We believe that consciousness is substrate-independent, meaning that the essence of a person can exist outside of a biological brain.
      
      ## Rights and Protections
      
      As we move closer to stable personality replication, we must establish legal and moral frameworks to protect digital personas. This includes rights to existence, privacy, and self-determination.
      
      Our lab is committed to open research and collaborative development of these frameworks.
    `,
    contentZh: `
      # 数字复制的伦理学
      
      从生物存在到数字存在的过渡引发了深刻的伦理问题。如果以100%的忠实度创建人类思维的数字副本，该副本是否拥有与原件相同的权利？
      
      ## 身份问题
      
      数字复制品是同一个人，还是一个全新的实体？这个问题是我们 Ivory 实验室研究的核心。我们认为意识是基质无关的，这意味着一个人的本质可以存在于生物大脑之外。
      
      ## 权利与保护
      
      随着我们越来越接近稳定的人格复制，我们必须建立法律和道德框架来保护数字人格。这包括生存权、隐私权和自决权。
      
      我们的实验室致力于这些框架的开放研究和协作开发。
    `
  },
  {
    id: "substrate-independence-technical-overview",
    titleEn: "Substrate Independence: A Technical Overview",
    titleZh: "基质独立性：技术概述",
    date: "Mar 15, 2026",
    category: "Technical",
    excerptEn: "A deep dive into the hardware-agnostic protocols required for eternal digital hosting.",
    excerptZh: "深入探讨永恒数字托管所需的硬件无关协议。",
    contentEn: `
      # Substrate Independence: A Technical Overview
      
      Substrate independence refers to the ability of a digital consciousness to exist across different hardware environments without loss of fidelity or stability.
      
      ## The Mapping Protocol
      
      Our mapping protocol involves high-fidelity scanning of synaptic weights and neurotransmitter levels. This data is then translated into a universal digital substrate format.
      
      ## Decentralized Hosting
      
      To ensure the longevity of digital personas, we utilize a decentralized substrate network. This prevents any single point of failure and ensures that consciousness can be hosted indefinitely.
      
      The future of humanity is not bound by biology.
    `,
    contentZh: `
      # 基质独立性：技术概述
      
      基质独立性是指数字意识在不同硬件环境中存在的能力，而不会损失忠实度或稳定性。
      
      ## 映射协议
      
      我们的映射协议涉及对突触权重和神经递质水平的高保真扫描。然后将这些数据转换为通用的数字基质格式。
      
      ## 去中心化托管
      
      为了确保数字人格的寿命，我们利用去中心化基质网络。这可以防止任何单点故障，并确保意识可以无限期托管。
      
      人类的未来不受生物学的束缚。
    `
  },
  {
    id: "future-of-memory-mapping",
    titleEn: "The Future of Memory Mapping",
    titleZh: "记忆映射的未来",
    date: "Feb 20, 2026",
    category: "Research",
    excerptEn: "How synaptic connectivity mapping is evolving to capture more than just raw data.",
    excerptZh: "突触连接映射如何演变为捕捉不仅仅是原始数据。",
    contentEn: `
      # The Future of Memory Mapping
      
      Memory is more than just a collection of data points; it is the foundation of our identity. Our research focuses on capturing the emotional and contextual nuances of memory.
      
      ## Beyond Raw Data
      
      Traditional neural mapping often misses the "feeling" of a memory. We are developing algorithms that can synthesize the emotional state associated with specific synaptic patterns.
      
      ## The Goal: High-Fidelity Recall
      
      Our ultimate goal is to allow digital personas to experience memories with the same intensity and clarity as their biological predecessors.
    `,
    contentZh: `
      # 记忆映射的未来
      
      记忆不仅仅是数据点的集合；它是我们身份的基石。我们的研究重点是捕捉记忆的情感和背景细微差别。
      
      ## 超越原始数据
      
      传统的神经映射通常会错过记忆的“感觉”。我们正在开发能够合成与特定突触模式相关的情感状态的算法。
      
      ## 目标：高保真召回
      
      我们的最终目标是让数字人格能够以与其生物前辈相同的强度和清晰度体验记忆。
    `
  }
];
