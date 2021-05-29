---
title: Androidの設定
description: Androidの設定
contributors:
  - mlynch
  - jcesarmobile
---

# Android を設定する

## `AndroidManifest.xml` の設定

Android アプリは、パーミッションやデバイスの機能などの設定を、 `android/app/src/main/AndroidManifest.xml` にある `AndroidManifest.xml` というファイルで管理しています。

> `AndroidManifest.xml`は、`android/app/src/main/res/values`ディレクトリ内の`styles.xml`や`strings.xml`などの追加ファイルを、`@style`や`@string`を介して参照することができます。[Android リソースについてもっと読む](https://developer.android.com/guide/topics/resources/available-resources)。

この記事では、アプリに必要な基本的な修正について説明しています。もっと詳しく知りたい方は [Android Manifest docs](https://developer.android.com/guide/topics/manifest/manifest-intro.html)をお読みください。

## パッケージ ID の変更

アプリのパッケージ ID（Android では**アプリケーション ID**）を変更するには、`android/app/build.gradle`の先頭にある`applicationId`を編集します。

```diff-groovy
defaultConfig {
-       applicationId "com.capacitorjs.app"
+       applicationId "com.mycompany.myapp"
```

## App Name の変更

アプリ名を変更するには、`strings.xml`の`app_name` の値を変更します:

```xml
<string name="app_name">MyApp</string>
```

特にアプリが単一のアクティビティを持っている場合は、アクティビティ名を一致させるために変更することは意味があるかもしれません:

```xml
<string name="title_activity_main">MyApp</string>
```

## ディープリンク（別名：Android アプリリンク）

> Deep Links の詳しいガイドは [こちら](/docs/guides/deep-links) をご覧ください。

Android App Links で Deeplinks を有効にするには、公式 Android ガイドの [Adding Android App Links](https://developer.android.com/studio/write/app-link-indexing) を参照してください。Android Studio には、App Links を設定するための便利なウィザードが付属しています。

設定が完了すると、[App API の getLaunchUrl](/docs/apis/app#method-getLaunchUrl-0) はアプリが起動された URL を提供し、[appUrlOpen イベント](/docs/apis/app#method-addListener-1) はアプリが新しい App Link ディープリンクを受信すると起動します。

## URL Schemes

アプリは起動時にカスタム URL に応答することができるため、ディープリンクやアプリの操作を処理することができます。

URL を変更するには、`strings.xml`のこの行を検索します。これを bundle/app id に設定することをお勧めします。

```xml
<string name="custom_url_scheme">com.capacitorjs.myapp</string>
```

この例では、`com.cacitorjs.myapp://`というスキームの URL に反応します。

アプリの起動に使用したカスタム URL を取得するには、この上の Deeplinks セクションを参照してください。

## 権限の設定

In Android, permissions your app will need are defined in `AndroidManifest.xml` inside of the `<manifest>` tag, generally at the bottom of the file.

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

一般的には、選択したプラグインがパーミッションの設定を求めてきます。このファイルに追加してください。
