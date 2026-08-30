import Link from "next/link"
import { ArrowRight, Compass, MapPin, Search, Sparkles, Utensils, Hotel, Mountain } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { getDestinationImages, getRegionImage } from "@/lib/destination-images"

export const dynamic = "force-dynamic"

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; state?: string; tag?: string }>
}) {
  const params = (await searchParams) ?? {}
  const q = params.q?.trim()
  const state = params.state?.trim()
  const tag = params.tag?.trim()

  const [destinations, regions, tags] = await Promise.all([
    prisma.destination.findMany({
      where: {
        published: true,
        ...(q ? { OR: [
          { name: { contains: q } },
          { tagline: { contains: q } },
          { description: { contains: q } },
          { region: { name: { contains: q } } },
        ] } : {}),
        ...(state ? { region: { name: state } } : {}),
        ...(tag ? { tags: { some: { tag: { slug: tag } } } } : {}),
      },
      orderBy: { name: "asc" },
      take: 24,
      include: { region: true, tags: { include: { tag: true } } },
    }),
    prisma.administrativeRegion.findMany({
      where: { published: true },
      orderBy: { name: "asc" },
      select: { slug: true, name: true, type: true, capital: true, region: true },
    }),
    prisma.tag.findMany({
      orderBy: { name: "asc" },
      select: { slug: true, name: true },
    }),
  ])

  const [destinationImages, regionImages] = await Promise.all([
    Promise.all(
      destinations.map(async (d) => [
        d.slug,
        (await getDestinationImages(d.name, d.region.name, 1))[0]?.url ?? '',
      ] as const),
    ).then(Object.fromEntries),
    Promise.all(
      regions.map(async (r) => [r.slug, (await getRegionImage(r.name)).url] as const),
    ).then(Object.fromEntries),
  ])

  return (
    <main>
      <header className="nav">
        <Link href="/" className="brand">
          <span className="brand-mark">A</span>
          <span>AuricVista <i>Travel</i></span>
        </Link>
        <nav>
          <a href="#destinations">Destinations</a>
          <a href="#states">States & UTs</a>
          <a href="#planner">Plan a trip</a>
        </nav>
        <a className="nav-btn" href="#destinations">Explore India</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={13}/> INDIA, CURATED</div>
          <h1>Go beyond the <em>obvious.</em></h1>
          <p>Discover India through places worth knowing, food worth tasting, stays worth remembering and experiences made for your kind of trip.</p>
          <form className="search" action="/" method="get">
            <Search size={19} />
            <input name="q" placeholder="Search a destination, state or experience" aria-label="Search" />
            <button type="submit">Search</button>
          </form>
          <div className="mini-stats">
            <span><MapPin size={14}/> {regions.length} States & UTs</span>
            <span><Compass size={14}/> {destinations.length}+ curated places</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun"/><div className="mount"/><div className="mount m2"/><div className="ground"/>
          <div className="palms">⌁</div>
          <div className="hero-card"><small>START HERE</small><strong>India is waiting.</strong><span>Pick a place. We&apos;ll show you the rest.</span></div>
        </div>
      </section>

      <section className="section" id="destinations">
        <div className="section-head">
          <div><div className="eyebrow">{q || state || tag ? "SEARCH RESULTS" : "CURATED DESTINATIONS"}</div><h2>{q || state || tag ? "Places matching your search" : "Places to begin"}</h2></div>
          <a className="text-link" href="#states">Browse all states <ArrowRight size={15}/></a>
        </div>
        <div className="chips">
          {tags.map(tag => <a key={tag.slug} className="chip" href={`/?tag=${tag.slug}` + (q ? `&q=${encodeURIComponent(q)}` : "")}>{tag.name}</a>)}
        </div>
        <div className="dest-grid">
          {destinations.map(d => (
            <Link href={`/destinations/${d.slug}`} className="dest-card" key={d.id}>
              <div className="scene" style={{ backgroundImage: `url(${destinationImages[d.slug]})` }}>
                <span className="tag">{d.region.region}</span>
              </div>
              <div className="dest-body">
                <div className="location">{d.region.name}</div>
                <h3>{d.name}</h3>
                <p>{d.tagline}</p>
                <div className="card-foot"><span>Best: {d.bestTime}</span><span>Explore →</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="story">
        <div>
          <div className="eyebrow">ONE PLATFORM, MANY WAYS TO TRAVEL</div>
          <h2>Plan the trip, not just the destination.</h2>
          <p>AuricVista brings together the practical details and the little discoveries that make an India trip feel personal.</p>
          <div className="story-items">
            <div><Hotel/><span><b>Stay smart</b><small>Explore stay ideas and price ranges.</small></span></div>
            <div><Utensils/><span><b>Eat local</b><small>Find regional favourites and must-tries.</small></span></div>
            <div><Mountain/><span><b>Experience more</b><small>Build days around activities and culture.</small></span></div>
            <div><Compass/><span><b>Explore deeply</b><small>Learn the story behind every place.</small></span></div>
          </div>
        </div>
        <div className="quote-card"><div className="quote-mark">“</div><p>The best journeys are the ones where you leave with a better understanding of the place.</p><span>AURICVISTA TRAVEL</span></div>
      </section>

      <section className="section" id="states">
        <div className="section-head"><div><div className="eyebrow">ALL OF INDIA</div><h2>States & Union Territories</h2></div></div>
        <div className="state-grid">
          {regions.map(r => (
            <Link
              key={r.slug}
              href={`/?state=${encodeURIComponent(r.name)}`}
              className="state-card"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(18,24,21,.12), rgba(18,24,21,.82)), url(${regionImages[r.slug] ?? ''})` }}
            >
              <span>{r.type === "STATE" ? "STATE" : "UNION TERRITORY"}</span>
              <strong>{r.name}</strong>
              <small>{r.capital} · {r.region}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="planner" id="planner">
        <div className="planner-inner">
          <div><div className="eyebrow">YOUR NEXT TRIP</div><h2>Start with a place. Build from there.</h2><p>Open any destination to explore sights, stays, food and activities. No account required.</p><a className="nav-btn planner-btn" href="#destinations">Start exploring <ArrowRight size={15}/></a></div>
          <div className="planner-cards"><div><Compass/><b>See</b><small>Landmarks & heritage</small></div><div><Hotel/><b>Stay</b><small>Places to sleep</small></div><div><Utensils/><b>Eat</b><small>Local favourites</small></div></div>
        </div>
      </section>

      <footer><span>© 2026 AuricVista Travel</span><span>Discover India, thoughtfully.</span></footer>
    </main>
  )
}
