---
title: Browser
description: Browser API
url: /docs/apis/browser 
contributors:
  - mlynch
  - jcesarmobile
---

<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Browser

<plugin-api name="browser" index="true"></plugin-api>

Browser APIを使用すると、外部のWebコンテンツを表示したり、認証フローを処理したりするために、
アプリケーション内のブラウザセッションを簡単に開くことができます。

iOSではこれは `SFSafariViewController` を使用し、主要なoAuthサービスのアプリ内ブラウザ要件に準拠しています。

```typescript
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

await Browser.open({ url: 'http://capacitor.ionicframework.com/' });
```

## API

<plugin-api name="browser"></plugin-api>
