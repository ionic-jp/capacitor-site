---
title: Nativeプロジェクトを開く
description: NativeプロジェクトをNativeIDEで開く
url: /docs/basics/opening-native-projects
contributors:
  - dotNetkow
  - mlynch
---

# Nativeプロジェクトを開く

<p class="intro">Capacitorは、必要な構成を提供し、アプリを構築、テスト、およびデプロイするために、プラットフォームごとにNativeIDEを使用します。</p>

<p class="intro">iOS開発の場合は、 <a href="https://developer.apple.com/xcode/" target="_blank">Xcode 11</a> 以上がインストールされている必要があります。Androidの場合は <a href="https://developer.android.com/studio/index.html" target="_blank">Android Studio</a> 3 以上が必要です。</p>

<p class="intro">どちらのIDEも、手動で開くことも、 <code>npx cap open</code> コマンドを使うこともできます:</p>

## Xcodeを開く

```bash
npx cap open ios
```

もしくは、Xcodeを手動で開くこともできます:

```bash
open ios/App/App.xcworkspace
```

## Android Studioを開く

```bash
npx cap open android
```

あるいは、Android Studioを開き、`android/` ディレクトリをAndroid Studioプロジェクトとしてインポートすることもできます。
