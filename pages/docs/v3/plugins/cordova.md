---
title: Cordova Plugins
description: Using Cordova Plugins and Ionic Native
contributors:
  - dotNetkow
---

# Cordova プラグインと Ionic Native

Capacitor を使用したアプリを開発する場合、Cordova と Ionic Native の両方のプラグインを使用することが可能です。

## Cordova プラグインのインストール

Capacitor プラグインは、通常のパッケージマネージャを使用してインストールし、ネイティブプロジェクトに同期されます。インストール方法は Capacitor の Cordova プラグインと同じです。

プラグインをインストールし、同期し、必要なネイティブプロジェクトの設定を完了します（[Variables and Hooks](/docs/plugins/cordova#variables-and-hooks) を参照してください）。

```bash
npm install cordova-plugin-name
npx cap sync
```

> Cordova プラグインに [Ionic Native](https://ionicframework.com/docs/native) ラッパーがある場合、それをインストールすることで TypeScript にも対応できます。
>
> ``bash
> npm インストール @ionic-native/plugin-name
>
> ```
>
> ```

## Cordova プラグインの更新

普段お使いのパッケージマネージャでプラグインを更新します。そして、更新されたプラグインをネイティブプロジェクトに同期させます。

```bash
npm install cordova-plugin-name@version
npx cap sync
```

## インストールされているプラグインのバージョンを確認する

次のコマンドで、プロジェクトにインストールされている Capacitor および Cordova プラグインのリスト (および正確なバージョン番号) を確認します:

```bash
npx cap ls
```

## 互換性の問題

Capacitor と一部の Cordova プラグインには互換性の問題がある可能性があります。多くの公式 Cordova プラグインは使用しないでください。Capacitor は [代替となる公式プラグイン](/docs/apis) を提供しています。変数やフックを使用する Cordova プラグインは、部分的に互換性がある場合があります。一部の Cordova プラグインは完全に互換性がありません [このリスト](/docs/plugins/cordova#known-incompatible-plugins) を参照してください)。

もし既存の Cordova プラグインに問題を発見した場合は、問題の詳細とプラグイン情報を提供して [let us know](https://github.com/ionic-team/capacitor/issues/new) してください。

### 変数とフック

Capacitor は Cordova のインストール変数、自動設定、フックをサポートしていません。これは、ネイティブプロジェクトのソースコードをコントロールさせるという我々の哲学によるものです（つまり、フックのようなものは不要です）。プラグインに変数や設定が必要な場合は、プラグインの `plugin.xml` と iOS や Android で必要な設定を対応させ、手動でそれらの設定を適用する必要があります。

[iOS](/docs/ios/configuration) と [Android](/docs/android/configuration) の設定ガイドで、それぞれのプラットフォームの設定方法について参照してください。

### 既知の非互換プラグイン

プラグインが競合したり、ビルドの問題を引き起こすことが知られている場合、`npx cap sync`を実行するときにスキップされます。

以下は、既知の非互換プラグインのリストです。

- [`cordova-plugin-add-swift-support`](https://github.com/akofman/cordova-plugin-add-swift-support) (not needed, Capacitor has built in Swift support)
- [`cordova-plugin-admobpro`](https://github.com/floatinghotpot/cordova-admob-pro) ([see details](https://github.com/ionic-team/capacitor/issues/1101))
- [`cordova-plugin-braintree`](https://github.com/Taracque/cordova-plugin-braintree) ([see details](https://github.com/ionic-team/capacitor/issues/1415))
- [`cordova-plugin-code-push`](https://github.com/microsoft/code-push) ([see details](https://github.com/microsoft/code-push/issues/615))
- [`cordova-plugin-compat`](https://github.com/apache/cordova-plugin-compat) (not needed)
- [`cordova-plugin-console`](https://github.com/apache/cordova-plugin-console) (not needed, Capacitor has its own)
- [`cordova-plugin-crosswalk-webview`](https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview) (Capacitor doesn't allow to change the webview)
- [`cordova-plugin-fcm`](https://github.com/fechanique/cordova-plugin-fcm) ([see details](https://github.com/ionic-team/capacitor/issues/584))
- [`cordova-plugin-firebase`](https://github.com/arnesson/cordova-plugin-firebase) ([see details](https://github.com/ionic-team/capacitor/issues/815))
- [`cordova-plugin-ionic-keyboard`](https://github.com/ionic-team/cordova-plugin-ionic-keyboard) (not needed, Capacitor has it's own)
- [`cordova-plugin-ionic-webview`](https://github.com/ionic-team/cordova-plugin-ionic-webview) (not needed, Capacitor uses WKWebView)
- [`cordova-plugin-music-controls`](https://github.com/homerours/cordova-music-controls-plugin) (causes build failures, skipped)
- [`cordova-plugin-qrscanner`](https://github.com/bitpay/cordova-plugin-qrscanner) ([see details](https://github.com/ionic-team/capacitor/issues/1213))
- [`cordova-plugin-splashscreen`](https://github.com/apache/cordova-plugin-splashscreen) (not needed, Capacitor has its own)
- [`cordova-plugin-statusbar`](https://github.com/apache/cordova-plugin-statusbar) (not needed, Capacitor has its own)
- [`cordova-plugin-wkwebview-engine`](https://github.com/apache/cordova-plugin-wkwebview-engine) (not needed, Capacitor uses WKWebView)
- [`cordova-plugin-googlemaps`](https://github.com/mapsplugin/cordova-plugin-googlemaps) (causes build failures on iOS, skipped for iOS only)
