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

## Splash Screens and Icons

If you've previously created icon and splash screen images, they can be found in the top-level `resources` folder of your project. With those images in place, you can use the `cordova-res` tool to generate icons and splash screens for Capacitor-based iOS and Android projects.

First, install `cordova-res`:

```bash
npm install -g cordova-res
```

Next, run the following to regenerate the images and copy them into the native projects:

```bash
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```

[Complete details here](https://github.com/ionic-team/cordova-res#capacitor).

## Migrate Plugins

Begin by auditing your existing Cordova plugins - it's possible that you may be able to remove ones that are no longer needed.

Next, review all of Capacitor's [official plugins](/docs/apis) as well as [community plugins](/docs/plugins/community). You may be able to switch to the Capacitor-equivalent Cordova plugin.

Some plugins may not match functionality entirely, but based on the features you need that may not matter.

Note that any plugins that are [incompatible or cause build issues](/docs/plugins/cordova#known-incompatible-plugins) are automatically skipped.

### Remove Cordova Plugin

After replacing a Cordova plugin with a Capacitor one (or simply removing it entirely), uninstall the plugin then run the `sync` command to remove the plugin code from a native project:

```bash
npm uninstall cordova-plugin-name
npx cap sync
```

## Set Permissions

By default, the entire initial permissions requested for the latest version of Capacitor are set for you in the default native projects for both iOS and Android. However, you may need to apply additional permissions manually by mapping between `plugin.xml` and required settings on iOS and Android. Consult the [iOS](/docs/ios/configuration) and [Android](/docs/android/configuration) configuration guides for info on how to configure each platform.

## Cordova Plugin preferences

When `npx cap init` is run, Capacitor reads all the preferences in `config.xml` and ports them to the [Capacitor configuration file](/docs/config). You can manually add more preferences to the `cordova.preferences` object.

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
<author email="email@test.com" href="http://ionicframework.com/">Ionic Framework Team</author>
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
