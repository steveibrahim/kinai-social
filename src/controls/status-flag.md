# Kill Switch Status Flag (Stub)

## Concept
A single atomic boolean (or versioned state) stored outside AI agent memory:

```
kill_switch_active: false
last_changed: timestamp
changed_by: owner_id
```

## Check Pattern
Every AI action begins with:
```
if (controlPlane.isKillSwitchActive()) {
  abort();
  log("Action blocked by owner kill switch");
  return;
}
```

## Directive Priority
Owner directives bypass normal queues and set temporary overrides that also check the kill switch.

This keeps the system at 99% AI while guaranteeing immediate owner control.
