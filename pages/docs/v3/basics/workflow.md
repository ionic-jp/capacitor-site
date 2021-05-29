---
title: 開発ワークフロー
description: Capacitorワークフロー
contributors:
  - dotNetkow
  - mlynch
---

# Capacitor ワークフロー

Capacitor のワークフローには、いくつかの一貫したタスクが含まれます:

## Web アプリの開発・構築

Capacitor は、ウェブアプリを各プラットフォーム用の Native バイナリに変換します。したがって、作業の大部分はモバイルに特化したウェブアプリの開発と構築となります。

あなたが Native プラットフォームと対話する場合、Capacitor の API([Camera](/docs/apis/camera)など)を使用するか、または既存の Cordova プラグインと Capacitor の[Cordova Compatibility](/docs/cordova)を用いることになります。

Web アプリをネイティブデバイスにデプロイするには、まず、Web アセットを出力ディレクトリにビルドする必要があります。正確なコマンドは、お使いの JavaScript フレームワークのドキュメントを参照してください。ほとんどの場合、`npm run build`となります。

## プロジェクトの同期

以下のような場合に、Web アプリとネイティブプロジェクトを同期させることがあります。

- Web アセットをネイティブプロジェクトにコピーする場合
- ネイティブ IDE でプロジェクトを実行する前
- 新しい Capacitor プラグインをインストールした後
- プロジェクトを clone した後
- ネイティブプロジェクトを Capacitor 用に設定または再設定するとき
- Gradle や CocoaPods などを使ってネイティブの依存関係をインストールするとき

プロジェクトを同期するには、以下を実行します:

```bash
npx cap sync
```

> Web アセットのディレクトリが見つからないというエラーが出る場合は、[Capacitor configuration](/docs/config)で `webDir` を設定する必要があるかもしれません。

[ `sync` について詳しく学ぶ &#8250;](/docs/cli/sync)

## プロジェクトの実行

プロジェクトをネイティブデバイスにデプロイするには、ユースケースに応じていくつかの方法があります。最も一般的なのは、コマンドラインで `npx cap run` を使う方法です。

[iOS でのアプリの実行を学ぶ &#8250;](/docs/ios#running-your-app)

[Android でのアプリの実行を学ぶ &#8250;](/docs/android#running-your-app)

## プロジェクトをビルドする

`npm run build`で Web アセットをビルドし、`npx cap sync`でネイティブプロジェクトにコピーしたら、ネイティブバイナリをビルドする準備が整います。

Capacitor には "build" コマンドはありません。 `sync` の後は、ネイティブアプリをビルドするために、ターゲットプラットフォームの IDE を開くことをお勧めします。

コマンドラインや CI 環境でアプリをビルドするには、ターゲットプラットフォームのツールを使うことが推奨されます。Android には Gradle、iOS には `xcodebuild` があります。 [Fastlane](https://fastlane.tools)のようなサードパーティのツールを使うと、より簡単に構築できるでしょう。[Appflow](https://useappflow.com)を使えば、クラウドビルドなども可能です。

Capacitor のリリースプロセスについては、 [iOS](/docs/ios/deploying-to-app-store) と [Android](/docs/android/deploying-to-google-play) のパブリッシングガイドをご覧ください。

## Native IDE を開く

以下のような状況では、Native IDE（Xcode や Android Studio など）でプロジェクトを開きたい場合があります:

- ネイティブデバイス上で IDE を使ってプロジェクトを実行したい場合
- ネイティブの Java/Kotlin や Swift/Objective-C のコードをデバッグしたいとき
- アプリのネイティブ側で作業したいとき
- App Store 用のリリースビルドをコンパイルするとき

[Xcode でのアプリの開き方を学ぶ &#8250;](/docs/ios#opening-the-ios-project)

[Android Studio でのアプリの開き方を学ぶ &#8250;](/docs/android#opening-the-android-project)

## Capacitor のアップデート

Capacitor の Core と CLI をアップデートするには、以下の手順で行います:

```bash
npm install @capacitor/cli
npm install @capacitor/core
```

使用しているプラットフォームの一部または全部をアップデートするには、以下のようにします:

```bash
npm install @capacitor/ios
npm install @capacitor/android
```

> [Capacitor repo](https://github.com/ionic-team/capacitor)を購読すると、新しいリリースの通知を受けることができます。リポジトリのインデックスの上部にある **Watch** -> **Releases only** をクリックします。
