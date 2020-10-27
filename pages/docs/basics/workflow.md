---
title: 開発ワークフロー
description: Capacitorワークフロー
contributors:
  - dotNetkow
  - mlynch
---

# Capacitor ワークフロー

Capacitor のワークフローには、いくつかの一貫したタスクが含まれます:

## 1. Develop and build your Web App

Capacitor は、ウェブアプリを各プラットフォーム用の Native バイナリに変換します。したがって、作業の大部分はモバイルに特化したウェブアプリの開発と構築となります。

あなたが Native プラットフォームと対話する場合、Capacitor の API([Camera](/docs/apis/camera)など)を使用するか、または既存の Cordova プラグインと Capacitor の[Cordova Compatibility](/docs/cordova)を用いることになります。

最後に、次のようなコマンドを使用してアプリケーションを構築します。

```bash
npm run build
```

フレームワークを使用している場合は、フレームワークの構築プロセスに従います。[Ionic](https://ionicframework.com/) の場合、ビルドコマンドは以下の通りです:

```bash
ionic build
```

## 2. Web アセットをコピー

デバイスまたはシミュレータ上で Native にアプリケーションを実行する準備ができたら、次のコマンドを使用して構築した Web アセットをコピーします。

```bash
npx cap copy
```

## 3. NativeIDE を開く

Capacitor は NativeIDE を使ってアプリを構築、シミュレート、実行します。

```bash
npx cap open
```

## 4. Native プロジェクトをアップデート

Capacitor アプリは新しいプラグインをインストールする時などにアップデートが必要です。

新しいプラグイン（Cordova プラグインも含みます）をインストールするには、以下を実行します。

```bash
npm install really-cool-plugin
npx cap update
```

## 5. Capacitor のアップデート

Capacitor 本体に新しいアップデートがあるかどうかを確認するには、`npx cap doctor` を実行して現在インストールされている依存関係を出力し、最新の利用可能な依存関係を確認します。

Capacitor Core と CLI のアップデート:

```bash
npm install @capacitor/cli@latest
npm install @capacitor/core@latest
```

利用しているプラットフォームのアップデート:

```bash
npm install @capacitor/ios@latest
npm install @capacitor/android@latest
```

Note: 破壊的な変更をもたらすリスクを避けたいのであれば、 `npm update @capacitor/package-name` において、@latest ではなくセマンティックバージョニングを考慮してバージョンを指定してください。
