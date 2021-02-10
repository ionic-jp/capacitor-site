---
title: CapacitorのWebでの使い方
description: Webでのはじめ方
contributors:
  - mlynch
---

# Web プロジェクトでの Capacitor の利用

Capacitor 従来の Web アプリケーションと Progressive Web Apps を完全にサポートします。実際、Capacitor を使えば、iOS と Android のアプリストアアプリの PWA バージョンを最小限の作業で簡単にリリースできます。

## ブラウザサポート

Capacitor とプラグインは ES2017 用に構築されています。この新しい JavaScript 構文は、すべてのモダンなブラウザ(iOS と Android の PWA を動かすものを含む)でサポートされていますが、IE 11 ではたとえば [Babel](https://babeljs.io)のような、追加の JavaScript 変換を使用しないと動作しません。

Web サポートを持つプラグインは、機能検出を実行し、ブラウザが特定の Web API をサポートしていない場合は例外をスローします。

## インストール

すでに iOS や Android 用の Capacitor を使っているなら、追加のインストール手順はありません。

それ以外の場合は、先に進む前に [Installation](/docs/getting-started/) ガイドを参照してください。

### Capacitor を Module として使う

一般的なアプリケーションは、JavaScript モジュールのインポートをサポートするビルドシステムを備えたフレームワークを使用しています。その場合、 `@capacitor/core` からインポートするか、プラグインをインポートすることによって、Capacitor JavaScript ランタイムがあなたのアプリと共にロードされます。

### Script タグから Capacitor を利用する

ビルドシステムまたはバンドラー/モジュールローダーを使用していない Web アプリケーションで Capacitor ランタイムを使用するには、次の手順に従います。

1. [Capacitor configuration file](/docs/v3/config) の `bundledWebRuntime` を `true` にします

```json
"bundledWebRuntime": true
```

2. Capacitor runtime bundle (`capacitor.js`) をアプリのアセットディレクトリにコピーします

```bash
npx cap sync web
```

3. `capacitor.js` を他の JavaScript よりも先に `index.html` で読み込みます

```html
<script src="capacitor.js"></script>
<script src="your/app.js"></script>
```

## 本番にデプロイする

Progressive Web App を公開して世界と共有する準備ができたら、Web Asset ディレクトリのコンテンツをアップロードするだけです。

これには、アプリケーションを実行するために必要なものがすべて含まれています！
