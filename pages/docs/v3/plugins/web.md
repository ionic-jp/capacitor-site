---
title: Capacitor Web/PWA プラグインガイド
description: Capacitor Web/PWA プラグインガイド
contributors:
  - mlynch
  - jcesarmobile
  - dotNetkow
---

# Capacitor Web/PWA プラグインガイド

Capacitor は、Web/Native 互換レイヤーを利用しており、Web 上の PWA で動作した場合と同様にネイティブで動作した場合の機能を持つプラグインを簡単に構築することができます。

## はじめかた

まず、プラグインガイドの [はじめかた](/docs/plugins/creating-plugins#plugin-generator) の項目にあるように、プラグインを生成してください。

つづいて、`echo/src/web.ts` を好きなエディタで開きます。

## サンプル

Capacitor の Web プラグインの基本的な構造は次のようになります：

```typescript
import { WebPlugin } from '@capacitor/core';

import type { EchoPlugin } from './definitions';

export class EchoWeb extends WebPlugin implements EchoPlugin {
  async echo(options: { value: string }) {
    console.log('ECHO', options);
    return options;
  }
}
```

`EchoPlugin` インターフェースは、プラグインのメソッドシグネチャを定義します。TypeScript では、Web の実装 (`EchoWeb` クラス) が正しくインタフェースを実装していることを確認することができます。

## Permissions

プラグインがウェブ上でエンドユーザーの許可を必要とする機能を持つ場合、permissions パターンを実装する必要があります。

### エイリアス

プラグインが必要とするパーミッションを抽象化し、グループ化するために、1 つ以上のエイリアスを開発する必要があります。これらのエイリアスは、パーミッションの状態を伝えるために使用されます。デフォルトでは、エイリアスは以下の状態のいずれかになります。

- `granted`: このエイリアスに含まれるすべてのパーミッションは、エンドユーザーによって許可されています (あるいはプロンプトが表示される必要はありません)。
- `denied`: このエイリアスの 1 つ以上のパーミッションがエンドユーザーによって拒否されています。
- `prompt`: 許可も拒否もされていないので、エンドユーザーに許可を求めるプロンプトを表示する必要があります。
- `prompt-with-rationale`: エンドユーザーが以前に許可を拒否したことがあるが、まだプロンプトをブロックしていない。

これらは `@capacitor/core` からエクスポートされた `PermissionState` 型で表現されます。

必要であれば、エイリアスのためにカスタムの状態を定義することも可能です。例えば、公式の [Camera plugin](/docs/apis/camera) では、 `camera` と `photos` のエイリアスに対して `limited` ステート を定義しています。

エイリアスはクロスプラットフォームなので、プラグインのエイリアスを決定する際には、iOS、Android、Web のパーミッションを考慮するようにしてください。

### パーミッションの状態に関する定義

`src/definitions.ts` で、Capacitor の `PermissionState` をインポートして、プラグインのパーミッションの状態を表す `PermissionStatus` インターフェイスを定義します。このインターフェースは、あなたが考えたエイリアスがキーとなります。

以下の例では、パーミッションのステータスは `location` というエイリアスで表現され、 `granted`, `denied` などの値を持つことができます。

```typescript
import type { PermissionState } from '@capacitor/core';

export interface PermissionStatus {
  // TODO: change 'location' to the actual name of your alias!
  location: PermissionState;
}
```

次に、プラグインインターフェースに `checkPermissions()` と `requestPermissions()` の定義を追加します。これらのメソッドは、 `PermissionStatus` で定義された、あなたのプラグインのパーミッションの現在の状態を返します。

```diff-typescript
 export interface EchoPlugin {
   echo(options: { value: string }): Promise<{ value: string }>;
+  checkPermissions(): Promise<PermissionStatus>;
+  requestPermissions(): Promise<PermissionStatus>;
 }
```

これらのメソッドはプラグインインターフェースに追加されるため、プラグインがサポートするすべてのプラットフォームで実装する必要があります。

### パーミッションの実装

`src/web.ts` に `checkPermissions()` と `requestPermissions()` メソッドを追加し、Web の実装にします。

```diff-typescript
+import { PermissionStatus } from './definitions';

 export class EchoWeb extends WebPlugin implements EchoPlugin {
   async echo(options: { value: string }) {
     ...
   }

+  async checkPermissions(): Promise<PermissionStatus> {
+    // TODO
+  }

+  async requestPermissions(): Promise<PermissionStatus> {
+    // TODO
+  }
 }
```

#### `checkPermissions()`

このメソッドは、あなたのプラグインにおけるパーミッションの現在のステータスを返す必要があります。この情報は、特定の Web API で直接利用できるかもしれませんし、 [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) からも利用できるかもしれません。

ブラウザの普及率が不安定なウェブ API (たとえば Permissions API) を扱うときは、機能検出機能を実装し、エンドユーザのブラウザが対応していないときは適切なエラーを投げるべきであることを覚えておいてください。

```diff-typescript
 async checkPermissions(): Promise<PermissionStatus> {
+  if (typeof navigator === 'undefined' || !navigator.permissions) {
+    throw this.unavailable('Permissions API not available in this browser.');
+  }

   const permission = await navigator.permissions.query( ... );

   // TODO
 }
```

#### `requestPermissions()`

このメソッドは、あなたのプラグインが必要とするプラットフォーム API を使用する許可をエンドユーザーに求める必要があります。そして、プロンプトの後にプラグインのパーミッションの新しい状態を返すべきです (`checkPermissions()` メソッドと同じように)。

ウェブ上では、パーミッションの要求と実際の呼び出しを分離することができないことがあります。例えば、Geolocation API は位置情報が要求されたときだけパーミッションを要求します。このような状況では、未実装の例外を投げることをお勧めします。

```typescript
async requestPermissions(): Promise<PermissionStatus> {
  // TODO: does the web support requesting permissions for my plugin?
  throw this.unimplemented('Not implemented on web.');
}
```

## エラーハンドリング

Web 用の Capacitor プラグインは、一部のブラウザで採用されていない、あるいはリモートで標準化されていない API で動作することがよくあります。にもかかわらず、プラグインの Web 実装ではベストエフォート型のアプローチをとり、API が利用できないときには優雅に失敗するのが一般的です。これが、ウェブでエラー処理が特に重要な理由です!

### Unavailable

このエラーは、その機能が今すぐには使用できないことを示すために投げられるべきである。

その理由は以下の通りです。

- 現在、ネットワーク接続などの前提条件が欠けている。
- 基本的な API を実装しているブラウザが必要である。

以下の例では、まず `geolocation` が `navigator` で定義されているかどうかを確認します。もし定義されていなければ、ブラウザが Geolocation をサポートしていないことを意味するので、"unavailable "エラーを投げる必要があります。そうでなければ、実装を進めることができます。

```typescript
async getLocation(): Promise<Location> {
  if (typeof navigator === 'undefined' || !navigator.geolocation) {
    throw this.unavailable('Geolocation API not available in this browser.');
  }

  // TODO: actual web implementation
}

```

### Unimplemented

このエラーは、機能が実装されていないことを示すためにスローされることがあります。これを使用して、Web 上でメソッドを stub 化し、後で実装することもできますし、 特定のプラットフォームで機能を実装できないことを示すために使用することもできます。

```typescript
async getLocation(): Promise<Location> {
  throw this.unimplemented('Not implemented on web.');
}
```
