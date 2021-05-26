---
title: CLI Command - cap update
description: Capacitor - cap update
contributors:
  - dotNetkow
canonicalUrl: https://capacitorjs.com/docs/cli/update
---

# Capacitor CLI - cap update

Native プラグインと依存関係を `package.json` を参照してアップデートします。

```bash
npx cap update
```

<strong>Inputs:</strong>

- `platform` (optional): `android`, `ios`

<strong>Options:</strong>

- `--deployment`: Podfile.lock won't be deleted and pod install will use `--deployment` option.
