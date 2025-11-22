/**
 * API Request/Response Type Definitions
 */

import type { IMRData, CreationPlatform } from './database'

// Radar Agent Types
export interface RadarRequest {
  source_id: string
  content_url: string
}

export interface RadarResponse {
  status: 'success' | 'error'
  message: string
  source_id?: string
  intelligence_id?: string
  imr_data?: IMRData
}

// Brain Agent Types
export interface BrainRequest {
  intelligence_id: string
  user_id: string
}

export interface KnowledgeGapResult {
  min_distance: number
  classification: 'known' | 'relevant' | 'irrelevant'
  recommendation_score: number
}

export interface BrainResponse {
  status: 'success' | 'error'
  message: string
  intelligence_id?: string
  gap_analysis?: KnowledgeGapResult
  recommendations?: Array<{
    intelligence_id: string
    score: number
    reason: string
  }>
}

// Matrix Agent Types
export interface MatrixRequest {
  intelligence_id: string
  target_platform: CreationPlatform
  style_preferences?: Record<string, unknown>
}

export interface GeneratedContent {
  content_body: string
  visual_keywords: string[]
  temporal_anchors: Array<{
    timestamp: string
    quote: string
  }>
  style_applied: string
}

export interface MatrixResponse {
  status: 'success' | 'error'
  message: string
  intelligence_id?: string
  target_platform?: CreationPlatform
  generated_content?: GeneratedContent
  creation_id?: string
}

