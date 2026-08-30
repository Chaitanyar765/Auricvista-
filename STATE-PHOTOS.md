# State & UT Photos

The homepage now displays a photo on every State/Union Territory card.

- There are 36 region entries in the seed data (28 states + 8 UTs).
- `lib/destination-images.ts` maps each region to a landmark-focused Wikimedia Commons search.
- Photos are fetched at runtime and cached by Next.js for 24 hours.
- No photo URL is stored in Prisma/MySQL, so `npx prisma db seed` does not depend on images.
- If Wikimedia is temporarily unavailable, the code uses a deterministic fallback image URL instead of breaking the page.

After replacing the old project, restart the dev server:

```bash
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
```
