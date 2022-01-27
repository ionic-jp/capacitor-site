---
title: Capacitorプラグインの構築
description: Capacitorプラグインの構築 - Web/PWAへの実装
contributors:
  - eric-horodyski
---

# Web/PWAs のために実装する

プラグインの API を設計しているときに、ウェブではすでに画面の向きに関する機能がサポートされていることがわかりました（もちろん、モバイルデバイスは除きます）。ユーザーがウェブ上にいるかどうかをプログラム的に検出し、まず <a href="https://whatwebcando.today/screen-orientation.html" target="_blank">Screen Orientation Web API</a> を使用して、使用できなければプラグインを使用することはできなかったのでしょうか？

Web Native アプリケーションの背後にある重要な理念は、"write once, run anywhere "です。Capacitor プラグインを使用する開発者は、同じプラグインクラスとメソッドを使用して、すべてのプラットフォームでそれらを実装することができるはずです。

したがって、私たちは良き開発者市民として、Screen Orientation Web API を `ScreenOrientation` プラグインのウェブ実装の中にラップすることにします。

## Capacitor の WebPlugin クラスを拡張する

新しいファイル `src/plugins/screen-orientation/web.ts` を開いてください。このファイルに `ScreenOrientation` プラグインのウェブ実装を記述します。

まず、`ScreenOrientationWeb` クラスを宣言し、 `WebPlugin` を継承させます。

```typescript
import { WebPlugin } from '@capacitor/core';
import type { ScreenOrientationPlugin } from './definitions';

export class ScreenOrientationWeb extends WebPlugin {
  constructor() {
    super();
  }
}
```

Capacitor の `WebPlugin` クラスには、プラグインのリスナーに画面の向きが変わったことを通知するためのロジックが含まれています。Screen Orientation Web API の change イベントが発生したら、リスナーに通知しましょう。コンストラクタを次のように更新します。

```typescript
constructor() {
   super();
   window.screen.orientation.addEventListener("change", () => {
     const type = window.screen.orientation.type;
     this.notifyListeners("screenOrientationChange", { type });
   });
 }
```

`WebPlugin` クラスは `ScreenOrientationPlugin` インターフェースで定義されている `addListener()` と `removeAllListeners()` メソッドの実装を含んでいます。これらのメソッドを利用するために、追加の作業は必要ありません。

## 残りのメソッドを実装する

それでは、`ScreenOrientationPlugin` インターフェースの実装を終了しましょう。まずは、クラスが実際にインターフェイスを実装するように、クラス定義を調整することから始めましょう:

```typescript
export class ScreenOrientationWeb
  extends WebPlugin
  implements ScreenOrientationPlugin
{
```

そして、残りのメソッドを `ScreenOrientationWeb` クラスの一部として実装します:

```typescript
 async orientation(): Promise<{ type: OrientationType }> {
   return { type: window.screen.orientation.type };
 }

 async lock(opts: { orientation: OrientationLockType }): Promise<void> {
   await window.screen.orientation.lock(opts.orientation);
 }

 async unlock(): Promise<void> {
   window.screen.orientation.unlock();
 }
```

## ウェブ実装を登録する

`ScreenOrientationWeb` をプラグインのウェブ実装として登録するには、 `registerPlugin()` の 第 2 引数を使用する必要があります。 `src/plugins/screen-orientation/index.ts` を開いて、変数 `ScreenOrientation` の宣言を以下のように更新してください。

```typescript
const ScreenOrientation = registerPlugin<ScreenOrientationPlugin>(
  'ScreenOrientation',
  {
    web: () => import('./web').then(m => new m.ScreenOrientationWeb()),
  },
);
```

## テストドライブをしよう

Web の実装をテストしてみましょう。アプリケーションを `ionic serve` で配信すると、ブラウザの開発ツールでモバイルデバイスを縦長と横長の両方の画面向きでエミュレートすることができます。 「デバイスを回転させる」ボタンが機能しないのは、 `window.screen.orientation.lock()` のウェブサポートが貧弱だからです。 しかし、デベロッパーツールを使って手動で回転させれば、異なるデザインを見ることができるはずです。

1 つのプラットフォームを実装したので、あと 2 つ! iOS と Android のコードに飛び込む前に、それをどのようにパターン化し、抽象化するかを検討する必要があります。次のステップでいくつかのパターンを確認しましょう：コードの抽象化パターン。
