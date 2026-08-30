# AuricVista Travel — India Travel Discovery

A clean, minimalist India-first travel discovery website built with Next.js, TypeScript, Prisma and MySQL. **There is no sign-in or sign-up flow.**

## Stack
- Next.js 16 + React 19
- TypeScript
- Prisma ORM
- MySQL 8.4
- REST API route handlers
- Responsive minimalist travel UI

## Features
- 28 States + 8 Union Territories in the seed data
- Destination discovery with search, state and tag filtering
- Destination story, history and significance
- Attractions, stays, food spots and activities
- Airbnb destination-search links for stay suggestions
- Search API across destinations, attractions, food and stays
- MySQL health endpoint
- Normalized destination/tag/region relational data
- No authentication pages or authentication API routes
- Docker Compose for local MySQL

## Run locally
1. Copy `.env.example` to `.env`.
2. Start MySQL: `docker compose up -d mysql`
3. Install dependencies: `npm install`
4. Generate Prisma client: `npx prisma generate`
5. Create/update tables: `npm run db:push`
6. Seed the India travel data: `npm run db:seed`
7. Start the website: `npm run dev`

Open `http://localhost:3000`.

## API
- `GET /api/health`
- `GET /api/destinations?q=jaipur&state=Rajasthan&region=West&limit=24`
- `GET /api/destinations/jaipur`
- `GET /api/search?q=food`
- `GET /api/tags`

## Notes
The project intentionally does not contain `/signin`, `/signup`, `/api/auth/*`, favorites or user-itinerary authentication routes. The database still contains the original user/favorite/itinerary tables so the schema can be extended later without forcing authentication into the current UI.


## Expanded destination + stay data

The database seed now creates 108 destinations: three popular places per each of the 36 Indian states/union territories represented in the project. Each destination gets attractions, food, activities, five stay ideas, and an official Airbnb location-search link. Airbnb links open Airbnb search results for the destination; they are not claims of specific listing availability or live prices.

## Final destination media build
- The seed now creates exactly 3 destinations for each of the 36 States/UTs (108 destinations total).
- Destination pages use destination-specific real-photo queries at runtime for a hero image plus a 4-image gallery.
- Photo source is the LoremFlickr photo service, using the destination/state/India query. This keeps the ZIP lightweight while showing real photography.
- For production/submission, verify image licenses/attribution for the exact photos served. Wikimedia Commons also provides extensive state-by-state tourism media under file-specific licenses: https://commons.wikimedia.org/wiki/Category:Tourism_in_India_by_state_or_territory


## Photo architecture
Destination and region photos are intentionally NOT stored in MySQL/Prisma. The database contains travel metadata only. The UI generates destination-specific image URLs at runtime for the prototype, keeping photo data out of the database.

## Final image setup

Destination photos are intentionally **not stored in MySQL**. The frontend resolves destination-specific photography at runtime through `lib/destination-images.ts`, using Wikimedia Commons first and a lightweight fallback image source when Wikimedia does not return enough results. This keeps the database schema photo-free while still giving all destination pages a hero image and four-image gallery.

The database seed contains 36 States/UTs and 108 destinations with unique slugs.

### Run

```bash
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
```


### State & UT photography
The States & Union Territories section now loads one real Wikimedia Commons image per region at runtime. The image mapping is kept in `lib/destination-images.ts` and is intentionally separate from Prisma/MySQL, so the database seed does not depend on photo fields.
