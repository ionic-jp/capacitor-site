---
title: Capacitorの必要な依存関係
description: 異なるプラットフォームのための必要な依存関係
contributors:
  - mlynch
  - dotNetkow
---

# Capacitor の必要な依存関係

Capacitor は、対象とするプラットフォームや開発対象のオペレーティング・システムに応じて、さまざまな依存関係があります。

## 要件

基本要件は、 **[Node v8.6.0](https://nodejs.org) or later** および **NPM version 5.6.0 or later** です(これは通常、必要なバージョンの Node とともに自動的にインストールされます)。

Capacitor は [yarn](https://yarnpkg.com) をサポートしています。

特定のプラットフォームでは、以下の各ガイドに従って正しい依存関係がインストールされていることを確認してください。

## iOS 開発

iOS アプリをビルドするには、Capacitor は **Xcode 11 以上をインストールした Mac が必要です**. または、[Ionic Appflow] (http://ionicframework.com/appflow)を使って、WindowsであってもiOS用にビルドできます。

さらに、 **[CocoaPods](https://cocoapods.org/)** (`sudo gem install cocoapods`)と **Xcode Command Line tools** ツール(Xcode から実行するか、 `xcode-select --install`)をインストールする必要があります。

最新の Capacitor は最新の iOS バージョンをサポートします。

Capacitor 2.0 は iOS 11 以上をサポートします。

Capacitor は WKWebView を使用します。

## Android 開発

Android 開発には、**[Android Studio](https://developer.android.com/studio/index.html)** にインストールされた **Android SDK** が必要です。技術的には、Android CLI ツールだけを使ってアプリをビルドしたり実行したりできますが、アプリのビルドや実行がずっと簡単になるので、Android Studio を使うことを強くお勧めします。

Capacitor の Android バージョンのサポートは iOS よりも複雑です。現在、API レベル 21 以上、つまり Android 5.0(ロリポップ)以上をターゲットにしています。[May 2019 時点で](https://developer.android.com/about/dashboards)、Android 市場の 89%以上を占めています。

また、Capacitor には Chrome バージョン 50 以降の Android WebView が必要です。Android 5 と 6 では、Capacitor は System WebView.使います。Android 7+では Google Chrome が使われています。
