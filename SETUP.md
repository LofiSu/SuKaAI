# InfoMatrix 项目设置指南

## 📋 前置要求

- Node.js 18+ 
- Python 3.9+
- npm 或 yarn
- Supabase 账号
- OpenAI API Key

## 🚀 快速开始

### 1. 安装 pnpm（如果还没有安装）

```bash
npm install -g pnpm
```

### 2. 安装依赖

```bash
# 安装 Node.js 依赖（使用 pnpm）
pnpm install

# 安装 Python 依赖
pip install -r requirements.txt
```

### 3. 配置环境变量

创建 `.env` 文件（参考 `.env.example`）：

```bash
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenAI API
OPENAI_API_KEY=sk-...

# Vercel Cron Secret (用于保护 cron 端点)
CRON_SECRET=your_random_secret

# 可选：外部 API Keys
YOUTUBE_API_KEY=...
TWITTER_BEARER_TOKEN=...
```

### 4. 设置 Supabase 数据库

1. 登录 [Supabase Dashboard](https://app.supabase.com)
2. 创建新项目（如果还没有）
3. 在 SQL Editor 中运行 `supabase/schema.sql` 文件
4. 确保启用了 `pgvector` 扩展

### 5. 运行开发服务器

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 📁 项目结构说明

```
InfoMatrix/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
│
├── api/                   # Serverless API 路由
│   ├── py/                # Python 运行时 Agent
│   │   ├── radar/         # 情报采集 Agent
│   │   ├── brain/         # 知识分析 Agent
│   │   └── matrix/        # 内容生成 Agent
│   └── cron/              # Cron 任务
│
├── components/            # React 组件
│   ├── ui/               # Shadcn 基础组件
│   └── features/         # 功能组件
│
├── lib/                  # 工具函数
│   ├── supabase/        # Supabase 客户端
│   ├── utils.ts         # 通用工具
│   └── constants.ts     # 常量定义
│
├── types/                # TypeScript 类型定义
│   ├── database.ts      # 数据库类型
│   └── api.ts           # API 类型
│
├── supabase/            # 数据库相关
│   └── schema.sql       # 数据库 Schema
│
└── vercel.json          # Vercel 配置
```

## 🔧 开发工作流

### 添加新的 Agent

1. 在 `api/py/` 下创建新目录
2. 创建 `route.py` 文件，实现 `handler` 函数
3. 使用 Pydantic 定义请求/响应模型
4. 添加详细的文档字符串（用于论文/专利）

### 添加新的 UI 组件

1. 基础组件放在 `components/ui/`
2. 功能组件放在 `components/features/`
3. 使用 Shadcn/UI 风格和 Tailwind CSS

### 数据库操作

- **Server Components**: 使用 `@/lib/supabase/server.ts`
- **Client Components**: 使用 `@/lib/supabase/client.ts`
- **向量搜索**: 使用 `match_intelligence` RPC 函数

## 🧪 测试

### 本地测试 Python API

由于 Vercel 的 Python 运行时仅在部署时可用，本地开发时：

1. 使用 Vercel CLI: `vercel dev`
2. 或直接部署到 Vercel 预览环境

### 测试 Cron Job

```bash
# 使用 curl 测试（需要设置 CRON_SECRET）
curl -X GET http://localhost:3000/api/cron/ingest \
  -H "Authorization: Bearer your_cron_secret"
```

## 📦 部署到 Vercel

1. 连接 GitHub 仓库到 Vercel
2. 设置环境变量（在 Vercel Dashboard）
3. 部署会自动识别 Python 运行时

## 🎓 论文/专利相关

### 核心算法文档位置

- **Radar Agent**: `api/py/radar/route.py` - IMR 映射方法
- **Brain Agent**: `api/py/brain/route.py` - 知识缺口分析算法
- **Matrix Agent**: `api/py/matrix/route.py` - 风格迁移方法

所有复杂算法都包含详细的文档字符串，可直接用于论文和专利文档。

## 🐛 常见问题

### Python 模块导入错误

确保 `requirements.txt` 中的所有依赖都已安装。

### Supabase 连接问题

检查环境变量是否正确设置，特别是 `NEXT_PUBLIC_` 前缀的变量。

### 向量搜索不工作

确保在 Supabase 中已启用 `pgvector` 扩展，并运行了完整的 schema.sql。

## 📚 下一步

1. 实现 Radar Agent 的具体采集逻辑
2. 集成 OpenAI Embeddings API
3. 实现 Brain Agent 的知识缺口分析
4. 开发前端界面
5. 集成 Vercel AI SDK 实现流式生成

