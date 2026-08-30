import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams.get('q')?.trim()
  if (!q || q.length < 2) return NextResponse.json({ destinations: [], attractions: [], food: [], stays: [] })

  const [destinations, attractions, food, stays] = await Promise.all([
    prisma.destination.findMany({
      where: { published: true, OR: [
        { name: { contains: q } },
        { tagline: { contains: q } },
        { region: { name: { contains: q } } },
      ] },
      take: 8,
      select: { name: true, slug: true, tagline: true, region: { select: { name: true } } },
    }),
    prisma.attraction.findMany({ where: { name: { contains: q } }, take: 8, include: { destination: { select: { name: true, slug: true } } } }),
    prisma.foodSpot.findMany({ where: { OR: [{ name: { contains: q } }, { cuisine: { contains: q } }, { mustTry: { contains: q } }] }, take: 8, include: { destination: { select: { name: true, slug: true } } } }),
    prisma.stay.findMany({ where: { name: { contains: q } }, take: 8, include: { destination: { select: { name: true, slug: true } } } }),
  ])

  return NextResponse.json({ destinations, attractions, food, stays }, { headers: { 'Cache-Control': 'public, max-age=30' } })
}
