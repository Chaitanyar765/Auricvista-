import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const q = searchParams.get("q")?.trim() || undefined
    const region = searchParams.get("region")?.trim() || undefined
    const state = searchParams.get("state")?.trim() || undefined
    const tag = searchParams.get("tag")?.trim() || undefined

    const limitParam = Number(searchParams.get("limit") || 24)

    const take = Math.min(
      Math.max(Number.isFinite(limitParam) ? limitParam : 24, 1),
      50
    )

    const destinations = await prisma.destination.findMany({
      where: {
        published: true,

        // Search destinations
        ...(q
          ? {
              OR: [
                {
                  name: {
                    contains: q,
                  },
                },
                {
                  tagline: {
                    contains: q,
                  },
                },
                {
                  description: {
                    contains: q,
                  },
                },
              ],
            }
          : {}),

        // Filter by state / region
        ...(region || state
          ? {
              region: {
                ...(region ? { slug: region } : {}),
                ...(state ? { name: state } : {}),
              },
            }
          : {}),

        ...(tag
          ? { tags: { some: { tag: { slug: tag } } } }
          : {}),
      },

      orderBy: {
        name: "asc",
      },

      take,

      select: {
        id: true,
        slug: true,
        name: true,
        tagline: true,
        description: true,
        accent: true,
        bestTime: true,

        // AdministrativeRegion relation
        region: {
          select: {
            id: true,
            slug: true,
            name: true,
            type: true,
            capital: true,
            region: true,
          },
        },

        // Destination tags
        tags: {
          select: {
            tag: {
              select: {
                slug: true,
                name: true,
              },
            },
          },
        },
      },
    })

    // Convert Prisma's nested tag structure into a simpler API response
    const formattedDestinations = destinations.map((destination) => ({
      id: destination.id,
      slug: destination.slug,
      name: destination.name,
      tagline: destination.tagline,
      description: destination.description,
      accent: destination.accent,
      bestTime: destination.bestTime,

      // State / UT information
      state: destination.region.name,
      region: destination.region.region,

      administrativeRegion: {
        id: destination.region.id,
        slug: destination.region.slug,
        name: destination.region.name,
        type: destination.region.type,
        capital: destination.region.capital,
      },

      // Simple array of tags
      tags: destination.tags.map((item) => ({
        slug: item.tag.slug,
        name: item.tag.name,
      })),
    }))

    return NextResponse.json(formattedDestinations)
  } catch (error) {
    console.error("GET /api/destinations error:", error)

    return NextResponse.json(
      {
        error: "Failed to fetch destinations",
      },
      {
        status: 500,
      }
    )
  }
}