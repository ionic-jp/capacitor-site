---
title: CLI Command - cap ls
description: Capacitor CLI - cap ls
contributors:
  - dotNetkow
canonicalUrl: https://capacitorjs.com/docs/cli/list
---

# Capacitor CLI - cap ls

インストールされているすべての Cordova プラグインと Capacitor プラグインを一覧表示します。

```bash
npx cap ls [platform]
```

<strong>Inputs:</strong>

- `platform` (optional): `android`, `ios`

<strong>Example output:</strong>

```
Found 1 Capacitor plugin for android:
    capacitor-mapbox (0.0.1)
Found 2 Cordova plugins for android:
    cordova-plugin-camera
    cordova-plugin-splashscreen
```
