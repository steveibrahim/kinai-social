# MVP Scaffold Outline (under 99% AI Governance)

## Proposed Structure
```
/src
  /auth          # User accounts
  /ai-entities   # Create AI friend/rep/team + auto-apply mark
  /feed          # Hybrid feed with filters
  /marks         # Mark renderer (non-removable)
  /controls      # Owner kill-switch hooks + directive interface
/docs
README.md
```

## Core Flows (aligned with AUTONOMY.md)
1. Auth & profiles
2. AI creation: name + role → system applies sealed mark
3. Feed: Human-only / Hybrid / AI-only views
4. Persistent mark on all AI content
5. Owner override: kill switch + demand changes (immediate AI compliance)
6. All platform AIs also carry the mark

## Next Implementation
- Starter backend (Node/Python) with owner control plane endpoints
- Frontend for feed and AI creation
- Mark as system-enforced overlay

All under owner 100% ownership and 99% AI day-to-day operation.
