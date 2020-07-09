---
title: アプリのビルド
description: アプリのビルド
url: /docs/basics/building-your-app
contributors:
  - dotNetkow
  - mlynch
---

# アプリのビルド

<p class="intro">Capacitorは3段階のビルドプロセスで動作します。最初に、あなたのWebコードがビルドされます（必要な場合）。次に、構築したWebコードを各プラットフォームにコピーします。最後に、アプリはプラットフォーム固有のツールを使ってコンパイルされます。</p>

## 1. Webコードのビルド

Capacitorには、Webコードを構築するための組み込み機能はありません。代わりに、あなたは自分のフレームワークのビルドプロセスを選択することができます。

ビルドプロセスに関係なく、標準のフロントエンドビルドコマンドを有効にするために、package.jsonにbuildスクリプトを追加することをお勧めします:

```json
{
  "scripts": {
    "build": "command-to-build (ex: webpack, tsc, babel, etc.)"
  }
}
```


```bash
npm run build
```

<stencil-route-link url="/docs/basics/progressive-web-app">Progressive Web App</stencil-route-link> を設定していれば、これでProgressive Web Appをビルドできます。

## 2. Webコードをコピーする

作成したWebコードは、各ネイティブプロジェクトにコピーする必要があります:

```bash
npx cap copy
```

ビルドを実行するたびにこれを実行する必要があります。このコマンドを `package.json` のビルドスクリプトの最後に追加してください。

## 3. Nativeプロジェクトのビルド

### iOS

iOSは、最終的なアプリのコンパイルをXcodeに依存しています。

```bash
npx cap copy ios
npx cap open ios
```

Xcodeが起動したら、標準的なXcodeワークフローを使って最終的なアプリバイナリを構築することができます。

### Android

現在、Androidはアプリの開発をAndroid Studio(または、オプションでAndroid CLIツール)に依存しています。

```bash
npx cap copy android
npx cap open android
```

Android Studioが起動したら、標準のAndroid Studioワークフローを使ってアプリを構築することができます。
