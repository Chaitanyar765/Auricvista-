import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const d = await prisma.destination.findFirst({
    where: { slug, published: true },
    include: {
      tags: { select: { tag: { select: { slug: true, name: true } } } },
      attractions: { orderBy: { name: 'asc' } },
      stays: { orderBy: [{ rating: 'desc' }, { pricePerNight: 'asc' }] },
      foodSpots: { orderBy: { name: 'asc' } },
      activities: { orderBy: { name: 'asc' } },
    },
  })
  if (!d) return NextResponse.json({ error: 'Destination not found' }, { status: 404 })
  return NextResponse.json({ ...d, tags: d.tags.map(t => t.tag) }, { headers: { 'Cache-Control': 'public, max-age=300, stale-while-revalidate=900' } })
}
