---
title: IonicでCapacitorを使う
description: IonicでCapacitorを使う
contributors:
  - dotNetkow
---

# Ionic で Capacitor を使う

## Ionic プロジェクトに Capacitor をインストール

Ionic プロジェクトに Capacitor をインストールするのはとても簡単です (1.0-4.x+).

### Ionic プロジェクト新規作成

```bash
ionic start myApp tabs --capacitor
cd myApp
```

### 既存の Ionic プロジェクト

```bash
cd myApp
ionic integrations enable capacitor
```

### Capacitor の初期化

_Note: `npx` は、グローバルインストールを回避するためにローカルバイナリ/スクリプトを実行する、npm5 以降で使用可能な新しいユーティリティです。_

```bash
npx cap init [appName] [appId]
```

`appName`はアプリケーションの名前で、`appId` はアプリケーションのドメイン識別子です(ex:v`com.example.app`)。

_Note: 初期構成後にこれらのプロパティーを変更するには、NativeIDE を使用します。_

### Ionic アプリのビルド

Native プラットフォームを追加する前に、少なくとも 1 回は Ionic プロジェクトをビルドする必要があります。

```bash
ionic build
```

これにより、 `www` フォルダをの Capacitor の `webDir` として使用するための [automatically configured](/docs/basics/configuring-your-app) が `capacitor.config.json` に書き込まれます。

### プラットフォームの追加

```bash
npx cap add ios
npx cap add android
```

プロジェクトのルートに `android` フォルダと `ios` フォルダの両方が作成されます。これらは完全に独立した Native プロジェクトであり、Ionic アプリのソースコードの一部と考えるべきです(つまり、それらをソース制御にチェックインし、独自の IDE で編集するなどです。)。

### IDE を開いて構築、実行、デプロイを行う

```bash
npx cap open ios
npx cap open android
```

Native の iOS と Android プロジェクトは、それぞれの標準 IDE(それぞれ Xcode と Android Studio)で開きます。IDE を使用して、アプリケーションを実行およびデプロイします。

## アプリを Capacitor と同期する

ビルド（例えば `ionic build` ）を実行して Web ディレクトリ(デフォルト: `www` )を変更するたびに、これらの変更を Native プロジェクトにコピーする必要があります:

```bash
npx cap copy
```

## Cordova と Ionic Native Plugin を使う

Cordova と [Ionic Native](https://ionicframework.com/docs/native/) プラグインは Capacitor をサポートしています。 詳しくは [Cordova Plugins](/docs/cordova/using-cordova-plugins) ガイドをご覧ください。

すぐに Ionic アプリで Capacitor を使い始めたいですか？ [このガイドをご覧ください。](/docs/guides/ionic-framework-app).
