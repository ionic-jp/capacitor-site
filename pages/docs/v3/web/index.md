---
title: CapacitorのWebでの使い方
description: Webでのはじめ方
contributors:
  - mlynch
---

# Web プロジェクトでの Capacitor の利用

Capacitor 従来の Web アプリケーションと Progressive Web Apps を完全にサポートします。実際、Capacitor を使えば、iOS と Android のアプリストアアプリの PWA バージョンを最小限の作業で簡単にリリースできます。

### インストール

Capacitor を使用して iOS または Android アプリケーションを構築している場合は、 Capacitor がすでにアプリケーションにインストールされている可能性があります。Capacitor では、 `web` プラットフォームは単にアプリケーションを実行する Web プロジェクトです。

まだ Capacitor をインストールしていない場合は、先に進む前に [Installation](/docs/getting-started/) ガイドを参照してください。

#### Capacitor を Module として使う

一般的に、アプリをつくる時には、JavaScript モジュールのインポートをサポートするビルドシステムを備えたフレームワークを使用します。
その場合は、アプリの上部に Capacitor をインポートすれば OK です:

```typescript
import { Capacitor } from '@capacitor/core';
```

プラグインを使用するには、 `プラグイン` をインポートして呼び出します。
実際に便利な機能を提供するのは、Web サポート付きのプラグインだけです。

```typescript
import { Plugins } from '@capacitor/core';

const position = await Plugins.Geolocation.getCurrentPosition();
```

### Script タグから Capacitor を利用する

ビルドシステムまたはバンドラー/モジュールローダーを使用していない
Web アプリケーションで Capacitor コアを使用するには、`capacitor.config.json` で `bundledWebRuntime` を `true` に設定し、
指定したバージョンの Capacitor Core をプロジェクトにコピーするように Capacitor に指示してから、
`index.html`に`capacitor.js` をインポートする必要があります:

```json
{
  "bundledWebRuntime": true
}
```

プロジェクトにコピーしてください。

```bash
npx cap copy web
```

`index.html`で、`capacitor.js`をあなたのアプリの JS の前に読み込みます:

```html
<script src="capacitor.js"></script>
<script src="your/app.js"></script>
```

## アプリの開発

あなたは[Ionic](https://ionicframework.com/)のような UI コンポーネントとビルドシステムを採用してるかもしれません。
その場合、Capacitor アプリでも、そのフレームワークのものを使ってください！

フレームワークを使用していない場合、Capacitor には HTML5 ルーティングをサポートする小さな開発サービスが付属しています。
これを使用するには、以下を実行してください:

```bash
npx cap serve
```

## 本番に反映する

Progressive Web App を公開して、世界と共有する準備ができたら、Web ディレクトリのコンテンツをアップロードします
(例えば `www/` や `build/` フォルダです)。

これには、アプリケーションを実行するために必要なものがすべて含まれています！
