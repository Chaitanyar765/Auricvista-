import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const started = Date.now()
  try {
    await prisma.$queryRaw`SELECT 1`
    return NextResponse.json({ ok: true, database: 'mysql', latencyMs: Date.now() - started, timestamp: new Date().toISOString() })
  } catch {
    return NextResponse.json({ ok: false, database: 'unavailable', latencyMs: Date.now() - started }, { status: 503 })
  }
}
