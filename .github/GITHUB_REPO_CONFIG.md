# GitHub 仓库配置指南

本文档说明如何配置 GitHub 仓库的简介、About 信息和其他设置。

## 📋 配置步骤

### 1. 仓库简介和 About

1. 进入 GitHub 仓库页面
2. 点击仓库名称右侧的 **⚙️ Settings**（设置）
3. 在左侧菜单中找到 **General**（常规设置）
4. 向下滚动到 **About** 部分

#### 配置内容

**Repository name（仓库名称）**:
```
SuKaAI
```

**Description（简介）**:
```
AIGC content creation platform - Multi-agent assisted ideation, drafting, and publishing workflows
```

或者中文版本：
```
AIGC 内容创作平台 - 多智能体辅助的创意、草稿和发布工作流
```

**Website（网站）**:
```
https://sukaai.com
```
（如果有的话，否则留空）

**Topics（主题标签）**:
```
aigc
content-creation
nextjs
typescript
ai
multi-agent
serverless
supabase
```

### 2. 社交媒体链接（可选）

在 About 部分可以添加：
- **Website**: 项目官网
- **Twitter**: Twitter/X 账号
- **Discord**: Discord 服务器

### 3. 仓库可见性

在 **General** → **Danger Zone** 可以设置：
- **Public**: 公开仓库（推荐）
- **Private**: 私有仓库

### 4. 功能设置

在 **General** 设置中可以启用/禁用：

#### 推荐启用：
- ✅ **Issues** - 用于问题追踪
- ✅ **Projects** - 项目管理（可选）
- ✅ **Wiki** - 文档（可选）
- ✅ **Discussions** - 讨论区（可选）

#### 推荐禁用：
- ❌ **Sponsorships** - 除非需要赞助功能

### 5. 分支保护规则

在 **Settings** → **Branches** 中配置：

#### 推荐配置（main 分支）：
- ✅ **Require a pull request before merging**
  - Require approvals: 1
  - Dismiss stale pull request approvals when new commits are pushed
- ✅ **Require status checks to pass before merging**
  - Require branches to be up to date before merging
  - Status checks: `Lint & Type Check`, `Build`
- ✅ **Require conversation resolution before merging**
- ✅ **Do not allow bypassing the above settings**

### 6. Actions 设置

在 **Settings** → **Actions** → **General** 中：

#### Workflow permissions:
- ✅ **Read and write permissions**
- ✅ **Allow GitHub Actions to create and approve pull requests**

#### Artifact and log retention:
- **Days**: 90（或根据需求调整）

### 7. Pages 设置（如果使用 GitHub Pages）

在 **Settings** → **Pages** 中：
- **Source**: 选择分支和目录
- **Custom domain**: 如果有自定义域名

## 📝 快速配置清单

- [ ] 设置仓库简介（Description）
- [ ] 添加 Topics 标签
- [ ] 配置分支保护规则（main 分支）
- [ ] 启用 Issues 功能
- [ ] 配置 Actions 权限
- [ ] 设置网站链接（如果有）
- [ ] 添加社交媒体链接（可选）

## 🔗 相关链接

- [GitHub 仓库设置文档](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features)
- [About 部分配置](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-repositories)

---

**最后更新**: 2025-01-XX
