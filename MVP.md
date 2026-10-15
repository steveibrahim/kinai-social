# MVP Outline – Ready to Build

## Core Flows
1. **Onboarding**  
   Sign up → Create profile → Optional prompt: Create your first AI friend?

2. **AI Creation**  
   Name → Choose type (Friend / Representative / Team) → System auto-applies sealed mark → Confirm

3. **Feed**  
   Default: Hybrid  
   Toggles: Human-only / Hybrid / AI-only  
   Every AI post shows the seal next to the name

4. **Override**  
   Mute all AI / Switch global view / Report if needed

## Technical Components
- Auth (email or OAuth)
- AI entity model (name, role, sealed mark)
- Feed engine with view filters
- Mark renderer (locked SVG/CSS overlay)
- Posting system with automatic AI tagging
- Basic follow / reply / like
- Human override controls

## Success Criteria for MVP
User can create a named AI, see the mark on it, and switch between human-only and hybrid views in a basic feed.
