---
title: Capacitor Webドキュメンテーション
description: Webでのはじめ方
contributors:
  - mlynch
---

# Web プロジェクトでの Capacitor の使用

Capacitor は、従来の Web と Progressive Web Apps を完全にサポートしています。実際、Capacitor を使用すると、最小限の作業で iOS や Android のアプリストアアプリの PWA バージョンを簡単に出荷することができます。

## ブラウザサポート

Capacitor のコアとプラグインは ES2017 に対応しています。この新しい JavaScript 構文は、すべてのモダンブラウザ（iOS や Android の PWA を動かすものを含む）でサポートされていますが、IE11 では [Babel](https://babeljs.io) などで追加の JavaScript 変換をしないと動作しません。

Web サポート付きのプラグインは、機能検出を行い、ブラウザが特定の Web API をサポートしていない場合は例外を throw します。

## インストール

すでに Capacitor for iOS または Android で構築している場合は、追加のインストール手順はありません。

そうでない場合は、 [Installation](/docs/getting-started/) ガイドを参照してください。

### Capacitor のモジュール化

多くのアプリは、JavaScript モジュールのインポートに対応したビルドシステムを持つフレームワークを使用しています。このような場合、`@capacitor/core` からインポートするか、プラグインをインポートすることで、Capacitor の JavaScript ランタイムがアプリに読み込まれます。

### スクリプトを include して Capacitor を利用する

ビルドシステムやバンドルラ/モジュールローダーを使用していない Web アプリで Capacitor ランタイムを使用するには、以下のようにします。

1. Capacitor の設定ファイル(/docs/v3/config)で、`bundledWebRuntime`を`true`に設定する。

```json
"bundledWebRuntime": true
```

2. Capacitor のランタイムバンドル（`capacitor.js`）を Web assets ディレクトリにコピーする。

```bash
npx cap sync web
```

3. index.html "に "capacitor.js "を他の JavaScript よりも先にインポートする。

```html
<script src="capacitor.js"></script>
<script src="your/app.js"></script>
```

## Going Live

Progressive Web App を公開する準備ができたら、Web アセットディレクトリの内容をアップロードします。

これでアプリの実行に必要なものがすべて揃いました！
