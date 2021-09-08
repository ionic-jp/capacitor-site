---
title: CLI Command - cap sync
description: Capacitor CLI command - cap sync
contributors:
  - dotNetkow
---

# Capacitor CLI - cap sync

このコマンドは、[`copy`](/docs/cli/copy)を実行した後、[`update`](/docs/cli/update)を実行します。

```bash
npx cap sync [options] [<platform>]
```

<strong>Inputs:</strong>

- `platform` (optional): `android`, `ios`

<strong>Options:</strong>

- `--deployment`: Podfile.lock won't be deleted and pod install will use `--deployment` option.

## Hooks

The following hooks are available for sync command:

- `capacitor:sync:before`
- `capacitor:sync:after`

[More information](hooks)
