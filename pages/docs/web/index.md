---
title: Capacitor Web Documentation
description: Web Getting Started
contributors:
  - mlynch
---

# CapacitorをWebプロジェクトで利用する

​キャパシターは、従来のWebおよびProgressive Web Appsを完全にサポートします。​Capacitorを使えば、iOSとAndroidのアプリストアアプリのPWAバージョンを最小限の作業で簡単にリリースすることができます。

### インストール

​iOSやAndroidアプリを作るためにCapacitorを使っているなら、すでにアプリにCapacitorがインストールされている可能性は高いでしょう。Capacitorでは、 `web` プラットフォームはあなたのアプリを動かす単なるwebプロジェクトです!

Capacitorをまだインストールしていない場合は、 [Installation](/docs/getting-started/) を参照してから続行してください。

#### Capacitorをモジュールとして利用する

一般的に、アプリケーションはJavaScriptモジュールの `import` をサポートするビルドシステムを備えたフレームワークを使用します。​その場合、
​アプリの上部で `Capacitor` をインポートし、以下のように設定できます:

```typescript
import { Capacitor } from '@capacitor/core';
```

​プラグインを使用するには、 `Plugins` をインポートして利用するプラグインを呼び出すだけです。
Webプラットフォームがサポートされているプラグインを使用すると、実際に便利な機能を利用することができます:

```typescript
import { Plugins } from '@capacitor/core';

const position = await Plugins.Geolocation.getCurrentPosition();
```

### CapacitorをScriptタグで利用する

​ビルドシステムまたはバンドラ/モジュールローダーを使用していないWebアプリケーションでCapacitor coreを使用するには、
`capacitor.config.json` で `bundledWebRuntime` を `true` に設定する必要があります。
​指定したバージョンのコンデンサコアをプロジェクトにコピーします。
​そして `capacitor.js` を `index.html` にインポートします:

```json
{
  "bundledWebRuntime": true
}
```

あなたのプロジェクトにコピーします:

```bash
npx cap copy web
```

`index.html` では、あなたのJSコードの前に `capacitor.js` を読み込みます:

```html
<script src="capacitor.js"></script>
<script src="your/app.js"></script>
```

## アプリの開発

​UIコンポーネントやビルドには、 [Ionic](http://ionicframework.com/) のようなフレームワークを使用している可能性があります。​開発
​フレームワークを使うことがおすすめです！

​フレームワークを使用していない場合、CapacitorにはHTML 5ルーティングをサポートする小規模な開発サービスが付属しています。​これを使うには
以下を実行ください:

```bash
npx cap serve
```

## ライブ

​Progressive Web Appを公開して世界と共有する準備ができたら、
​Webディレクトリ（例えば、 `www/` や `build/` フォルダ）の内容をアップロードします。

​アプリを実行するために必要なものがすべて含まれています！
