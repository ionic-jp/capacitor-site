---
title: CordovaからCapacitorへのマイグレーション
description: CordovaからCapacitorへのマイグレーション
contributors:
  - dotNetkow
---

# Web アプリの Cordova から Capacitor へのマイグレーション

Cordova を使用して Web アプリケーションを完全に Capacitor に移行するには、いくつかの手順が必要です。

> Note これらの変更を適用する場合は、別のコードブランチで作業することをお勧めします。

## Capacitor を追加する

まず、プロジェクトをターミナルで開き、[Web アプリ](/docs/getting-started) か [Ionic アプリ](/docs/getting-started/with-ionic) の方法で Capacitor を追加します。

次に、`config.xml`を開いて、widget エレメントにある`id`を見つけます。例えば、 `io.ionic.myapp` です。

```xml
<widget id="io.ionic.myapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

またあなたのアプリの `Name` を見つけます:

```xml
<name>MyApp</name>
```

Capacitor のインストールの時に、あなたのアプリの情報を入力します:

```bash
npx cap init [appName] [appId]
```

例えば、これは `npx cap init MyApp io.ionic.myapp` のようになります。これらの値は新しく作成される `capacitor.config.json` に反映されます。

### アプリをビルドする

Native プラットフォームを追加する前に、Web プロジェクトを少なくとも 1 回構築する必要があります。

これにより、Capacitor が、`capacitor.config.json`の`webDir`において使用するように[自動的に設定された](/docs/basics/configuring-your-app/)www フォルダーが実際に存在するようになります。

### Platforms の追加

Capacitor の Native プラットフォームは、その最上位フォルダにあります。Cordova の場合は、`platforms/ios` もしくは `platforms/android` でした。

```bash
npx cap add ios
npx cap add android
```

プロジェクトのルートにある android フォルダと ios フォルダの両方が作成されます。これらは完全に独立した Native プロジェクトの成果物であり、アプリの一部と見なす必要があります（つまり、それらをソース管理にチェックインしたり、独自の IDE で編集したりするなど）。さらに、以前に `npm install`（` package.json`の `dependencies`の下にあります）でプロジェクトに追加された Cordova プラグインは、Capacitor によってそれぞれの新しい Native プロジェクトに自動的にインストールされます（[incompatible ones](/docs/cordova/known-incompatible-plugins)は除きます）：

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
$ npm install -g cordova-res
```

次に次のコマンドで画像を生成して Native プロジェクトにコピーしてください:

```bash
$ cordova-res ios --skip-config --copy
$ cordova-res android --skip-config --copy
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
npx cap sync [android | ios]
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

```ts
const config: CapacitorConfig = {
  cordova: {
    preferences: {
      DisableDeploy: 'false',
      CameraUsesGeolocation: 'true',
    },
  },
};
```

## Additional Config.xml Fields

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

これは、Capacitor の旅の始まりにすぎません。より学ぶには、Capacitor プロジェクトでの [using Cordova plugins](/docs/cordova/using-cordova-plugins)か、より詳しくは [development workflow](/docs/basics/workflow) をご覧ください。
