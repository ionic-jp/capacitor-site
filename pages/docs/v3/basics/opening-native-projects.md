---
title: Opening Native Projects
description: Opening Native Projects via Native IDEs
contributors:
  - dotNetkow
  - mlynch
---

# ネイティブプロジェクトを開く

Capacitor は必要な構成を提供し、アプリケーションをビルド、テスト、およびデプロイするために、各プラットフォームのネイティブ IDE を使用します。

iOS の開発では、 [Xcode 11](https://developer.apple.com/xcode/) かそれ以上のバージョンをインストールしている必要があります。Android では [Android Studio](https://developer.android.com/studio/index.html) 3 かそれ以上のバージョンが必要です。

どちらの IDE も手動で開くことができますし、 `npx cap open` コマンドも使うことができます:

## Xcode を開く

```bash
npx cap open ios
```

代わりに手動で開くこともできます:

```bash
open ios/App/App.xcworkspace
```

## Android Studio を開く

```bash
npx cap open android
```

代わりに、Android Studio を開いて `android/` ディレクトリをプロジェクトにインポートすることもできます。
