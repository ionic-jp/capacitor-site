---
title: Cordova Plugins と Ionic Native を使う
description: Cordova Plugins と Ionic Native を使う
contributors:
  - dotnetkow
---

# Cordova Plugins と Ionic Native を使う

Capacitorを使ったアプリを開発するとき、CordovaとIonic Nativeの両方のプラグインを使うことができます。

## Cordova Pluginsのインストール

選択したプラグインをインストールし、プロジェクトを同期し、必要なNativeプロジェクト構成を完了するだけで、次の作業を開始できます:

```bash
npm install cordova-plugin-name
npx cap sync
```

## Cordova Pluginsのアップデート

インストール手順と同様です。cordovaプラグインを最新バージョンにアップデートするだけで、変更が反映されます。

```bash
npm install cordova-plugin-name@latest
npx cap update
```

If you don't want to risk to introduce breaking changes, use `npm update cordova-plugin-name` instead of `@latest` as `update` respects semver.

## Ionic Native Pluginsのインストール
[Ionic Native](https://ionicframework.com/docs/native) は、Cordovaプラグインを使用した開発を容易にするために、TypeScriptラッパーと一貫したAPIおよび命名規則を提供します。これはCapacitorでサポートされているので、使いたいIonic Nativeラッパーが見つかったら、JavaScriptコードをインストールし、対応するCordovaプラグインをインストールし、プロジェクトを同期させます:

```bash
npm install @ionic-native/javascript-package-name
npm install cordova-plugin-name
npx cap sync
```

## Ionic Native Pluginsのアップデート

インストール手順に従います。Ionic Native JavaScriptライブラリを更新し、Cordovaプラグインを削除してから再追加し、プロジェクトを更新します。

```bash
npm install @ionic-native/javascript-package-name@latest
npm install cordova-plugin-name@latest
npx cap update
```

If you don't want to risk to introduce breaking changes, use `npm update cordova-plugin-name` instead of `@latest`.

## Determining Installed Plugin Version

See the list of Capacitor and Cordova plugins (and their exact version numbers) installed in your project with:

```bash
npx cap ls
```

## 重要: 設定方法

CapacitorはCordovaのインストール変数、自動設定、フックをサポートしていません。これはNativeプロジェクトのソースコード(フックのようなものが不要であることを意味する)をコントロールできるようにするという哲学によるものです。プラグインで変数や設定を設定する必要がある場合は、プラグインと`plugin.xml`間をマッピングして、これらの設定を手動で適用する必要があります。これは、iOSとAndroidで必要な設定です。

各プラットフォームの設定方法については [iOS](/docs/ios/configuration) と [Android](/docs/android/configuration) の構成ガイドを参照してください。

## 非互換の課題

Cordovaプラグインの中には、Capacitorで動作しないものや、競合する代替品を提供するものがあります。 非互換のリストについて詳しく知りたい場合は[こちらをご覧ください](/docs/cordova/known-incompatible-plugins)。
