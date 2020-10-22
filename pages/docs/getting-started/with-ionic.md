---
title: IonicでCapacitorを使う
description: IonicでCapacitorを使う
contributors:
  - dotNetkow
---

# IonicでCapacitorを使う

## IonicプロジェクトにCapacitorをインストール
IonicプロジェクトにCapacitorをインストールするのはとても簡単です (1.0-4.x+).

### Ionicプロジェクト新規作成

```bash
ionic start myApp tabs --capacitor
cd myApp
```

### 既存のIonicプロジェクト

```bash
cd myApp
ionic integrations enable capacitor
```

### Capacitorの初期化

*Note: `npx` は、グローバルインストールを回避するためにローカルバイナリ/スクリプトを実行する、npm5以降で使用可能な新しいユーティリティです。*

```bash
npx cap init [appName] [appId]
```

`appName`はアプリケーションの名前で、`appId` はアプリケーションのドメイン識別子です(ex:v`com.example.app`)。

*Note: 初期構成後にこれらのプロパティーを変更するには、NativeIDEを使用します。*

### Ionicアプリのビルド

Nativeプラットフォームを追加する前に、少なくとも1回はIonicプロジェクトをビルドする必要があります。

```bash
ionic build
```

これにより、 `www` フォルダをのCapacitorの `webDir` として使用するための [automatically configured](/docs/basics/configuring-your-app) が `capacitor.config.json` に書き込まれます。

### プラットフォームの追加

```bash
npx cap add ios
npx cap add android
```

プロジェクトのルートに `android` フォルダと `ios` フォルダの両方が作成されます。これらは完全に独立したNativeプロジェクトであり、Ionicアプリのソースコードの一部と考えるべきです(つまり、それらをソース制御にチェックインし、独自のIDEで編集するなどです。)。

### IDEを開いて構築、実行、デプロイを行う

```bash
npx cap open ios
npx cap open android
```

NativeのiOSとAndroidプロジェクトは、それぞれの標準IDE(それぞれXcodeとAndroid Studio)で開きます。IDEを使用して、アプリケーションを実行およびデプロイします。

## アプリをCapacitorと同期する

ビルド（例えば `ionic build` ）を実行してWebディレクトリ(デフォルト: `www` )を変更するたびに、これらの変更をNativeプロジェクトにコピーする必要があります:

```bash
npx cap copy
```

## Cordova と Ionic Native Pluginを使う

Cordova と [Ionic Native](https://ionicframework.com/docs/native/) プラグインはCapacitorをサポートしています。 詳しくは [Cordova Plugins](/docs/cordova/using-cordova-plugins) ガイドをご覧ください。

すぐにIonicアプリでCapacitorを使い始めたいですか？ [このガイドをご覧ください。](/docs/guides/ionic-framework-app).
