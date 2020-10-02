---
title: CordovaからCapacitorへのマイグレーション
description: CordovaからCapacitorへのマイグレーション
url: /docs/cordova/migrating-from-cordova-to-capacitor
contributors:
  - dotNetkow
---

# WebアプリのCordovaからCapacitorへのマイグレーション

<p class="intro">Cordovaを使用してWebアプリケーションを完全にCapacitorに移行するには、いくつかの手順が必要です。</p>

<blockquote>
これらの変更を適用する場合は、別のコードブランチで作業することをお勧めします。
</blockquote>

## Capacitorを追加する

まず、プロジェクトをターミナルで開き、[Webアプリ](/docs/getting-started) か [Ionicアプリ](/docs/getting-started/with-ionic) の方法でCapacitorを追加します。

次に、`config.xml`を開いて、widgetエレメントにある`id`を見つけます。例えば、 `io.ionic.myapp` です。

```xml
<widget id="io.ionic.myapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

またあなたのアプリの `Name` を見つけます:

```xml
<name>MyApp</name>
```

Capacitorのインストールの時に、あなたのアプリの情報を入力します:

```bash
npx cap init [appName] [appId]
```

例えば、これは `npx cap init MyApp io.ionic.myapp` のようになります。これらの値は新しく作成される `capacitor.config.json` に反映されます。

### アプリをビルドする
Nativeプラットフォームを追加する前に、Webプロジェクトを少なくとも1回構築する必要があります。

これにより、Capacitorが、`capacitor.config.json`の`webDir`において使用するように[自動的に設定された](/docs/basics/configuring-your-app/)wwwフォルダーが実際に存在するようになります。

### Platformsの追加

CapacitorのNativeプラットフォームは、その最上位フォルダにあります。Cordovaの場合は、`platforms/ios` もしくは `platforms/android` でした。

```bash
npx cap add ios
npx cap add android
```

プロジェクトのルートにあるandroidフォルダとiosフォルダの両方が作成されます。これらは完全に独立したNativeプロジェクトの成果物であり、アプリの一部と見なす必要があります（つまり、それらをソース管理にチェックインしたり、独自のIDEで編集したりするなど）。さらに、以前に `npm install`（` package.json`の `dependencies`の下にあります）でプロジェクトに追加されたCordovaプラグインは、Capacitorによってそれぞれの新しいNativeプロジェクトに自動的にインストールされます（[incompatible ones](/docs/cordova/known-incompatible-plugins)は除きます）：

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

アイコンとスプラッシュ画像を以前に作成したことがある場合は、プロジェクトの最上位レベルの`resources`フォルダにあります。[このガイドに従って](https://www.joshmorony.com/adding-icons-splash-screens-launch-images-to-capacitor-projects/)に従って、これらを各Nativeプロジェクトに移動します。

まず、 `cordova-res` をインストールください:

```bash
$ npm install -g cordova-res
```

次に次のコマンドで画像を生成してNativeプロジェクトにコピーしてください:

```bash
$ cordova-res ios --skip-config --copy
$ cordova-res android --skip-config --copy
```

[詳細はこちらをご覧ください](https://github.com/ionic-team/cordova-res#capacitor).

## プラグインのマイグレート

まず、既存のCordovaプラグインを監査します - 不要になったプラグインを削除できる場合があります。

次に、Capacitorの [core plugins](/docs/apis) と [community plugins](/docs/community) をすべて確認します。Cordovaと同等のCapacitorプラグインに切り替えることができます。

一部のプラグインは機能は完全には一致しませんが、必要な機能は実装されている場合があります。

Note: [既知の非互換プラグイン](/docs/cordova/known-incompatible-plugins) は自動的にスキップされます

### Cordova Pluginの削除

CordovaプラグインをCapacitorプラグインに置き換えたあと(もしくは完全に削除することもできます)、プラグインをアンインストールし、 `sync` コマンドを実行してNativeプロジェクトからプラグインコードを削除します。

```bash
npm uninstall cordova-plugin-name
npx cap sync [android | ios]
```

## Permissionsの設定

デフォルトでは、最新バージョンのCapacitorに要求された初期設定の権限が、iOSとAndroidの両方のデフォルトNativeプロジェクトに設定されます。ただし、 `plugin.xml` でマッピングすることによって、追加のアクセス権を手動で適用する必要がある場合があります。この設定は、iOSとAndroidでは必須です。各プラットフォームの設定方法については、 [iOS](/docs/ios/configuration) および [Android](/docs/android/configuration) の設定ガイドを参照してください。

## Cordova Plugin preferences

`npx cap init` が実行されると、コンデンサは `config.xml` のすべてのプリファレンスを読み込みます。これらを `capacitor.config.json` に移植します。手動で `cordova.preferences` に環境設定を追加することもできます。

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


## Config.xml フィールドの追加

あなたは `config.xml` の他の要素がCapacitorアプリではどのように動作するか気になるかもしれません。

Author要素は`package.json` で設定できます。ただし、Capacitorやアプリケーション内では使用されません:

```xml
<author email="email@test.com" href="https://ionicframework.com/">Ionic Framework Team</author>
```

`allow-intent`値のほとんどは使用されませんが、Capacitorに[構成可能な代替手段](/docs/basics/configuring-your-app/)の設定があります。

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

すべての`config.xml`の要素をカバーするのは不可能です。しかし、"CapacitorでXを設定するにはどうやったらいい？"に関する質問のほとんどは、オンラインで答えを探すときには「[プラットフォーム](iOS/Android)でXを設定するには?」と考えるべきです。

## Scheme の設定

CordovaでIonicを使用すると、アプリはデフォルトで `cordova-plugin-ionic-webview` を使用し、iOSではコンテンツの提供に `ionic://` schemeを使用します。CapacitorアプリはiOSのデフォルトスキームとして `capacitor://` を使用しています。これはLocalStorageのようなオリジンバインドされたWeb APIを使用すると、起点が異なるためデータが失われることを意味します。これは、コンテンツの提供に使用するスキームを変更することで修正できます。

```json
{
  "server": {
    "iosScheme": "ionic"
  }
}
```

## Cordova の削除

すべてのマイグレーション変更が適用され、アプリケーションが正常に動作することをテストしたら、Cordovaをプロジェクトから削除できます。`config.xml`を削除します。`platforms` フォルダと `plugins` フォルダも同様です。CordovaはCapacitorと一緒に動作するので、技術的に取り外す必要はないことに注意してください。実際、Cordovaプラグインの使用を継続する予定がある場合、または将来的に使用する可能性がある場合は、Cordovaアセットをそのまま使用できます。

## 次のステップ

これは、Capacitorの旅の始まりにすぎません。より学ぶには、Capacitorプロジェクトでの [using Cordova plugins](/docs/cordova/using-cordova-plugins)か、より詳しくは [development workflow](/docs/basics/workflow) をご覧ください。
