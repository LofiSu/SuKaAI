/**
 * Next.js API Route Handler for Radar Agent
 * 
 * This route proxies requests to the Python runtime handler.
 * In Vercel, Python files in /api/py/ are automatically routed,
 * but we keep this for local development compatibility.
 */

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // This route is handled by Python runtime in Vercel
  // For local development, you may need to set up a proxy
  return NextResponse.json(
    { error: 'Python runtime not available in local dev. Use Vercel deployment.' },
    { status: 501 }
  )
}

