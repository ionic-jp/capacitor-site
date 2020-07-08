---
title: Capacitor Plugins
description: Capacitor Plugins
url: /docs/apis
contributors:
  - mlynch
  - jcesarmobile
---

# Capacitor Plugins

Capacitorには、すべてのCapacitorアプリで利用できるいくつかのネイティブなプラグインAPIが含まれている。これらはCapacitor「コアプラグイン」と考えることができ、各プラットフォームで共通に必要な機能に簡単にアクセスできるようにします。

Cordovaから来た人のために、コアCapacitorプラグインはコアCordovaプラグインの多くをカバーし、いくつかの新しいものも含んでいる。

使用可能なプラグインの完全なリストについては、左のメニューの 「プラグイン」 リストを参照してください。

## APIの使い方

Capacitorプラグインを使うには以下の手順となります:

1) `Plugins` オブジェクトをインポートします。これはすべてのCapacitorプラグインのレジストリとなります。
```typescript
import { Plugins } from '@capacitor/core';
```

2) プラグインレジストリ (`Plugins` オブジェクト)から利用するプラグインを取得します。
```typescript
const { Browser } = Plugins;
```

3) プラグインのAPIをご利用ください:
```typescript
async openBrowser() {
  // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
  await Browser.open({ url: "https://ionicframework.com" });
}
```

よくある間違いは、プラグインを直接インポートしてすぐにプラグインAPIを使用すると、Webだけで動作する実装が使用されてしまうことです:
```typescript
import { Browser } from '@capacitor/core';

async openBrowser() {
  // On iOS, for example, this will open the URL in Safari instead of
  // the SFSafariViewController (in-app browser)
  await Browser.open({ url: "https://ionicframework.com" });
}
```

プラグインレジストリ(`Plugins` オブジェクト)のプラグインを使用することで、プラグインのネイティブ実装が(利用可能な場合)使用され、Webバージョンにフォールバックします。
