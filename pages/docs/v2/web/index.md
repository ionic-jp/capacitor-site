---
title: Capacitor Web Documentation
description: Web Getting Started
contributors:
  - mlynch
canonicalUrl: https://capacitorjs.com/docs/web
---

# Capacitor を Web プロジェクトで利用する

​ Capacitor は、従来の Web および Progressive Web Apps を完全にサポートします。​Capacitor を使えば、iOS と Android のアプリストアアプリの PWA バージョンを最小限の作業で簡単にリリースすることができます。

### インストール

​iOS や Android アプリを作るために Capacitor を使っているなら、すでにアプリに Capacitor がインストールされている可能性は高いでしょう。Capacitor では、 `web` プラットフォームはあなたのアプリを動かす単なる web プロジェクトです!

Capacitor をまだインストールしていない場合は、 [Installation](/docs/getting-started/) を参照してから続行してください。

#### Capacitor をモジュールとして利用する

一般的に、アプリケーションは JavaScript モジュールの `import` をサポートするビルドシステムを備えたフレームワークを使用します。​ その場合、
​ アプリの上部で `Capacitor` をインポートし、以下のように設定できます:

```typescript
import { Capacitor } from '@capacitor/core';
```

​ プラグインを使用するには、 `Plugins` をインポートして利用するプラグインを呼び出すだけです。
Web プラットフォームがサポートされているプラグインを使用すると、実際に便利な機能を利用することができます:

```typescript
import { Plugins } from '@capacitor/core';

const position = await Plugins.Geolocation.getCurrentPosition();
```

### Capacitor を Script タグで利用する

​ ビルドシステムまたはバンドラ/モジュールローダーを使用していない Web アプリケーションで Capacitor core を使用するには、
`capacitor.config.json` で `bundledWebRuntime` を `true` に設定する必要があります。
​ 指定したバージョンのコンデンサコアをプロジェクトにコピーします。
​ そして `capacitor.js` を `index.html` にインポートします:

```json
{
  "bundledWebRuntime": true
}
```

あなたのプロジェクトにコピーします:

```bash
npx cap copy web
```

`index.html` では、あなたの JS コードの前に `capacitor.js` を読み込みます:

```html
<script src="capacitor.js"></script>
<script src="your/app.js"></script>
```

## アプリの開発

​UI コンポーネントやビルドには、 [Ionic](http://ionicframework.com/) のようなフレームワークを使用している可能性があります。​ 開発
​ フレームワークを使うことがおすすめです！

​ フレームワークを使用していない場合、Capacitor には HTML 5 ルーティングをサポートする小規模な開発サービスが付属しています。​ これを使うには
以下を実行ください:

```bash
npx cap serve
```

## ライブ

​Progressive Web App を公開して世界と共有する準備ができたら、
​Web ディレクトリ（例えば、 `www/` や `build/` フォルダ）の内容をアップロードします。

​ アプリを実行するために必要なものがすべて含まれています！
