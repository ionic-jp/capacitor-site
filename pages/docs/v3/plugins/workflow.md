---
title: プラグイン開発のワークフロー
description: Capacitor プラグイン開発のワークフロー
contributors:
  - dotNetkow
---

# プラグイン開発のワークフロー

新しいプラグインを作成したら、様々なプラットフォームへの機能実装を開始します。

## 新しいメソッドを実装する

プラグインに新しい機能を実装するには、まず `src/definitions.ts` にあるプラグイン用にエクスポートされた TypeScript インターフェースで、メソッドのシグネチャを定義します。

以下の例では、 `latitude` と `longitude` を受け取る `openMap()` メソッドを追加しています。アプリにインポートして使用できるメソッドのパラメータのインターフェースを定義するのは重要な習慣です。

```diff-typescript
 export interface EchoPlugin {
   echo(options: { value: string }): Promise<{ value: string }>;
+  openMap(options: OpenMapOptions): Promise<void>;
 }

+export interface OpenMapOptions {
+  latitude: number;
+  longitude: number;
+}
```

web の実装を `src/web.ts` で行います:

```diff-typescript
 import type {
   EchoPlugin,
+  OpenMapOptions,
 } from './definitions';

 export class EchoWeb extends WebPlugin implements EchoPlugin {
   // other methods

+  async openMap(location: OpenMapOptions): Promise<void> {
+    // logic here
+  }
 }
```

プラグインをコンパイルするには、plugin ディレクトリに移動して、実行します:

```bash
npm run build
```

[Android の機能](./android) は `android/src/main/[nested folders]/EchoPlugin.java` で実装します:

```java
@PluginMethod()
public void openMap(PluginCall call) {
  Double latitude = call.getDouble("latitude");
  Double longitude = call.getDouble("longitude");

  // more logic

  call.resolve();
}
```

[iOS の機能](./ios) は `ios/Plugin/EchoPlugin.swift` に実装します:

```swift
@objc func openMap(_ call: CAPPluginCall) {
  let latitude = call.getString("latitude")
  let longitude = call.getNumber("longitude")

  // more logic

  call.resolve()
}
```

> `.m` ファイルに [プラグインメソッドの登録](/docs/plugins/ios#export-to-capacitor) を忘れずに行ってください。

この例はプラグインで最も一般的なタイプのメソッドを含んでいますが、サポートされているすべてのタイプの詳細は [ここで見つけることができます](/docs/plugins/method-types) 。

## ローカルでのテスト

プラグインを開発しながらローカルでテストするには、プラグインのパスを指定して `npm install` でプラグインフォルダをアプリにリンクしてください。

```bash
npm install ../path/to/echo
```

プロジェクトの `package.json` ファイルに、依存関係のリストにプラグインパッケージのリンクが表示されるようになりました:

```json
"echo": "file:../path/to/echo",
```

最後に、`npx cap sync` を実行して、ネイティブプロジェクトがあなたのプラグインを認識するようにします。正しく検出された場合は、次のようなメッセージが表示されます:

```bash
[info] Found 1 Capacitor plugin for android:
    - echo (0.0.1)
```

### プラグインのリンク解除

アプリからローカルプラグインをアンインストールするには、プラグインのパッケージ名と一緒に `npm uninstall` を実行します。

```bash
npm uninstall echo
```

## Package Scripts

プラグインテンプレートは、 `package.json` に様々なスクリプトを同梱しています。

- `verify`: ウェブとネイティブのコードをビルドしてテストします。
- `lint`: ウェブとネイティブのコードを lint します。
- `fmt`: ウェブとネイティブのコードを自動整形する
- `docgen`: プラグインインターフェースからドキュメントを生成します (参照 [Documentation](#documentation))
- `build`: ウェブコードを ESM とバンドル配布物にビルドします。

## ドキュメンテーション

プラグインの機能を文書化するために、メソッドとプロパティに [JSDoc](https://jsdoc.app) のコメントブロックを追加します。

> TypeScript ファイルの `@param` と `@returns` の JSDoc タグに型情報を含めることは、通常必要ではありません。

`openMap()` メソッドを例に、 `src/definitions.ts` を開いて、ドキュメントを書き始めてください。

```diff-typescript
 export interface EchoPlugin {
   echo(options: { value: string }): Promise<{ value: string }>;

+  /**
+   * Opens the map at a given location.
+   *
+   * @since 1.1.0
+   */
   openMap(options: OpenMapOptions): Promise<void>;
 }

 export interface OpenMapOptions {
+  /**
+   * The latitude at which to open the map.
+   */
   latitude: number;

+  /**
+   * The longitude at which to open the map.
+   */
   longitude: number;
 }
```

プラグインテンプレートには [`@capacitor/docgen`](https://github.com/ionic-team/capacitor-docgen) が同梱されており、生成されたドキュメントを `README.md` に書き込むことができます。ドキュメントは `npm run build` の実行中に生成される。また、手動で実行することもできます。

```bash
npm run docgen
```

## 公開

プラグインを公開する準備ができたら、いつでも実行ください:

```bash
npm publish
```

これにより、プラグインの JS 部分がビルドされ、残りのプラグインファイルが npm に公開されます。

これで、Capacitor アプリで `npm install echo` を使ってパッケージをインストールできるようになります。
