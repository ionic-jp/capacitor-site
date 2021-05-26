---
title: Capacitorのインストール
description: Capacitorのインストール
contributors:
  - dotNetkow
  - jcesarmobile
canonicalUrl: https://capacitorjs.com/docs/getting-started
---

# Capacitor のインストール

Capacitor の使用を開始するには、既存のフロントエンドプロジェクトに Capacitor を追加する方法(推奨)と、新しいプロジェクトを開始する方法の 2 つがあります。Capacitor は主に既存のフロントエンドプロジェクトにドロップインするように設計されていますが、新しく始めたいのであれば、シンプルな開始プロジェクト構造が用意されています。

Capacitor は Native なモバイルランタイムと Web アプリ用の API レイヤを提供します。ゲームなどを作成している場合を除き、必要になる可能性の高い特定の UI コントロールは **付属していません** 。

そのため、お好みのモバイルフロントエンドフレームワーク([Ionic Framework](https://ionicframework.com/)など)で Capacitor プロジェクトを開始することを強くお勧めします。

## はじめる前に

構築するプラットフォームに [Dependencies](/docs/getting-started/dependencies) がすべてインストールされていることを確認してください。最も重要なのは、Mac を使って iOS 用にビルドする予定の場合、新しいプロジェクトを始める前に必ず `pod repo update` を使って CocoaPods をアップデートすることです。

## 既存の Ionic アプリに Capacitor を追加する

[こちらをご覧ください。](/docs/getting-started/with-ionic)

## 既存の Web アプリに Capacitor を追加する

Capacitor は既存の JS ウェブアプリにドロップインするように設計されており、有用なパッケージです。開始するには、 `package.json` ファイルとすべての Web アセットを含むフォルダが必要です。

Web アプリケーションに Capacitor を追加するには、次のコマンドを実行します:

```bash
cd my-app
npm install @capacitor/core @capacitor/cli
```

そして、あなたのアプリ情報をつかって Capacitor を初期化します。

_Note: `npx` は、グローバルインストールを回避するためにローカルバイナリ/スクリプトを実行する、npm5 以降で使用可能な新しいユーティリティです。_

```bash
npx cap init
```

このコマンドを実行すると、アプリケーション名とアプリケーション ID(Android のパッケージ名と iOS のバンドル識別子)の入力を求められます。 `--web-dir` フラグを使用して、Web アセットフォルダ(デフォルトは `www` )を設定します。

次に、必要な Native・プラットフォームをインストールします:

```bash
npx cap add android
npx cap add ios
```

🎉 Capacitor があなたのプロジェクトにインストールされました。 🎉

## Optional: 新規プロジェクトの開始

Capacitor には stock project 構造が用意されているので、新しく始めて UI とフロントエンドのフレームワークを別々に追加したいという場合に便利です。

作成には以下を実行ください:

```bash
npx @capacitor/cli create
```

このコマンドを実行すると、アプリケーション名とアプリケーション ID(Android のパッケージ名と iOS のバンドル識別子)の入力を求められます。

これにより、UI ライブラリを持たない非常にシンプルな起動アプリケーションが作成されます。

## 次のアクション

[PWA Elements](/docs/web/pwa-elements) を含む [必要な依存関係](/docs/getting-started/dependencies) がインストールされていることを確認してから、
[Developer Workflow Guide](/docs/basics/workflow) に進んで、Capacitor アプリケーションの構築方法を確認してください。
