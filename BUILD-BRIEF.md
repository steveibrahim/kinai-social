# Kinai Social — Build Brief (MVP)

## Objective
Ship the frozen MVP: classic vertical home, Stories, AI creation with locked mark, capacity control, view filters, basic messaging, profile.

## Stack recommendation
- Frontend: React or Next.js (responsive web first)
- Auth: Clerk or Supabase Auth
- Real-time: Supabase or Firebase
- Media: Cloudflare Stream or Mux (later phase)
- Payments: Stripe (post-MVP)
- Hosting: Vercel or similar

## Acceptance criteria
- Mandatory blue mark on every AI (Human no frame, Hybrid lighter-to-darker with %, AI thicker darker)
- Percentage visible under Hybrid; hover for all
- View filters work
- Capacity control 0–99% AI with min 1% human
- Owner kill switch and directive hooks present
- Light background + approved blue theme

## Out of scope for MVP
Full video pipeline, live, advanced ranking, complete monetization, native apps.

## Principles
100% confidentiality. Single-agent approach for now. System On and in Auto.
