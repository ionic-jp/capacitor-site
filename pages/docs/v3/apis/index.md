---
title: Capacitor Plugins
description: Capacitor Plugins
contributors:
  - mlynch
  - jcesarmobile
  - ehorodyski-ionic
canonicalUrl: https://capacitorjs.com/docs/apis
---

# Capacitor Plugin APIs

Capacitor には、すべての Capacitor アプリで利用できるいくつかの Native なプラグイン API が含まれている。これらは Capacitor「コアプラグイン」と考えることができ、各プラットフォームで共通に必要な機能に簡単にアクセスできるようにします。

Cordova から来た人のために、コア Capacitor プラグインはコア Cordova プラグインの多くをカバーし、いくつかの新しいものも含んでいる。

使用可能なプラグインの完全なリストについては、左のメニューの 「プラグイン」 リストを参照してください。

## API の使い方

Capacitor プラグインを使うには以下の手順となります:

1&rpar; `Plugins` オブジェクトをインポートします。これはすべての Capacitor プラグインのレジストリとなります。

```typescript
import { Plugins } from '@capacitor/core';
```

2&rpar; プラグインレジストリ (`Plugins` オブジェクト)から利用するプラグインを取得します。

```typescript
const { Browser } = Plugins;
```

3&rpar; プラグインの API をご利用ください:

```typescript
async openBrowser() {
  // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
  await Browser.open({ url: "https://ionicframework.com" });
}
```

よくある間違いは、プラグインを直接インポートしてすぐにプラグイン API を使用すると、Web だけで動作する実装が使用されてしまうことです:

```typescript
import { Browser } from '@capacitor/core';

async openBrowser() {
  // On iOS, for example, this will open the URL in Safari instead of
  // the SFSafariViewController (in-app browser)
  await Browser.open({ url: "https://ionicframework.com" });
}
```

プラグインレジストリ(`Plugins` オブジェクト)のプラグインを使用することで、プラグインの Native 実装が(利用可能な場合)使用され、Web バージョンにフォールバックします。

### Angular Notes

Capacitor plugin event listeners run outside of Angular's `NgZone` execution context. Contain handler logic within an `NgZone.run` block to ensure Angular's change detection is triggered:

```typescript
constructor(private ngZone: NgZone) { }

async ngOnInit() {
  Network.addListener("networkStatusChange", (status) => {
    this.ngZone.run(() => {
      // This code will run in Angular's execution context
      this.networkStatus = status.connected ? "Online" : "Offline";
    });
  });
}
```
