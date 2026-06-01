# 新员工 OpenAN 项目培养计划

---

## 一、背景分析

基于 OpenAN 项目提案和当前代码结构，项目涉及以下技术领域：

| 领域 | 内容 | 优先级 |
|------|------|--------|
| 核心业务 | A2A-T SDK、Registry、Orchestration | 高 |
| 云原生 | Kubernetes、容器化部署 | 高 |
| Agent 系统 | 多代理协作框架、通信协议 | 高 |
| 电信领域 | Autonomous Networks、TM Forum 标准 | 中 |
| 前端 | 官网、Dashboard（Vite + 原生 JS） | 低 |

---

## 二、培养计划（12 周）

### Phase 1：环境搭建与背景认知（第 1-2 周）

**目标**：建立项目背景认知，完成开发环境搭建

| 任务 | 交付物 | 验收标准 |
|------|--------|----------|
| 阅读 OpenAN 提案和 Charter | 学习笔记 | 能口头陈述项目 mission 和 three pillars |
| 理解 AN L4/L5 概念 | 文档总结 | 区分 L1-L5 各层级的特征 |
| 学习 TM Forum 相关标准 | 笔记 | 了解 IG1228、Autonomous Network 参考架构 |
| 搭建开发环境 | 本地环境 | 能运行 web 项目 `npm run dev` |
| 熟悉 GitCode 仓库结构 | 仓库 clone | 列出 3 个种子仓库的职责 |

**推荐资源**：
- TM Forum Autonomous Networks Whitepaper
- LFN 项目治理流程文档
- A2A 协议规范（如有）

---

### Phase 2：核心技术栈夯实（第 3-6 周）

**目标**：掌握项目核心技术栈

| 周次 | 主题 | 任务 | 验收标准 |
|------|------|------|----------|
| W3 | Kubernetes 基础 | 完成 K8s 官方教程，部署一个示例应用 | 能解释 Pod、Service、Deployment 关系 |
| W4 | Agent 系统 | 学习多代理系统概念，研究 LangChain/AutoGen 架构 | 能画出 Agent 协作流程图 |
| W5 | 通信协议 | 研究 A2A、MCP 等协议规范 | 对比表格：A2A vs MCP vs 自研 |
| W6 | Go 后端开发 | 阅读 Registry/Orchestration 种子代码 | 能解释 CRD 设计思路 |

**实践任务**：
- 用 Go 实现一个简单的 Agent Registry（注册、发现、心跳）
- 编写一个最小化 Agent 客户端，能与 Registry 通信

---

### Phase 3：项目贡献实战（第 7-10 周）

**目标**：完成第一个有效贡献

| 阶段 | 任务 | 预期产出 |
|------|------|----------|
| Issue 熟悉 | 浏览 GitHub/GitCode Issues，理解当前 backlog | 选定 1-2 个 good-first-issue |
| 文档贡献 | 补充 README、CONTRIBUTING.md | 1 个文档 PR merged |
| 代码贡献 | 修复 bug 或实现小功能 | 1 个代码 PR merged |
| Code Review | 参与他人的 PR review | 提交有效 review 意见 |

**推荐入口任务**：
- 完善官网 TSC 页面（当前是占位符）
- 添加 API 文档注释
- 实现一个简单的 health check endpoint

---

### Phase 4：独立负责与社区参与（第 11-12 周）

**目标**：具备独立承担子任务的能力

| 任务 | 验收标准 |
|------|----------|
| 独立承担一个 feature | 从设计到实现到测试完整交付 |
| 参加社区会议 | 参加 2 次 TSC 或 community meeting |
| 提交技术方案 | 就某个技术点产出 Proposal（如 Agent 认证方案）|
| Mentoring 反转 | 向 mentor 讲解一个模块的设计思路 |

---

## 三、关键能力目标（OKR）

### O1：技术能力
| KR | 目标值 |
|----|--------|
| KR1.1 | 能独立实现一个 Agent 微服务 |
| KR1.2 | 能解释 Registry/Orchestration 的架构设计 |
| KR1.3 | 能阅读并理解种子代码的 70% 以上 |

### O2：项目认知
| KR | 目标值 |
|----|--------|
| KR2.1 | 能向外部人员介绍 OpenAN 的 mission 和价值 |
| KR2.2 | 了解 LFN 社区治理流程和贡献规范 |
| KR2.3 | 理解 Autonomous Networks L4/L5 的演进路径 |

### O3：社区参与
| KR | 目标值 |
|----|--------|
| KR3.1 | 完成 2+ 个 merged PR |
| KR3.2 | 参与 4+ 次 community meeting |
| KR3.3 | 在 Zulip 频道有活跃贡献记录 |

---

## 四、风险与应对

| 风险 | 应对措施 |
|------|----------|
| 电信领域知识门槛高 | 安排领域专家 1:1，提供 TM Forum 学习路径 |
| Agent 系统经验不足 | 从 LangChain/AutoGen 入门，先跑通示例 |
| 开源社区流程陌生 | 配对 review，逐步放手 |
| 项目文档不完善 | 鼓励新员工参与文档建设，既是学习也是贡献 |

---

## 五、每周检查清单

### Week 1-2
- [ ] 完成 OpenAN 提案文档阅读
- [ ] 理解 AN L1-L5 分级标准
- [ ] 本地环境运行成功
- [ ] Clone 所有种子仓库
- [ ] 完成首次 1:1 沟通

### Week 3-4
- [ ] 完成 K8s 基础教程
- [ ] 部署示例应用到 K8s
- [ ] 学习 Agent 系统基础概念
- [ ] 输出 Agent 架构学习笔记

### Week 5-6
- [ ] 完成 A2A/MCP 协议对比分析
- [ ] 阅读种子代码并输出架构图
- [ ] 实现简易 Agent Registry demo

### Week 7-8
- [ ] 选定并认领 good-first-issue
- [ ] 完成文档 PR
- [ ] 参加首次 community meeting

### Week 9-10
- [ ] 完成代码 PR
- [ ] 参与 Code Review
- [ ] 熟悉贡献流程

### Week 11-12
- [ ] 独立负责一个 feature
- [ ] 提交技术 Proposal
- [ ] 完成 mentoring 反转汇报
- [ ] 制定后续发展计划

---

## 六、附录：学习资源清单

### 必读文档
1. [OpenAN Project Proposal](https://lf-networking.atlassian.net/wiki/spaces/LN/pages/1065353223)
2. [TM Forum Autonomous Networks IG1228](https://www.tmforum.org/resources/ig1228/)
3. [LFN Project Lifecycle Guidelines](https://lf-networking.atlassian.net/wiki/spaces/LN/pages/716406785)

### 推荐课程
1. Kubernetes 官方互动教程：https://kubernetes.io/docs/tutorials/
2. LangChain 入门：https://python.langchain.com/docs/get_started/introduction
3. AutoGen 多代理框架：https://microsoft.github.io/autogen/

### 社区渠道
- Zulip: https://linuxfoundation.zulipchat.com (#lfn-openan)
- GitHub: https://github.com/openan (迁移后)
- Wiki: https://wiki.openan.io

---

*文档创建日期：2026-05-22*
*最后更新：Phase 1 待启动*