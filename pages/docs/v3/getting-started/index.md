---
title: Capacitorをインストール
description: Capacitorをインストール
contributors:
  - dotNetkow
  - jcesarmobile
---

# Capacitor をインストール

このガイドでは、既存のフロントエンド・ウェブ・アプリケーションに Capacitor をインストールする方法を説明します。

> 新しいアプリをつくりはじめる場合は、選択した JavaScript フレームワークのドキュメントを使用してから、このガイドに従って Capacitor を統合することをお勧めします。
>
> また、 `npm init @capacitor/app` で新しい基本アプリを作成することもできます。

Capacitor は、ネイティブ・モバイル・ランタイムと Web アプリ用の API レイヤーを提供します。このアプリには、特定の UI コントロールのセットは付属していません。モバイルコンポーネントフレームワーク（[Ionic Framework](https://ionicframework.com/)など）を使用することをお勧めします。

## はじめる前に

ビルドするプラットフォームに合わせて [環境が設定されている](/docs/getting-started/environment-setup) ことを確認してください。

## プロジェクトの要件

Capacitor は、最新の JavaScript ウェブアプリケーションに組み込むことができるように設計されています。プロジェクトは、以下の要件を満たす必要があります:

- `package.json` ファイルがあること。
- Web アセット用のディレクトリがあること。
- Web アセットディレクトリのルートに `index.html` ファイルがあり、`<head>` タグがあること。

## アプリへの Capacitor の追加

アプリのルートに Capacacitor をインストールします:

```bash
npm install @capacitor/core @capacitor/cli
```

次に、CLI の質問票を使って、Capacitor を初期化します:

```bash
npx cap init
```

CLI はいくつかの質問をしてきます。まず、アプリの名前と、アプリに使用するパッケージ ID を尋ねてきます。

最後に、ウェブアセットをどのディレクトリに構築するかを尋ねてきます。Angular では`www`、React では`build`、Vue では`dist`となります。もし、今すぐに分からなければ、後で `capacitor.config.ts` ファイルでこの値を更新することができます。

> `npx cap` コマンドは、Capacitor がプロジェクトのコマンドラインでローカルに実行される方法です。[Capacitor CLI についての詳細](/docs/cli)を参照してください。

## 次の作業

[iOS でのはじめかた &#8250;](/docs/ios)

[Android でのはじめかた &#8250;](/docs/android)

[開発ワークフローのガイド &#8250;](/docs/basics/workflow)
