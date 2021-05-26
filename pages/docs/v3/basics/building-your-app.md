---
title: アプリのビルド
description: アプリのビルド
contributors:
  - dotNetkow
  - mlynch
---

# アプリのビルド

Capacitor は 3 段階のビルドプロセスで動作します。最初に、あなたの Web コードがビルドされます（必要な場合）。次に、構築した Web コードを各プラットフォームにコピーします。最後に、アプリはプラットフォーム固有のツールを使ってコンパイルされます。

## 1. Web コードのビルド

Capacitor には、Web コードを構築するための組み込み機能はありません。代わりに、あなたは自分のフレームワークのビルドプロセスを選択することができます。

ビルドプロセスに関係なく、標準のフロントエンドビルドコマンドを有効にするために、package.json に build スクリプトを追加することをお勧めします:

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

<stencil-route-link url="/docs/basics/progressive-web-app">Progressive Web App</stencil-route-link> を設定していれば、これで Progressive Web App をビルドできます。

## 2. Web コードをコピーする

作成した Web コードは、各 Native プロジェクトにコピーする必要があります:

```bash
npx cap copy
```

ビルドを実行するたびにこれを実行する必要があります。このコマンドを `package.json` のビルドスクリプトの最後に追加してください。

## 3. Native プロジェクトのビルド

### iOS

iOS は、最終的なアプリのコンパイルを Xcode に依存しています。

```bash
npx cap copy ios
npx cap open ios
```

Xcode が起動したら、標準的な Xcode ワークフローを使って最終的なアプリバイナリを構築することができます。

### Android

現在、Android はアプリの開発を Android Studio(または、オプションで Android CLI ツール)に依存しています。

```bash
npx cap copy android
npx cap open android
```

Android Studio が起動したら、標準の Android Studio ワークフローを使ってアプリを構築することができます。
