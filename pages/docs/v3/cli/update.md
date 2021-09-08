---
title: CLI Command - cap update
description: Capacitor - cap update
contributors:
  - dotNetkow
---

# Capacitor CLI - cap update

Native プラグインと依存関係を `package.json` を参照してアップデートします。

```bash
npx cap update [<platform>]
```

<strong>Inputs:</strong>

- `platform` (optional): `android`, `ios`

<strong>Options:</strong>

- `--deployment`: Podfile.lock won't be deleted and pod install will use `--deployment` option.

## Hooks

The following hooks are available for update command:

- `capacitor:update:before`
- `capacitor:update:after`

[More information](hooks)
