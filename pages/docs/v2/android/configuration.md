---
title: Androidの設定
description: Androidの設定
contributors:
  - mlynch
  - jcesarmobile
canonicalUrl: https://capacitorjs.com/docs/android/configuration
---

# Android の設定

Android アプリは、 `AndroidManifest.xml` を変更することで、権限、デバイス機能、その他の設定を管理します。

このファイルは、 `res/values/` といった他のファイルの値を参照しており、別々に更新することを容易にするため、これらには `styles.xml` と `strings.xml` が含まれます。

この記事では、アプリに加える必要がある基本的な変更について説明します。[Android Manifest](https://developer.android.com/guide/topics/manifest/manifest-intro.html)ドキュメントを読んで、もっとたくさん学ぶことができます。

## App ID を変更する

アプリのバンドル/アプリ ID を変更するには、 `android/app/build.gradle` の `applicationId` を更新します:

```groovy
applicationId "com.getcapacitor.myapp"
```

## App Name の変更

アプリ名を変更するには、`strings.xml`の`app_name` の値を変更します:

```xml
<string name="app_name">MyApp</string>
```

また、アクティビティを 1 つだけにすることを予定しているアプリケーション（アプリケーションを実行している主な Web アクティビティ）の場合は、アクティビティ名をアプリケーションと一致するように設定することをお勧めします:

```xml
<string name="title_activity_main">MyApp</string>
```

## Deeplinks (aka Android App Links)

> Deep Links の詳しいガイドは [こちら](/docs/guides/deep-links) をご覧ください。

Android App Links で Deeplinks を有効にするには、公式 Android ガイドの [Adding Android App Links](https://developer.android.com/studio/write/app-link-indexing)を参照してください。Android Studio には、App Links を設定するための便利なウィザードが付属しています。

設定が完了すると、[App API の getLaunchUrl](/docs/apis/app#method-getLaunchUrl-0) はアプリが起動された URL を提供し、[appUrlOpen イベント](/docs/apis/app#method-addListener-1) はアプリが新しい App Link ディープリンクを受信すると起動します。

## カスタム URL を変更する

アプリは起動時にカスタム URL に応答することができるため、ディープリンクやアプリの操作を処理することができます。

URL を変更するには、`strings.xml`のこの行を検索します。これを bundle/app id に設定することをお勧めします。

```xml
<string name="custom_url_scheme">com.getcapacitor.myapp</string>
```

この例では、アプリは`com.getcapacitor.myapp://`スキーマ URL に応答します。

アプリの起動に使用したカスタム URL を取得するには、この上の Deeplinks セクションを参照してください。

## 権限の設定

Android では、アプリに必要な権限は通常、`AndroidManifest.xml`の`<manifest>`の
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

## デフォルト Permissions

デフォルトでは、標準プラグインを使用した最新バージョンの Capacitor に要求される全体の初期許可は、android-template の [AndroidManifest.xml](https://github.com/ionic-team/capacitor/blob/main/android-template/app/src/main/AndroidManifest.xml) に書かれています。
