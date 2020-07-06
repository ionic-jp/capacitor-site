---
title: Running your App 
description: Running your App
url: /docs/basics/running-your-app
contributors:
  - dotNetkow
  - mlynch
---

# アプリの実行

<p class="intro">Capacitorは、各プラットフォームのIDEを選択してアプリの実行とテストを行います。</p>

## iOS

現在、iOSでアプリを実行するにはXcodeを使う必要があります。

```bash
npx cap open ios
```

Xcodeが起動したら、標準的なXcodeワークフローを使ってアプリを構築/シミュレート/実行することができます。

## Android

```bash
npx cap open android
```

Android Studioが起動したら、標準のAndroid Studioワークフローを使ってアプリをビルド/エミュレート/実行できます。

## Progressive Web App

Capacitorには簡単なテスト用の小さな開発用ウェブサーバがありますが、
一般的には、選択したフレームワークのサーバツールを使ってウェブアプリを実行します。

```bash
npx cap serve
```

これにより、ブラウザのローカルWebサーバーインスタンスでWebアプリケーションが開きます。
