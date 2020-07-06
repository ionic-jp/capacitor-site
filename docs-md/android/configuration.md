---
title: Configuring Android
description: Configuring Android
url: /docs/android/configuration
contributors:
  - mlynch
  - jcesarmobile
---

# Androidの設定

<p class="intro">Androidアプリは、<code>AndroidManifest.xml</code>を変更することで、権限、デバイス機能、その他の設定を管理します。</p>

<p class="intro">このファイルは、<code>res/values/</code>といった他のファイルの値を参照しており、別々に更新することを容易にするため、これらには <code>styles.xml</code> と <code>strings.xml</code> が含まれます。</p>

<p class="intro">この記事では、アプリに加える必要がある基本的な変更について説明します。<a href="https://developer.android.com/guide/topics/manifest/manifest-intro.html" target="_blank">Android Manifest</a>ドキュメントを読んで、もっとたくさん学ぶことができます。</p>

## App IDを変更する

アプリのバンドル/アプリIDを変更するには、`AndroidManifest.xml`の一番上の`<manifest>`を更新します:

```xml
<manifest package="com.getcapacitor.myapp">
```

## App Nameの変更

アプリ名を変更するには、`strings.xml`の`app_name` の値を変更します:

```xml
<string name="app_name">MyApp</string>
```

また、アクティビティを1つだけにすることを予定しているアプリケーション（アプリケーションを実行している主なWebアクティビティ）の場合は、アクティビティ名をアプリケーションと一致するように設定することをお勧めします:

```xml
<string name="title_activity_main">MyApp</string>
```

## Deeplinks (aka Android App Links)

> For a complete Deep Links guide, [see here](/docs/guides/deep-links).

To enable deeplinking through Android App Links, follow the official Android guide on [Adding Android App Links](https://developer.android.com/studio/write/app-link-indexing). Android Studio comes with a handy wizard for configuring App Links.

Once configured, the [getLaunchUrl in the App API](/docs/apis/app#method-getLaunchUrl-0) will provide any URL the app was launched with, and the [appUrlOpen event](/docs/apis/app#method-addListener-1) will fire any time the app receives a new App Link deeplink.

## カスタムURLを変更する

アプリは起動時にカスタムURLに応答することができるため、ディープリンクやアプリの操作を処理することができます。

URLを変更するには、`strings.xml`のこの行を検索します。これをbundle/app idに設定することをお勧めします。

```xml
<string name="custom_url_scheme">com.getcapacitor.myapp</string>
```

この例では、アプリは`com.getcapacitor.myapp://`スキーマURLに応答します。

アプリの起動に使用したカスタムURLを取得するには、この上の Deeplinks セクションを参照してください。

## 権限の設定

Androidでは、アプリに必要な権限は通常、`AndroidManifest.xml`の`<manifest>`の
下部に定義されています。

たとえば、ネットワークのアクセス許可を追加すると次のようになります:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
package="com.getcapacitor.myapp">
    <activity>
      <!-- other stuff -->
    </activity>

    <!-- More stuff -->

    <!-- Your permissions -->

    <!-- Network API -->
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
</manifest>
```

一般的に、あなたが使用することを選択したプラグインはあなたに許可を設定するように求めます。このファイルに追加してください。

## デフォルトPermissions

デフォルトでは、標準プラグインを使用した最新バージョンのCapacitorに要求される全体の初期許可は、android-templateの [AndroidManifest.xml](https://github.com/ionic-team/capacitor/blob/master/android-template/app/src/main/AndroidManifest.xml) に書かれています。
