---
title: Androidの設定
description: Androidの設定
contributors:
  - mlynch
  - jcesarmobile
---

# Configuring Android

## Configuring `AndroidManifest.xml`

Android apps manage permissions, device features, and other settings in the `AndroidManifest.xml` file, which is located at `android/app/src/main/AndroidManifest.xml`.

> `AndroidManifest.xml` may reference additional files such as `styles.xml` and `strings.xml` within the `android/app/src/main/res/values` directory via `@style` and `@string`. [Read more about Android Resources](https://developer.android.com/guide/topics/resources/available-resources).

This article covers the basic modifications you'll need to make to your app. Read the [Android Manifest docs](https://developer.android.com/guide/topics/manifest/manifest-intro.html) to learn a whole lot more.

## Changing the Package ID

To change your app's Package ID (aka **Application ID** for Android), edit `applicationId` at the top of `android/app/build.gradle`:

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

It may make sense to change the activity name to match, especially if your app has a single activity:

```xml
<string name="title_activity_main">MyApp</string>
```

## Deeplinks (aka Android App Links)

> Deep Links の詳しいガイドは [こちら](/docs/guides/deep-links) をご覧ください。

Android App Links で Deeplinks を有効にするには、公式 Android ガイドの [Adding Android App Links](https://developer.android.com/studio/write/app-link-indexing)を参照してください。Android Studio には、App Links を設定するための便利なウィザードが付属しています。

設定が完了すると、[App API の getLaunchUrl](/docs/apis/app#method-getLaunchUrl-0) はアプリが起動された URL を提供し、[appUrlOpen イベント](/docs/apis/app#method-addListener-1) はアプリが新しい App Link ディープリンクを受信すると起動します。

## URL Schemes

アプリは起動時にカスタム URL に応答することができるため、ディープリンクやアプリの操作を処理することができます。

URL を変更するには、`strings.xml`のこの行を検索します。これを bundle/app id に設定することをお勧めします。

```xml
<string name="custom_url_scheme">com.capacitorjs.myapp</string>
```

In this example, the app will respond to URLs with the `com.capacitorjs.myapp://` scheme.

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

Generally, the plugin you choose to use will ask you to set a permission. Add it in this file.
