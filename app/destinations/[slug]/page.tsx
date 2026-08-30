import Link from 'next/link'
import {
  ArrowLeft,
  MapPin,
  Clock3,
  Landmark,
  Hotel,
  Utensils,
  Compass,
  Star,
  ExternalLink,
} from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { getDestinationImages } from '@/lib/destination-images'

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const d = await prisma.destination.findUnique({
    where: {
      slug,
    },
    include: {
      region: true,
      attractions: true,
      stays: true,
      foodSpots: true,
      activities: true,
    },
  })

  if (!d) {
    return (
      <div className="not-found">
        <p>Destination not found.</p>
        <Link href="/">Go home</Link>
      </div>
    )
  }

  const gallery = await getDestinationImages(d.name, d.region.name, 4)

  return (
    <main>
      {/* NAVIGATION */}
      <header className="nav detail-nav">
        <Link href="/" className="brand">
          <span className="brand-mark">A</span>
          <span>
            AuricVista <i>Travel</i>
          </span>
        </Link>

        <Link href="/" className="back">
          <ArrowLeft size={17} />
          All destinations
        </Link>
      </header>

      {/* HERO */}
      <section className="detail-hero">
        <div
          className="detail-scene"
          style={{
            backgroundImage: `url(${gallery[0]?.url})`,
          }}
        />

        <div className="detail-copy">
          <div className="eyebrow">
            {d.region.region} INDIA · {d.region.name.toUpperCase()}
          </div>

          <h1>{d.name}</h1>

          <p className="lead">
            {d.tagline}
          </p>

          <div className="detail-meta">
            <span>
              <MapPin size={16} />
              {d.region.name}, India
            </span>

            <span>
              <Clock3 size={16} />
              Best: {d.bestTime}
            </span>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="destination-gallery" aria-label={`${d.name} photo gallery`}>
        {gallery.map((image, index) => (
          <div
            className={`gallery-photo gallery-photo-${index + 1}`}
            key={`${image.url}-${index}`}
            style={{ backgroundImage: `url(${image.url})` }}
            role="img"
            aria-label={`${d.name} destination photo ${index + 1}`}
          />
        ))}
      </section>

      {/* STORY */}
      <section className="detail-body">
        <article>
          <div className="eyebrow">THE STORY</div>

          <h2>Why {d.name} matters</h2>

          <p>{d.description}</p>

          {d.history && <p>{d.history}</p>}

          <div className="significance">
            <b>Significance</b>
            <span>{d.significance}</span>
          </div>
        </article>

        <aside>
          <div className="aside-title">
            Plan the essentials
          </div>

          <a href="#see">
            <Landmark />
            <span>See & explore</span>
          </a>

          <a href="#stay">
            <Hotel />
            <span>Stay</span>
          </a>

          <a href="#food">
            <Utensils />
            <span>Eat</span>
          </a>

          <a href="#do">
            <Compass />
            <span>Things to do</span>
          </a>
        </aside>
      </section>

      {/* ATTRACTIONS */}
      <section className="catalog" id="see">
        <div className="catalog-head">
          <div>
            <div className="eyebrow">SEE</div>
            <h2>Places to explore</h2>
          </div>
        </div>

        <div className="item-grid">
          {d.attractions.map((x) => (
            <div className="item" key={x.id}>
              <div className="item-icon">
                <Landmark />
              </div>

              <div>
                <small>{x.type}</small>

                <h3>{x.name}</h3>

                <p>{x.description}</p>

                {x.priceNote && (
                  <span className="price">
                    {x.priceNote}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {d.attractions.length === 0 && (
          <p>No attractions have been added yet.</p>
        )}
      </section>

      {/* STAYS */}
      <section className="catalog muted" id="stay">
        <div className="catalog-head">
          <div>
            <div className="eyebrow">STAY</div>
            <h2>Places to stay</h2>
            <p className="catalog-note">Browse sample stay ideas below, then open Airbnb to see current homes, guesthouses and apartments near {d.name}. Prices and availability on Airbnb can change.</p>
          </div>
          {d.stays[0]?.airbnbUrl && (
            <a href={d.stays[0].airbnbUrl} target="_blank" rel="noopener noreferrer" className="airbnb-link airbnb-top-link">
              <span>Browse Airbnb near {d.name}</span>
              <ExternalLink size={15} />
            </a>
          )}
        </div>

        <div className="item-grid">
          {d.stays.map((x) => (
            <div className="item" key={x.id}>
              <div className="item-icon">
                <Hotel />
              </div>

              <div>
                <small>{x.category}</small>

                <h3>{x.name}</h3>

                <p>{x.description}</p>

                <div className="stay-row">
                  {x.rating !== null && (
                    <span>
                      <Star
                        size={14}
                        fill="currentColor"
                      />
                      {x.rating.toString()}
                    </span>
                  )}

                  {x.pricePerNight !== null && (
                    <b>
                      ₹{x.pricePerNight.toLocaleString('en-IN')} / night
                    </b>
                  )}
                </div>

                {/* AIRBNB BUTTON */}
                {x.airbnbUrl && (
                  <a
                    href={x.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="airbnb-link"
                  >
                    <span>Browse Airbnb stays near {d.name}</span>
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {d.stays.length === 0 && (
          <p>No stays have been added yet.</p>
        )}
      </section>

      {/* FOOD */}
      <section className="catalog" id="food">
        <div className="catalog-head">
          <div>
            <div className="eyebrow">EAT</div>
            <h2>Food & local favourites</h2>
          </div>
        </div>

        <div className="food-grid">
          {d.foodSpots.map((x) => (
            <div className="food" key={x.id}>
              <Utensils />

              <div>
                <h3>{x.name}</h3>

                <p>
                  {x.cuisine}
                  {x.area ? ` · ${x.area}` : ''}
                </p>

                {x.mustTry && (
                  <b>Try: {x.mustTry}</b>
                )}
              </div>
            </div>
          ))}
        </div>

        {d.foodSpots.length === 0 && (
          <p>No food spots have been added yet.</p>
        )}
      </section>

      {/* ACTIVITIES */}
      <section className="catalog muted" id="do">
        <div className="catalog-head">
          <div>
            <div className="eyebrow">DO</div>
            <h2>Things to experience</h2>
          </div>
        </div>

        <div className="activity-grid">
          {d.activities.map((x) => (
            <div className="activity" key={x.id}>
              <span>{x.category}</span>

              <h3>{x.name}</h3>

              <p>{x.description}</p>

              {x.duration && (
                <small>{x.duration}</small>
              )}
            </div>
          ))}
        </div>

        {d.activities.length === 0 && (
          <p>No activities have been added yet.</p>
        )}
      </section>

      {/* FOOTER */}
      <footer>
        <div className="brand">
          <span className="brand-mark">A</span>

          <span>
            AuricVista <i>Travel</i>
          </span>
        </div>

        <span>
          More destinations are added through the same database/API.
        </span>
      </footer>
    </main>
  )
}