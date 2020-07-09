---
title: Androidの設定
description: Androidの設定
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

> Deep Linksの詳しいガイドは [こちら](/docs/guides/deep-links) をご覧ください。

Android App LinksでDeeplinksを有効にするには、公式Androidガイドの [Adding Android App Links](https://developer.android.com/studio/write/app-link-indexing)を参照してください。Android Studioには、App Linksを設定するための便利なウィザードが付属しています。

設定が完了すると、[App APIのgetLaunchUrl](/docs/apis/app#method-getLaunchUrl-0) はアプリが起動されたURLを提供し、[appUrlOpenイベント](/docs/apis/app#method-addListener-1) はアプリが新しいApp Linkディープリンクを受信すると起動します。

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
