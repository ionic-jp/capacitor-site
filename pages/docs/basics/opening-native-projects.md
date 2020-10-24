---
title: Opening Native Projects 
description: Opening Native Projects via Native IDEs
contributors:
  - dotNetkow
  - mlynch
---

# ネイティブプロジェクトを開く

Capacitorは必要な構成を提供し、アプリケーションをビルド、テスト、およびデプロイするために、各プラットフォームのネイティブIDEを使用します。

iOSの開発では、 [Xcode 11](https://developer.apple.com/xcode/) かそれ以上のバージョンをインストールしている必要があります。Androidでは [Android Studio](https://developer.android.com/studio/index.html) 3 かそれ以上のバージョンが必要です。

どちらのIDEも手動で開くことができますし、 `npx cap open` コマンドも使うことができます:

## Xcodeを開く

```bash
npx cap open ios
```

代わりに手動で開くこともできます:

```bash
open ios/App/App.xcworkspace
```

## Android Studioを開く

```bash
npx cap open android
```

代わりに、Android Studioを開いて `android/` ディレクトリをプロジェクトにインポートすることもできます。
