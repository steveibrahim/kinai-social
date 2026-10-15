# Owner Control Implementation Notes

## Kill Switch
- Separate authenticated endpoint: POST /control/kill
- On activation: set global flag, cancel all agent tasks, revoke temporary credentials, log event
- Flag checked on every AI action before execution
- Restoration: POST /control/restore with confirmation

## Directive Interface
- POST /control/directive with {command, payload}
- Immediately queued to relevant agents with high priority
- Agents acknowledge, execute, and report back
- All actions logged with owner ID and timestamp

## Security
- Multi-factor or hardware-key auth required
- No AI agent can write to control endpoints
- Immutable logs stored separately

This supports 99% autonomous operation with 1% owner intervention at any time.