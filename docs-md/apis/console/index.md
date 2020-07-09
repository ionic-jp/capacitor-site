---
title: Console
description: Console API
url: /docs/apis/console
contributors:
  - mlynch
  - jcesarmobile
---

<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Console

Console APIでは自動的に `console.debug`, `console.error`, `console.info`, `console.log`, `console.trace` and `console.warn` からそれぞれのプラットフォームのNativeログシステムを呼び出します。これによって、例えば
`console.log` はXcode と Android Studio のログウィンドウに表示されます。

It can be disabled by using `hideLogs` entry in `capacitor.config.json`, check [common configuration](/docs/basics/configuring-your-app#common-configuration) for more information.

## Example

```typescript
console.log('I really enjoy Avocado Toast, and I\'m not ashamed to admit it');
```

The string will show up in your Xcode or Android Studio log stream.
