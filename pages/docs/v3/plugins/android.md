---
title: Capacitor Androidプラグインガイド
description: Capacitor Androidプラグインガイド
contributors:
  - mlynch
  - jcesarmobile
---

# Capacitor Android プラグインガイド

Android 用の Capacitor プラグインを構築するには、Android SDK とのインターフェイスとして Java または [Kotlin](https://developer.android.com/kotlin/overview) を記述する必要があります。

## はじめかた

まず、プラグインガイドの [はじめかた](/docs/plugins) にあるように、プラグインを生成してください。

次に、Android Studio で `echo/android/` を開きます。このファイルは、プラグインを作成するときに使用したプラグイン ID とプラグインクラス名によって変化します。

例えば、ID が `com.domain.echo` で Plugin Class Name が `Echo` のプラグインの場合、`.java` ファイルは `android/src/main/java/com/domain/echo/EchoPlugin.java` に存在することが確認できます。

## Kotlin を使う

Capacitor はデフォルトで Java を使用しますが、お好みで Kotlin を代わりに使用することもできます。

プラグインを生成したら、Android Studio で Java プラグインクラスを右クリックし、メニューから「Convert Java file to Kotlin file」オプションを選択します。Android Studio は、Kotlin をサポートするためにプロジェクトを設定する手順を説明します。これが完了したら、Java クラスを再度右クリックし、変換オプションを再選択して Kotlin クラスに変換します。

## プラグインの基本

Android 用 Capacitor プラグインは `com.getcapacitor.Plugin` を継承したシンプルな Java クラスで、 `@CapacitorPlugin()` アノテーションを持っています。
また、JavaScript から呼び出し可能ないくつかのメソッドを `@PluginMethod()` アノテーションで持っています。

プラグインが生成されたら、生成ツールで選択したプラグインクラス名のファイルを開いて、プラグインの編集を開始することができます。

### 簡単なサンプル

生成された例では、単純な echo プラグインが `echo` 関数を持ち、単に与えられた値を返します。

この例では、Plugin Call,からデータを受け取り、呼び出し元にデータを返すという、Capacitor プラグインの中核となるコンポーネントを示しています。

`EchoPlugin.java`

```java
package android.plugin.test;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Echo")
public class EchoPlugin extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }
}
```

### Call Data へのアクセス

各プラグインメソッドは、クライアントからプラグインメソッド呼び出しの全ての情報を含む `com.getcapacitor.PluginCall` のインスタンスを受け取ります。

クライアントは、number、text、booleans、オブジェクト、配列など、JSON でシリアライズ可能な任意のデータを送信することができます。このデータ には、コールインスタンスの `options` フィールド、または `getString` や `getObject` などの便利なメソッドでアクセスすることができます。

例えば、メソッドに渡されるデータを取得する方法は以下の通りだとします:

```java
@PluginMethod()
public void storeContact(PluginCall call) {
  String name = call.getString("yourName", "default name");
  JSObject address = call.getObject("address", new JSObject());
  boolean isAwesome = call.getBoolean("isAwesome", false);

  if (!call.getData().has("id")) {
    call.reject("Must provide an id");
    return;
  }
  // ...

  call.resolve();
}
```

`getData` の `has` メソッドを使用してキーをチェックする方法など、 `PluginCall` インスタンスでデータにアクセスするさまざまな方法に注目してください。

### データを返す

プラグインの呼び出しは、成功するか失敗するかのどちらかです。プラグイン呼び出しは JavaScript のプロミスからメソッド名を借用しています。成功を示すには `resolve()` を呼び出し（オプションでデータを返す）、失敗をエラーメッセージで示すには `reject()` を使用します。

プラグインコールの `resolve()` メソッドは `JSObject` を受け取り、JSON でシリアライズ可能なデータ型をサポートします。以下は、データをクライアントに返す例です：

```java
JSObject ret = new JSObject();
ret.put("added", true);
JSObject info = new JSObject();
info.put("id", "unique-id-1234");
ret.put("info", info);
call.resolve(ret);
```

呼び出しを失敗、または拒否するには、 `call.reject` を使用します。エラー文字列と、オプションでエラーコードと `Exception` インスタンスを渡します。

```java
call.reject(exception.getLocalizedMessage(), null, exception);
```

### プラグイン呼び出しの永続化

ほとんどの場合、プラグインメソッドはタスクを実行するために呼び出され、すぐに終了することができます。しかし、後でアクセスできるようにプラグインの呼び出しを有効にしておく必要がある場合もあります。例えば、位置情報データのライブストリーミングのようなデータを定期的に返したり、非同期タスクを実行したりする場合です。

プラグイン呼び出しを持続させる方法の詳細については、[プラグイン呼び出しの保存に関するこのガイド](/docs/v3/core-apis/saving-calls)を参照してください。

### プラグイン読み込み時にコードを実行する

時には、プラグインが最初にロードされるときに、いくつかのコードを実行する必要があるかもしれません。

これを行うには、`load()` メソッドの実装を用意します：

```java
@Override
public void load() {
}
```

## Permissions

もしあなたのプラグインが Android 上でエンドユーザーからのパーミッションを必要とする機能を持つ場合、パーミッション・パターンを実装する必要があります。

このセクションに進む前に、パーミッションのエイリアスとステータスのインターフェイスを設定したことを確認してください。まだの場合は、 [Web ガイドのパーミッションのセクション](/docs/plugins/web#permissions) を参照してください。

### アノテーションの変更

> まだ `@NativePlugin` をお使いですか？ [アップグレードガイド](/docs/updating/plugins/3-0#use-the-new-capacitorplugin-annotation) を参照して、`@CapacitorPlugin` に切り替えてください。

```diff-java
 @CapacitorPlugin(
     name = "FooBar",
+    permissions = {
+        @Permission(
+            alias = "camera",
+            strings = { Manifest.permission.CAMERA }
+        ),
+        @Permission(
+            alias = "storage",
+            strings = {
+                Manifest.permission.READ_EXTERNAL_STORAGE,
+                Manifest.permission.WRITE_EXTERNAL_STORAGE
+            }
+        )
+    }
 )
 public class FooBarPlugin extends Plugin {
     ...
```

`CapacitorPlugin` アノテーションに `permissions` 属性を追加します。このアノテーションは、1 つまたは複数の `@Permission` アノテーションの配列です。各 `@Permission` アノテーションには、0 個以上の Android パーミッション `strings` と、目的を説明する短い `alias` が含まれます。

もし、プラグインが Android 以外のプラットフォームのパーミッションを必要とする場合は、同じエイリアスを持つパーミッションを定義しますが、`strings`は空の配列にします。この場合、パーミッションのリクエストの結果は、自動的にそのパーミッションのエイリアスに対して 'granted' として返されます。

```java
@Permission(
    alias = "notifications",
    strings = {}
)
```

### パーミッションリクエストの実装

`CapacitorPlugin` アノテーションでパーミッションを定義することで、 `checkPermissions()` と `requestPermissions()` メソッドが完全に機能するようになるはずです。アプリ開発者は、必要に応じて手動でパーミッションを要求できるようになります。しかし、プラグインの機能を自動的なパーミッション要求でラップすることが、ベストプラクティスと考えています。

#### パーミッションコールバック

単一の `PluginCall` パラメータを持つ void メソッドを作成し、それを `@PermissionCallback` でアノテートして、許可要求の呼び出しでメソッドの名前を文字列として渡します。コールバックはパーミッションリクエストが完了した後に実行されます。

```java
@PluginMethod()
public void takePhoto(PluginCall call) {
  if (getPermissionState("camera") != PermissionState.GRANTED) {
    requestPermissionForAlias("camera", call, "cameraPermsCallback");
  } else {
    loadCamera(call);
  }
}

@PermissionCallback
private void cameraPermsCallback(PluginCall call) {
  if (getPermissionState("camera") == PermissionState.GRANTED) {
    loadCamera(call);
  } else {
    call.reject("Permission is required to take a picture");
  }
}
```

#### パーミッションリクエストの開始

パーミッションのリクエストは、リクエスト、ヘルパー、メソッドのいずれかをコールすることで開始されます。

一つのエイリアスのために `requestPermissionForAlias` を使用することができます。複数のエイリアスを `requestPermissionForAliases` に指定することができる。プラグインアノテーションで定義されているすべてのパーミッションを要求する場合は、 `requestAllPermissions` を使用する。

```diff-java
 @PluginMethod()
 public void takePhoto(PluginCall call) {
   if (!hasRequiredPermissions()) {
+    requestAllPermissions(call, "cameraPermsCallback");
   } else {
     loadCamera(call);
   }
 }

 @PermissionCallback
 private void cameraPermsCallback(PluginCall call) {
   ...
 }
```

### マニフェスト

プラグインの `AndroidManifest.xml` に、必要な [install-time](https://developer.android.com/guide/topics/permissions/overview#install-time) パーミッションを記述します。ランタイムパーミッション(ユーザーに承諾を求めるパーミッション)は追加しないでください。これらはアプリ開発者が Capacitor アプリのマニフェストに追加する必要があります。プラグインが、アプリに追加されるべき必要な実行時アクセス許可を文書化していることを確認してください。

```diff-xml
  <manifest xmlns:android="http://schemas.android.com/apk/res/android"
      package="com.mycompany.plugins.network">
+     <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
  </manifest>
```

## ハンドリング

### Unavailable

このエラーは、その機能が今すぐには使用できないことを示すために投げられることがあります。通常、より新しい Android API のバージョンを必要とするためです。

```java
@PluginMethod
public void methodThatUsesNewAndroidAPI(PluginCall call) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        // TODO implementation
    } else {
        call.unavailable("Not available on Android API 25 or earlier.");
    }
}
```

> 古い API のエクスペリエンスを可能な限り適切に低下させることをお勧めします。 `unavailable` は控えめに使いましょう。

### Unimplemented

このエラーは、あるメソッドが iOS 用に実装できないことを示すために使用します。

```java
@PluginMethod
public void methodThatRequiresIOS(PluginCall call) {
    call.unimplemented("Not implemented on Android.");
}
```

## ネイティブ画面を表示する

Capacitor 画面の上に Native Screen を表示するために、 [Android の Intents](https://developer.android.com/guide/components/intents-filters) を使用します。インテントを使用すると、自分のアプリや他のアプリからアクティビティを開始することができます。 [Common Intents](https://developer.android.com/guide/components/intents-common) をご覧ください。

### 結果なしのインテント

ほとんどの場合、ネイティブのアクティビティを表示したいだけです。
この場合、 [関連するアクション](https://developer.android.com/guide/components/intents-common) をトリガーすればよいのです。

```java
Intent intent = new Intent(Intent.ACTION_VIEW);
getActivity().startActivity(intent);
```

### 結果付きのインテント

時には、Intent を起動したときに、何らかの結果が返ってくることを期待することがあります。そのような場合は、`startActivityForResult`を使いたいところです。

起動されたアクティビティの結果を処理するコールバックメソッドを `PluginCall` と `ActivityResult` パラメータで作成し、`@ActivityCallback` でアノテーションしてください。このメソッドの名前を `startActivityForResult` に渡すと、起動されたアクティビティが終了したときに実行されます。

```java
@CapacitorPlugin()
class ImagePicker extends Plugin {

  @PluginMethod()
  public void pickImage(PluginCall call) {
    Intent intent = new Intent(Intent.ACTION_PICK);
    intent.setType("image/*");

    // Start the Activity for result using the name of the callback method
    startActivityForResult(call, intent, "pickImageResult");
  }

  @ActivityCallback
  private void pickImageResult(PluginCall call, ActivityResult result) {
    if (call == null) {
      return;
    }

    // Do something with the result data
  }
}
```

## プラグインイベント

プラグインは独自のイベントを発生させることができ、以下のようにプラグインオブジェクトにリスナーを付けることでそれを聞くことができます。

```typescript
import { MyPlugin } from 'my-plugin';

MyPlugin.addListener('myPluginEvent', (info: any) => {
  console.log('myPluginEvent was fired');
});
```

Java プラグインクラスからイベントを発信する:

```java
JSObject ret = new JSObject();
ret.put("value", "some value");
notifyListeners("myPluginEvent", ret);
```

プラグインオブジェクトからリスナーを削除する場合:

```typescript
import { MyPlugin } from 'my-plugin';

const myPluginEventListener = await MyPlugin.addListener(
  'myPluginEvent',
  (info: any) => {
    console.log('myPluginEvent was fired');
  },
);

myPluginEventListener.remove();
```

> `window` のグローバルイベントをトリガーすることも可能です。詳しくは [`triggerJSEvent`](/docs/core-apis/android#triggerjsevent) のドキュメントを参照してください。

## ナビゲーションのオーバーライド

Capacitor プラグインはウェブビューのナビゲーションを上書きすることができます。そのために、プラグインは `public Boolean shouldOverrideLoad(Uri url)` メソッドをオーバーライドすることができます。
`true` を返すと、WebView は URL の読み込みを中断します。
`false` を返すと、WebView は URL の読み込みを継続します。
`null` を返すと、デフォルトの Capacitor ポリシーに従います。
