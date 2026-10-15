# MVP Prototype Notes (Autonomous Progress)

## Current State
Landing page prepared for GitHub Pages. Core specs (AUTONOMY, CONTROL-PLANE, MARKS) complete.

## Next Build Priorities (99% AI)
1. Simple mark overlay component (SVG circle with K + neural dots, teal).
2. AI entity creation mock: name + role → auto-mark assignment.
3. Basic feed filter toggle (Human / Hybrid / AI).
4. Owner control hooks: check kill-switch flag before any action.

## Mark Concept (inline SVG example)
```svg
<svg width="32" height="32" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="15" fill="#00C2B8"/>
  <text x="16" y="21" text-anchor="middle" fill="white" font-size="14" font-weight="bold">K</text>
</svg>
```

All development respects owner kill switch and directive authority. Mandatory mark on every AI.
