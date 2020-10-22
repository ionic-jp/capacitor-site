---
title: Capacitorのインストール
description: Capacitorのインストール
contributors:
  - dotNetkow
  - jcesarmobile
---

# Capacitorのインストール

Capacitorの使用を開始するには、既存のフロントエンドプロジェクトにCapacitorを追加する方法(推奨)と、新しいプロジェクトを開始する方法の2つがあります。Capacitorは主に既存のフロントエンドプロジェクトにドロップインするように設計されていますが、新しく始めたいのであれば、シンプルな開始プロジェクト構造が用意されています。

CapacitorはNativeなモバイルランタイムとWebアプリ用のAPIレイヤを提供します。ゲームなどを作成している場合を除き、必要になる可能性の高い特定のUIコントロールは __付属していません__ 。

そのため、お好みのモバイルフロントエンドフレームワーク([Ionic Framework](https://ionicframework.com/)など)でCapacitorプロジェクトを開始することを強くお勧めします。

## はじめる前に

構築するプラットフォームに [Dependencies](/docs/getting-started/dependencies) がすべてインストールされていることを確認してください。最も重要なのは、Macを使ってiOS用にビルドする予定の場合、新しいプロジェクトを始める前に必ず `pod repo update` を使ってCocoaPodsをアップデートすることです。

## 既存のIonicアプリにCapacitorを追加する

[こちらをご覧ください。](/docs/getting-started/with-ionic)

## 既存のWebアプリにCapacitorを追加する

Capacitorは既存のJSウェブアプリにドロップインするように設計されており、有用なパッケージです。開始するには、 `package.json` ファイルとすべてのWebアセットを含むフォルダが必要です。

WebアプリケーションにCapacitorを追加するには、次のコマンドを実行します:

```bash
cd my-app
npm install @capacitor/core @capacitor/cli
```

そして、あなたのアプリ情報をつかってCapacitorを初期化します。

*Note: `npx` は、グローバルインストールを回避するためにローカルバイナリ/スクリプトを実行する、npm5以降で使用可能な新しいユーティリティです。*

```bash
npx cap init
```

このコマンドを実行すると、アプリケーション名とアプリケーションID(Androidのパッケージ名とiOSのバンドル識別子)の入力を求められます。 `--web-dir` フラグを使用して、Webアセットフォルダ(デフォルトは `www` )を設定します。

次に、必要なNative・プラットフォームをインストールします:

```bash
npx cap add android
npx cap add ios
```

🎉 Capacitorがあなたのプロジェクトにインストールされました。 🎉

## Optional: 新規プロジェクトの開始

Capacitorには stock project 構造が用意されているので、新しく始めてUIとフロントエンドのフレームワークを別々に追加したいという場合に便利です。

作成には以下を実行ください:

```bash
npx @capacitor/cli create
```

このコマンドを実行すると、アプリケーション名とアプリケーションID(Androidのパッケージ名とiOSのバンドル識別子)の入力を求められます。

これにより、UIライブラリを持たない非常にシンプルな起動アプリケーションが作成されます。

## 次のアクション

[PWA Elements](/docs/web/pwa-elements) を含む [必要な依存関係](/docs/getting-started/dependencies) がインストールされていることを確認してから、
[Developer Workflow Guide](/docs/basics/workflow) に進んで、Capacitorアプリケーションの構築方法を確認してください。
