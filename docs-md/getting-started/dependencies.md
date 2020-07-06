---
title: Capacitor Required Dependencies
description: Required Dependencies for different platforms
url: /docs/getting-started/dependencies
contributors:
  - mlynch
  - dotNetkow
---

# Capacitorの必要な依存関係

<p class="intro">Capacitorは、対象とするプラットフォームや開発対象のオペレーティング・システムに応じて、さまざまな依存関係があります。</p>

## 要件

基本要件は、 **[Node v8.6.0](https://nodejs.org) or later** および **NPM version 5.6.0 or later** です(これは通常、必要なバージョンのNodeとともに自動的にインストールされます)。

Capacitor は [yarn](https://yarnpkg.com) をサポートしています。

特定のプラットフォームでは、以下の各ガイドに従って正しい依存関係がインストールされていることを確認してください。

## iOS開発

For building iOS apps, Capacitor requires a **Mac with Xcode 11 or above**. Or you can use [Ionic Appflow](http://ionicframework.com/appflow) to build for iOS even if you're on Windows.

さらに、 **[CocoaPods](https://cocoapods.org/)** (`sudo gem install cocoapods`)と **Xcode Command Line tools** ツール(Xcodeから実行するか、 `xcode-select --install`)をインストールする必要があります。

最新のCapacitorは最新のiOSバージョンをサポートします。

Capacitor 2.0 は iOS 11以上をサポートします。

CapacitorはWKWebViewを使用します。

## Android開発

Android開発には、**[Android Studio](https://developer.android.com/studio/index.html)** にインストールされた **Android SDK** が必要です。技術的には、Android CLIツールだけを使ってアプリをビルドしたり実行したりできますが、アプリのビルドや実行がずっと簡単になるので、Android Studioを使うことを強くお勧めします。

CapacitorのAndroidバージョンのサポートはiOSよりも複雑です。現在、APIレベル21以上、つまりAndroid 5.0(ロリポップ)以上をターゲットにしています。[May 2019時点で](https://developer.android.com/about/dashboards)、Android市場の89%以上を占めています。

Also, Capacitor requires an Android WebView with Chrome version 50 or later. On Android 5 and 6, the Capacitor uses the System WebView. On Android 7+, Google Chrome is used.
