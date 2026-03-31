import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import ReactMarkdown from "react-markdown";

const contentEn = `
# About Ivory Lab

Ivory Lab is a research studio focused on building computational systems for understanding, encoding, and extending human behavior, memory, and decision-making.

We treat individuals not as static profiles, but as evolving systems that can be observed, modeled, and gradually reconstructed through data.

---

## Vision

Our long-term direction is to explore the possibility of persistent digital identity systems — not as simulations, but as structured representations of human cognition over time.

We refer to this direction as **personal continuity systems**: frameworks that allow a person’s thinking patterns, memory traces, and behavioral signatures to persist and evolve in computational form.

This is not a product claim. It is a research trajectory.

---

## Research Areas

Ivory Lab operates as a modular research environment. Current focus areas include:

### 1. Human Data Infrastructure
Designing systems that continuously capture structured representations of daily life, including:
- behavioral logs
- decision records
- language output traces
- contextual memory streams

The goal is not storage, but transformable structure.

---

### 2. Behavioral Modeling
Studying how consistent patterns emerge in:
- decision-making under constraints
- preference evolution
- reaction to time, pressure, and uncertainty

We aim to represent these patterns computationally in a way that can be simulated and tested.

---

### 3. Identity Representation Systems
Exploring how aspects of a person can be represented as dynamic models:
- writing style
- conversational tendencies
- cognitive bias signatures
- value hierarchies

These representations are not static profiles, but continuously updated models.

---

### 4. Personal AI Systems
Building early-stage agents that can:
- respond in a consistent personal style
- retrieve structured memory from logs
- simulate decision tendencies based on historical behavior

These systems are prototypes of long-term personal continuity agents.

---

## Philosophy

We do not assume that human identity is fixed.

We assume:
- identity is a process, not a state
- memory is reconstructive, not archival
- behavior is learnable, not opaque

From this perspective, the question is not whether a person can be copied, but how much of their structure can be made computable.

---

## Method

Ivory Lab follows a simple research loop:

1. Observe real human behavior
2. Convert it into structured data
3. Model patterns computationally
4. Test reconstruction in AI systems
5. Iterate over time

Each iteration increases fidelity, but not necessarily completeness.

---

## Current Stage

We are in an early experimental phase.

Current work focuses on:
- building a minimal personal logging system
- defining structured memory formats
- testing small-scale behavioral imitation models
- designing long-term data continuity pipelines

There is no finished system yet — only accumulating structure.

---

## Long-Term Direction

If this research succeeds, it may enable systems that:

- preserve aspects of individual cognition over time
- allow interaction with evolving digital representations of a person
- support continuity of thought beyond biological constraints

This remains speculative, but structurally grounded in ongoing technical experiments.

---

## Note

Ivory Lab is an open-ended research process, not a finalized product or company.

It evolves through continuous iteration of systems that connect human experience with computational representation.
`;

const contentZh = `
# 关于 Ivory Lab

Ivory Lab 是一个研究工作室，专注于构建用于理解、编码和扩展人类行为、记忆和决策的计算系统。

我们将个人视为不断演化的系统，可以通过数据进行观察、建模并逐步重建。

---

## 愿景

我们的长期方向是探索持久数字身份系统的可能性——不是作为模拟，而是作为人类认知随时间变化的结构化表示。

我们将这一方向称为**个人连续性系统**：允许一个人的思维模式、记忆痕迹和行为特征在计算形式中持久存在并不断演化的框架。

这不是产品声明，而是一个研究轨迹。

---

## 研究领域

Ivory Lab 作为一个模块化研究环境运行。目前的重点领域包括：

### 1. 人类数据基础设施
设计能够持续捕捉日常生活结构化表示的系统，包括：
- 行为日志
- 决策记录
- 语言输出痕迹
- 上下文记忆流

目标不是存储，而是可转换的结构。

---

### 2. 行为建模
研究在以下方面如何出现一致的模式：
- 约束条件下的决策
- 偏好演化
- 对时间、压力和不确定性的反应

我们的目标是以可以模拟和测试的方式在计算上表示这些模式。

---

### 3. 身份表示系统
探索如何将一个人的各个方面表示为动态模型：
- 写作风格
- 对话倾向
- 认知偏差特征
- 价值观层级

这些表示不是静态的个人资料，而是持续更新的模型。

---

### 4. 个人 AI 系统
构建能够执行以下操作的早期代理：
- 以一致的个人风格做出响应
- 从日志中检索结构化记忆
- 根据历史行为模拟决策倾向

这些系统是长期个人连续性代理的原型。

---

## 哲学

我们不假设人类身份是固定的。

我们假设：
- 身份是一个过程，而不是一种状态
- 记忆是重构性的，而不是档案性的
- 行为是可学习的，而不是模糊的

从这个角度来看，问题不在于一个人是否可以被复制，而在于他们的结构中有多少可以被计算化。

---

## 方法

Ivory Lab 遵循一个简单的研究循环：

1. 观察真实的人类行为
2. 将其转换为结构化数据
3. 进行计算建模
4. 在 AI 系统中测试重建
5. 随时间迭代

每次迭代都会提高保真度，但不一定提高完整性。

---

## 当前阶段

我们处于早期实验阶段。

目前的工作重点是：
- 构建最小化的个人日志系统
- 定义结构化记忆格式
- 测试小规模行为模仿模型
- 设计长期数据连续性管道

目前还没有完成的系统——只有不断积累的结构。

---

## 长期方向

如果这项研究取得成功，它可能会实现以下系统：

- 随时间保留个人认知的各个方面
- 允许与一个人的动态数字表示进行交互
- 支持超越生物约束的思想连续性

这仍然是推测性的，但在结构上植根于正在进行的技术实验中。

---

## 说明

Ivory Lab 是一个开放式的研究过程，而不是一个最终确定的产品或公司。

它通过连接人类经验与计算表示的系统的持续迭代而演化。
`;

export default function About() {
  const { language, t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="next-badge mb-6 inline-block">{t('nav.about.desc')}</span>
        
        <div className="prose prose-accents max-w-none dark:prose-invert prose-headings:tracking-tighter prose-headings:font-extrabold prose-h1:text-5xl md:prose-h1:text-7xl prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-p:text-xl prose-p:text-accents-5 prose-p:leading-relaxed prose-li:text-accents-5 prose-li:text-lg prose-hr:border-accents-2">
          <div className="markdown-body">
            <ReactMarkdown>{language === 'en' ? contentEn : contentZh}</ReactMarkdown>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
