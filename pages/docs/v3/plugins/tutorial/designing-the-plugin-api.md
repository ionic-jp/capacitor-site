---
title: Capacitor Pluginの構築
description: Capacitor Pluginの構築 - Plugin APIの設計
contributors:
  - eric-horodyski
---

# プラグイン API の設計

Capacitor プラグインを構築する際の最初の（そして間違いなく最も重要な）ステップは、API を設計することです。API は、各プラットフォーム固有の実装を書くときに遵守する契約です。

プラグイン API は TypeScript で定義することができ、実装の際に契約書として機能し、コード補完や型チェックといった TypeScript に付随する機能を提供する。

## 待って。どうしてプラグインが必要なの？

信じられないかもしれませんが、最近のウェブブラウザは、バッテリーの状態のチェック、音声認識、画面の向きなど、私たちが「ネイティブ機能」と考える多くのことを行うことができます。Web Native アプリケーションを構築していると、かつてはプラグインが必要だった機能が、Web API として提供されているのを目にすることがあります。

> 特定の機能のプラグインをビルドする前に、 <a href="https://whatwebcando.today/" target="_blank">What Web Can Do Today</a> などのサイトをチェックして、探している機能が Web API としてすでに利用可能かどうかを確認することをお勧めします。

画面指向がすでに Web API を持っているのなら、なぜわざわざ Web API を構築する必要があるのでしょうか。 <a href="https://whatwebcando.today/screen-orientation.html" target="_blank">Screen Orientation Web API</a> を見ると、iOS はこの API を実装していない (この記事を書いている時点では) ことがわかります。Android に関しては、アプリが Android プラットフォーム上で動作している場合には、Screen Orientation Web API を使用することもできますが、学ぶことを目的にして画面向きの機能をネイティブに実装します。

## ScreenOrientation API の定義

Screen Orientation Web API をそのまま使用することはできないかもしれませんが、プラグインの API をモデル化することはできます:

| Method Name        | Input Parameters                            | Return Value                                           |
| ------------------ | ------------------------------------------- | ------------------------------------------------------ |
| orientation        |                                             | `Promise<{ type: OrientationType }>`                   |
| lock               | `{ orientation: OrientationLockType }`      | `Promise<void>`                                        |
| unlock             |                                             | `Promise<void>`                                        |
| addListener        | `(orientation: { type: OrientationType }) ` | `Promise<PluginListenerHandle> & PluginListenerHandle` |
| removeAllListeners |                                             | `Promise<void>`                                        |

ここにはさらに利点があります: TypeScript の既存の DOM 型付けによって利用可能な`OrientationType`型と`OrientationLockType`型を使用することができます。

プラグイン API を格納するディレクトリを設定します。新しいサブフォルダ`src/plugins/screen-orientation`を作成し、その中に次のファイルを追加します。

- `definitions.ts`
- `index.ts`

`definitions.ts`に次のコードを入力します:

```typescript
import type { PluginListenerHandle } from '@capacitor/core';

export interface ScreenOrientationPlugin {
  /**
   * Returns the screen's current orientation.
   */
  orientation(): Promise<{ type: OrientationType }>;

  /**
   * Locks the screen orientation.
   */
  lock(opts: { orientation: OrientationLockType }): Promise<void>;

  /**
   * Unlocks the screen's orientation.
   */
  unlock(): Promise<void>;

  /**
   * Listens for screen orientation changes.
   */
  addListener(
    eventName: 'screenOrientationChange',
    listenerFunc: (orientation: { type: OrientationType }) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Removes all listeners
   */
  removeAllListeners(): Promise<void>;
}
```

## ScreenOrientation プラグインを登録する

Capacitor アプリケーションでプラグインを使用するには、`@capacitor/core` からエクスポートされた `registerPlugin()` モジュールを使用してプラグインを登録する必要があります。

以下のコードを `index.ts` に記述します:

```typescript
import { registerPlugin } from '@capacitor/core';

import type { ScreenOrientationPlugin } from './definitions';

const ScreenOrientation = registerPlugin<ScreenOrientationPlugin>(
  'ScreenOrientation',
);

export * from './definitions';
export { ScreenOrientation };
```

上記のコードは、私たちのプラグインの実装コードにリンクされたオブジェクトを作成します。

API の設計は完了したので、次はそれを呼び出すユーザインタフェースを構築しましょう。そうすることで、各プラットフォームの統合を実装する際のテストを容易にすることができます。次のステップは、プラグイン API を使うことです。
