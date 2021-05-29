---
title: CordovaからCapacitorへのマイグレーション
description: CordovaからCapacitorへのマイグレーション
contributors:
  - dotNetkow
---

# Web アプリの Cordova から Capacitor へのマイグレーション

Cordova を使用して Web アプリケーションを完全に Capacitor に移行するには、いくつかの手順が必要です。

> これらの変更を適用する際には、別のコードブランチで作業することをお勧めします。

## Capacitor を追加する

ターミナルでプロジェクトを開き、 [ウェブアプリへの Capacitor の追加](/docs/getting-started#adding-capacitor-to-your-app) 、または [Ionic アプリへの Capacitor の追加](/docs/getting-started/with-ionic#existing-ionic-project) のガイドに従います。

アプリを Capacitor で初期化します。アプリの初期化に必要な情報は、Cordova の `config.xml` ファイルに記載されています:

- アプリ名は `<name>` 要素の中にあります
- バンドル ID は、ルートの `<widget>` 要素の `id` 属性で確認できます

```bash
npx cap init
```

### ウェブアプリの構築

ネイティブプラットフォームを追加する前に、少なくとも一度はウェブ・プロジェクトを構築する必要があります。

```bash
npm run build
```

これにより、Capacitor の設定ファイルでは、Capacitor が`webDir`として使用する`www`フォルダが [自動的に設定](/docs/basics/configuring-your-app) されていることが確認できます。

### Platforms の追加

Capacitor の Native プラットフォームは、その最上位フォルダにあります。Cordova の場合は、`platforms/ios` もしくは `platforms/android` でした。

```bash
npx cap add ios
npx cap add android
```

プロジェクトのルートに android と ios の両フォルダが作成されます。これらは全く別のネイティブプロジェクトの成果物であり、アプリの一部と考えるべきものです（つまり、ソースコントロールにチェックを入れたり、独自の IDE で編集したりするなど）。さらに、`package.json` の `dependencies` にある Cordova プラグインは、Capacitor によって自動的に新しいネイティブプロジェクトにインストールされます（ただし、[incompatible ones](/docs/plugins/cordova#known-incompatible-plugins)は除きます）。

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

## スプラッシュスクリーンとアイコン

アイコンとスプラッシュスクリーンのイメージは、プロジェクトのトップレベルの `resources` フォルダに保存されています。これらの画像があれば、`cordova-res`ツールを使って、Capacitor ベースの iOS や Android プロジェクトのアイコンやスプラッシュスクリーンを生成することができます。

まず、`cordova-res`をインストールします:

```bash
npm install -g cordova-res
```

次に、以下を実行してイメージを再生成し、ネイティブプロジェクトにコピーします:

```bash
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```

[詳細はこちら](https://github.com/ionic-team/cordova-res#capacitor).

## プラグインの移行

まず、既存の Cordova プラグインを確認します。不要なプラグインを削除できる可能性があります。

次に、Capacitor の [official plugins](/docs/apis) と [community plugins](/docs/plugins/community) のすべてを確認します。その結果、Capacitor と同等の Cordova プラグインに変更できる可能性があります。

プラグインによっては機能が完全に一致しないものもありますが、必要な機能を考えれば問題ないでしょう。

なお、 [incompatible or cause build issues](/docs/plugins/cordova#known-incompatible-plugins) となっているプラグインは自動的にスキップされます。

### Cordova プラグインの削除

Cordova プラグインを Capacitor プラグインに置き換えた(あるいは完全に削除した)後、プラグインをアンインストールし、`sync`コマンドを実行してネイティブプロジェクトからプラグインコードを削除します:

```bash
npm uninstall cordova-plugin-name
npx cap sync
```

## パーミッションの設定

デフォルトでは、Capacitor の最新バージョンに要求されるすべての初期パーミッションが、iOS と Android の両方のデフォルトのネイティブプロジェクトに設定されています。しかし、追加のパーミッションを手動で適用する必要がある場合は、`plugin.xml`と iOS や Android の必要な設定をマッピングする必要があります。 [iOS](/docs/ios/configuration) と [Android](/docs/android/configuration) の設定ガイドを参照してください。

## Cordova プラグインの環境設定

コンデンサは、`npx cap init` の実行時に、 `config.xml` に記述されている全てのプリファレンスを読み込んで、 [Caoacutir 設定ファイル](/docs/config) に移植します。また、`cordova.preferences`オブジェクトに手動でプリファレンスを追加することもできます。

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

## `config.xml` の Additional Fields

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

これは、あなたの Capacitor の旅の始まりに過ぎません。Capacitor プロジェクトでの [Cordova プラグインの使用方法](/docs/plugins/cordova) や、 [Capacitor の開発ワークフロー](/docs/basics/workflow)の詳細もご覧ください。
