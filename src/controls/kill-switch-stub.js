// Owner Kill Switch Stub
// Independent of AI agents. Checked before any critical action.

let systemActive = true; // Owner controls this externally

export function isSystemActive() {
  // In production: read from independent control plane / secure store
  return systemActive;
}

export function requireActive() {
  if (!isSystemActive()) {
    throw new Error('System is paused by owner kill switch');
  }
}

// Example usage before AI action:
// requireActive();
// proceed with agent task...

// Owner directive channel would set systemActive = false immediately.
