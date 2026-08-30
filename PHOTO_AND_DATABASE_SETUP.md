# AuricVista Travel — clean database + destination photos setup

This version keeps destination photos OUT of MySQL. Photos are fetched at runtime by `lib/destination-images.ts` and displayed by `app/destinations/[slug]/page.tsx`.

## Important

If your local project shows an error mentioning `heroImage`, you are running a modified/older `schema.prisma` or `seed.ts`. Replace these files from this package:

- `prisma/schema.prisma`
- `prisma/seed.ts`
- `lib/destination-images.ts`
- `app/destinations/[slug]/page.tsx`

Do not add a `heroImage` column to Prisma.

## Run

1. Create `.env` from `.env.example` and set `DATABASE_URL` to your MySQL database.
2. Install packages:

   `npm install`

3. Generate Prisma Client:

   `npx prisma generate`

4. Push the schema:

   `npx prisma db push`

5. Seed all 36 Indian States/UTs and 108 destinations:

   `npx prisma db seed`

6. Start the site:

   `npm run dev`

The seed contains 108 unique destination slugs and does not reference `heroImage`, `FOOD_DATA`/`localFoods` are defined, and every generated stay receives an Airbnb destination-search link.

## Photos

The detail page requests four photos for each destination. Wikimedia Commons is tried first; if it cannot provide enough images, the helper uses a destination-specific fallback URL. No photo URL is stored in MySQL.
