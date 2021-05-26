---
title: アプリの実行
description: アプリの実行
contributors:
  - dotNetkow
  - mlynch
---

# アプリの実行

Capacitor は、各プラットフォームの IDE を選択してアプリの実行とテストを行います。

## iOS

現在、iOS でアプリを実行するには Xcode を使う必要があります。

```bash
npx cap open ios
```

Xcode が起動したら、標準的な Xcode ワークフローを使ってアプリを構築/シミュレート/実行することができます。

## Android

```bash
npx cap open android
```

Android Studio が起動したら、標準の Android Studio ワークフローを使ってアプリをビルド/エミュレート/実行できます。

## Progressive Web App

Capacitor には簡単なテスト用の小さな開発用ウェブサーバがありますが、
一般的には、選択したフレームワークのサーバツールを使ってウェブアプリを実行します。

```bash
npx cap serve
```

これにより、ブラウザのローカル Web サーバーインスタンスで Web アプリケーションが開きます。
