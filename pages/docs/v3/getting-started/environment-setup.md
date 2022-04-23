---
title: 環境設定
description: Capacitorで開発するための設定方法
contributors:
  - mlynch
  - dotNetkow
---

# 環境設定

Capacitor には、対象とするプラットフォームや開発する OS に応じて、いくつかの依存関係があります。

## 要件

始めるためには、少なくとも [NodeJS 12 LTS](https://nodejs.org) 以降が必要となります。特定のプラットフォームについては、以下の各ガイドに従って、正しい依存関係がインストールされていることを確認してください。

## iOS 開発

iOS アプリを作るには、**macOS**が必要です。また、 [Xcode](https://developer.apple.com/xcode/) をダウンロードしてセットアップする必要があります。もしあなたが Linux か Windows で開発している場合、このセクションは読み飛ばしてください。

> [Ionic Appflow](http://ionicframework.com/appflow) を使うと、Mac を持っていない場合でも iOS のクラウドビルドを行うことができます。

### CocoaPods

iOS 用の Capacitor パッケージを管理するための[CocoaPods](https://cocoapods.org/)をインストールします。

```bash
sudo gem install cocoapods
```

### Xcode コマンドラインツール

**Xcode Command Line Tools** をインストールするには、 **Xcode -> Preferences -> Locations** を開き、ドロップダウンで最新バージョンを選択します。

![Xcode locations preferences](/assets/img/docs/ios/xcode-preferences-location.png)

## Android 開発

Android アプリを作るためには、[Android Studio](https://developer.android.com/studio/index.html) をダウンロードして、セットアップする必要があります。

### Android SDK

Android アプリを開発するには、いくつかの Android SDK パッケージをインストールする必要があります。Android SDK Tools と、API 21 以上のバージョンの Android SDK Platforms がインストールされていることを確認してください。

Android Studio のメニューから **Tools -> SDK Manager** を開き、 **SDK Platforms** タブで、テストしたいプラットフォームのバージョンをインストールします。

![SDK Platforms](/assets/img/docs/android/sdk-platforms.png)

**SDK Tools** タブでは、少なくとも以下のものをインストールしてください。

- Android SDK Build-Tools
- Android SDK Command-line Tools
- Android Emulator
- Android SDK Platform-Tools

![SDK Tools](/assets/img/docs/android/sdk-tools.png)
