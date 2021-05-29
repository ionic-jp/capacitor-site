---
title: CordovaからCapacitorへのマイグレーション
description: CordovaからCapacitorへのマイグレーション
contributors:
  - dotNetkow
---

# Web アプリの Cordova から Capacitor へのマイグレーション

Cordova を使用して Web アプリケーションを完全に Capacitor に移行するには、いくつかの手順が必要です。

> It's recommended to work in a separate code branch when applying these changes.

## Capacitor を追加する

Begin by opening your project in the terminal, then either follow the guides for [adding Capacitor to a web app](/docs/getting-started#adding-capacitor-to-your-app) or [adding Capacitor to an Ionic app](/docs/getting-started/with-ionic#existing-ionic-project).

Initialize your app with Capacitor. Some of the information you will be prompted for is available in the Cordova `config.xml` file:

- The app name can be found within the `<name>` element.
- The Bundle ID can be found in the `id` attribute of the root `<widget>` element.

```bash
npx cap init
```

### Build your Web App

You must build your web project at least once before adding any native platforms.

```bash
npm run build
```

This ensures that the `www` folder that Capacitor has been [automatically configured](/docs/basics/configuring-your-app) to use as the `webDir` in the Capacitor configuration file.

### Platforms の追加

Capacitor の Native プラットフォームは、その最上位フォルダにあります。Cordova の場合は、`platforms/ios` もしくは `platforms/android` でした。

```bash
npx cap add ios
npx cap add android
```

Both android and ios folders at the root of the project are created. These are entirely separate native project artifacts that should be considered part of your app (i.e., check them into source control, edit them in their own IDEs, etc.). Additionally, any Cordova plugins found under `dependencies` in `package.json` are automatically installed by Capacitor into each new native project (minus any [incompatible ones](/docs/plugins/cordova#known-incompatible-plugins)):

```json
"dependencies": {
    "@ionic-native/camera": "^5.3.0",
    "@ionic-native/core": "^5.3.0",
    "@ionic-native/file": "^5.3.0",
    "cordova-android": "8.0.0",
    "cordova-ios": "5.0.0",
    "cordova-plugin-camera": "4.0.3",
    "cordova-plugin-file": "6.0.1",
}
```

## スプラッシュ画像とアイコン

アイコンとスプラッシュ画像を以前に作成したことがある場合は、プロジェクトの最上位レベルの`resources`フォルダにあります。`cordova-res` ルールを使って、生成したアイコンとスプラッシュ画像を各 Native プロジェクトに移動します。

まず、 `cordova-res` をインストールください:

```bash
npm install -g cordova-res
```

次に次のコマンドで画像を生成して Native プロジェクトにコピーしてください:

```bash
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```

[詳細はこちらをご覧ください](https://github.com/ionic-team/cordova-res#capacitor).

## プラグインのマイグレート

まず、既存の Cordova プラグインを監査します - 不要になったプラグインを削除できる場合があります。

次に、Capacitor の [core plugins](/docs/apis) と [community plugins](/docs/plugins/community) をすべて確認します。Cordova と同等の Capacitor プラグインに切り替えることができます。

一部のプラグインは機能は完全には一致しませんが、必要な機能は実装されている場合があります。

Note: [既知の非互換プラグイン](/docs/cordova/known-incompatible-plugins) は自動的にスキップされます

### Cordova Plugin の削除

Cordova プラグインを Capacitor プラグインに置き換えたあと(もしくは完全に削除することもできます)、プラグインをアンインストールし、 `sync` コマンドを実行して Native プロジェクトからプラグインコードを削除します。

```bash
npm uninstall cordova-plugin-name
npx cap sync
```

## Permissions の設定

If the plugin declared the permissions or usage descriptions in the `plugin.xml`, Capacitor will automatically add them to your `AndroidManifest.xml` and `Info.plist`. However, you may need to apply additional permissions or usage descriptions manually by mapping between `plugin.xml` and required settings on iOS and Android. Consult the [iOS](/docs/ios/configuration) and [Android](/docs/android/configuration) configuration guides for info on how to configure each platform.

## Cordova Plugin preferences

When `npx cap init` is run, Capacitor reads all the preferences in `config.xml` and port them to `capacitor.config.json` or `capacitor.config.ts` file. You can manually add more preferences to the `cordova.preferences` object too.

```json
{
  "cordova": {
    "preferences": {
      "DisableDeploy": "true",
      "CameraUsesGeolocation": "true"
    }
  }
}
```

## Additional Fields from `config.xml`

あなたは `config.xml` の他の要素が Capacitor アプリではどのように動作するか気になるかもしれません。

Author 要素は`package.json` で設定できます。ただし、Capacitor やアプリケーション内では使用されません:

```xml
<author email="email@test.com" href="https://ionicframework.com/">Ionic Framework Team</author>
```

`allow-intent`値のほとんどは使用されませんが、Capacitor に[構成可能な代替手段](/docs/basics/configuring-your-app/)の設定があります。

```xml
<allow-intent href="http://*/*" />
<allow-intent href="https://*/*" />
<allow-intent href="tel:*" />
<allow-intent href="sms:*" />
<allow-intent href="mailto:*" />
<allow-intent href="geo:*" />
```

iOS の`edit-config` 要素は [configured in Info.plist](/docs/ios/configuration) を必要とします。

```xml
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take photos</string>
</edit-config>
```

すべての`config.xml`の要素をカバーするのは不可能です。しかし、"Capacitor で X を設定するにはどうやったらいい？"に関する質問のほとんどは、オンラインで答えを探すときには「[プラットフォーム] (iOS/Android)で X を設定するには?」と考えるべきです。

## Scheme の設定

Cordova で Ionic を使用すると、アプリはデフォルトで `cordova-plugin-ionic-webview` を使用し、iOS ではコンテンツの提供に `ionic://` scheme を使用します。Capacitor アプリは iOS のデフォルトスキームとして `capacitor://` を使用しています。これは LocalStorage のようなオリジンバインドされた Web API を使用すると、起点が異なるためデータが失われることを意味します。これは、コンテンツの提供に使用するスキームを変更することで修正できます。

```json
{
  "server": {
    "iosScheme": "ionic"
  }
}
```

## Cordova の削除

すべてのマイグレーション変更が適用され、アプリケーションが正常に動作することをテストしたら、Cordova をプロジェクトから削除できます。`config.xml`を削除します。`platforms` フォルダと `plugins` フォルダも同様です。Cordova は Capacitor と一緒に動作するので、技術的に取り外す必要はないことに注意してください。実際、Cordova プラグインの使用を継続する予定がある場合、または将来的に使用する可能性がある場合は、Cordova アセットをそのまま使用できます。

## 次のステップ

This is just the beginning of your Capacitor journey. Learn more about [using Cordova plugins](/docs/plugins/cordova) in a Capacitor project or more details on the Capacitor [development workflow](/docs/basics/workflow).
