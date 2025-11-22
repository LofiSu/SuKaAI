/**
 * Application Constants
 */

// Knowledge Gap Analysis Thresholds
export const KNOWLEDGE_GAP_ALPHA = 0.3 // Threshold for "known" content
export const KNOWLEDGE_GAP_BETA = 0.7 // Threshold for "relevant" content

// Embedding Dimensions
export const EMBEDDING_DIMENSIONS = 1536 // OpenAI text-embedding-3-small standard

// Platform Definitions
export const PLATFORMS = {
  SOURCE: ['youtube', 'twitter', 'rss'] as const,
  TARGET: ['xiaohongshu', 'twitter', 'linkedin', 'weibo'] as const,
} as const

// API Endpoints
export const API_ROUTES = {
  RADAR: '/api/py/radar',
  BRAIN: '/api/py/brain',
  MATRIX: '/api/py/matrix',
  CRON_INGEST: '/api/cron/ingest',
} as const

