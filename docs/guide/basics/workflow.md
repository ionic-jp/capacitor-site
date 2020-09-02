---
title: 開発ワークフロー
description: Capacitorワークフロー
url: /docs/basics/workflow
contributors:
  - dotNetkow
  - mlynch
---

# Capacitorワークフロー

<p class="intro">Capacitorのワークフローには、いくつかの一貫したタスクが含まれます:</p>

## 1. Develop and build your Web App

Capacitorは、ウェブアプリを各プラットフォーム用のNativeバイナリに変換します。したがって、作業の大部分はモバイルに特化したウェブアプリの開発と構築となります。

あなたがNativeプラットフォームと対話する場合、CapacitorのAPI([Camera](/docs/apis/camera)など)を使用するか、または既存のCordovaプラグインとCapacitorの[Cordova Compatibility](./cordova)を用いることになります。

最後に、次のようなコマンドを使用してアプリケーションを構築します。

```bash
npm run build
```

フレームワークを使用している場合は、フレームワークの構築プロセスに従います。[Ionic](https://ionicframework.com/) の場合、ビルドコマンドは以下の通りです:

```bash
ionic build
```

## 2. Webアセットをコピー

デバイスまたはシミュレータ上でNativeにアプリケーションを実行する準備ができたら、次のコマンドを使用して構築したWebアセットをコピーします。

```bash
npx cap copy
```

## 3. NativeIDEを開く

CapacitorはNativeIDEを使ってアプリを構築、シミュレート、実行します。

```bash
npx cap open
```

## 4. Nativeプロジェクトをアップデート

Capacitorアプリは新しいプラグインをインストールする時などにアップデートが必要です。

新しいプラグイン（Cordovaプラグインも含みます）をインストールするには、以下を実行します。

```bash
npm install really-cool-plugin
npx cap update
```

## 5. Capacitorのアップデート

Capacitor本体に新しいアップデートがあるかどうかを確認するには、`npx cap doctor` を実行して現在インストールされている依存関係を出力し、最新の利用可能な依存関係を確認します。

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

Note: 破壊的な変更をもたらすリスクを避けたいのであれば、 `npm update @capacitor/package-name` において、@latestではなくセマンティックバージョニングを考慮してバージョンを指定してください。
