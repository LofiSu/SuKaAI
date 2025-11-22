/**
 * Database Type Definitions
 * 
 * TypeScript types for Supabase database tables.
 * These types are generated based on the schema.sql structure.
 */

export type Platform = 'youtube' | 'twitter' | 'rss'
export type CreationPlatform = 'xiaohongshu' | 'twitter' | 'linkedin' | 'weibo'
export type CreationStatus = 'draft' | 'reviewing' | 'published' | 'archived'

export interface Source {
  id: string
  user_id: string
  platform: Platform
  identifier: string
  display_name?: string
  last_scanned_at?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface IMRData {
  source_type: string
  core_concepts: string[]
  sentiment_score: number
  key_quotes: Array<{
    timestamp: string
    text: string
  }>
  complexity_level: 'low' | 'medium' | 'high'
  title?: string
  description?: string
}

export interface Intelligence {
  id: string
  source_id: string
  original_url: string
  external_id?: string
  imr_data: IMRData
  embedding?: number[] // 1536-dimensional vector
  processed_at?: string
  created_at: string
  updated_at: string
}

export interface Creation {
  id: string
  intelligence_id: string
  user_id: string
  target_platform: CreationPlatform
  status: CreationStatus
  content_body: string
  visual_keywords?: string[]
  temporal_anchors?: Array<{
    timestamp: string
    quote: string
  }>
  user_feedback_rating?: number
  user_feedback_notes?: string
  published_url?: string
  created_at: string
  updated_at: string
  published_at?: string
}

export interface UserPreferences {
  id: string
  user_id: string
  platform_prompts: Record<string, string>
  knowledge_gap_alpha: number
  knowledge_gap_beta: number
  preferred_language: string
  auto_generate: boolean
  created_at: string
  updated_at: string
}

