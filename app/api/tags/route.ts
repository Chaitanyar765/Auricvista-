import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const tags = await prisma.tag.findMany({ orderBy: { name: 'asc' }, select: { slug: true, name: true, _count: { select: { destinations: true } } } })
  return NextResponse.json(tags)
}
