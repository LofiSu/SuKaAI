# InfoMatrix

**Serverless Multi-Agent Content Intelligence Platform**

A cloud-native AI agent collaboration network that solves content creators' efficiency bottlenecks in heterogeneous information acquisition, knowledge internalization, and multi-platform distribution.

## 🎯 System Overview

InfoMatrix is an intelligent system with **Perception, Cognition, and Action** capabilities, built on a serverless architecture with three core agents:

- **Radar Agent**: Intelligence collection and cleaning
- **Brain Agent**: Knowledge vectorization and gap analysis
- **Matrix Agent**: Multi-modal style transfer and content generation

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 (App Router), React 18+, TypeScript, Tailwind CSS, Shadcn/UI
- **Backend**: Vercel Serverless Functions (Python 3.9+ & Node.js)
- **Database**: Supabase (PostgreSQL) with pgvector extension
- **AI/LLM**: Vercel AI SDK, OpenAI API, LangChain/LangGraph
- **State Management**: Zustand, TanStack Query

## 📁 Project Structure

```
InfoMatrix/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── api/                    # Serverless API routes
│   ├── py/                 # Python runtime agents
│   │   ├── radar/          # Radar Agent
│   │   ├── brain/          # Brain Agent
│   │   └── matrix/         # Matrix Agent
│   └── cron/               # Cron job triggers
├── components/             # React components
│   ├── ui/                 # Shadcn base components
│   └── features/           # Feature-specific components
├── lib/                    # Utility functions
│   ├── supabase/           # Supabase clients
│   └── utils.ts
├── supabase/               # Database schema
│   └── schema.sql
└── middleware.ts           # Next.js middleware for auth
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- **pnpm** (package manager - required)
- Python 3.9+
- Supabase account
- OpenAI API key

### Installation

1. **Install pnpm (if not already installed):**

```bash
npm install -g pnpm
```

2. **Clone and install dependencies:**

```bash
pnpm install
pip install -r requirements.txt
```

2. **Set up environment variables:**

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

3. **Set up Supabase database:**

Run the schema SQL file in your Supabase SQL editor:

```bash
# Copy contents of supabase/schema.sql to Supabase SQL Editor
```

4. **Run development server:**

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 📊 Database Schema

The system uses four main tables:

- **sources**: Subscribed content sources (YouTube, Twitter, RSS)
- **intelligence**: Raw and intermediate metadata representation (IMR)
- **creations**: Generated content for different platforms
- **user_preferences**: User-specific SOP prompts and preferences

See `supabase/schema.sql` for complete schema definition.

## 🔧 Core Agents

### Radar Agent (`/api/py/radar`)

- Ingests heterogeneous content streams
- Applies de-noising and preprocessing
- Maps to Intermediate Metadata Representation (IMR)

### Brain Agent (`/api/py/brain`)

- Generates semantic embeddings (1536 dimensions)
- Performs Knowledge Gap Analysis using vector space distance
- Generates personalized recommendations

### Matrix Agent (`/api/py/matrix`)

- Injects IMR context into LLM
- Routes styles based on target platform
- Generates content with fact-checking anchors

## 📝 Development Guidelines

See `.cursorrules` for detailed coding standards and architecture guidelines.

### Key Principles

- **Type Safety**: Strict TypeScript mode, Python type hints required
- **Modularity**: Separate algorithm logic from API handlers
- **Documentation**: Complex algorithms must include methodology docstrings
- **Academic Terminology**: Use academic terms in comments (e.g., "Semantic Entropy" instead of "trending topics")

## 🎓 For Thesis & Patent

This system implements two core methodologies suitable for academic and patent documentation:

1. **Intermediate Semantic Tree (IMR) Mapping**: Cross-platform content reconstruction method
2. **Vector Space Envelope Analysis**: Knowledge gap discovery mechanism

## 📄 License

Private - For academic and research purposes

