---
title: Building a Capacitorプラグイン
description: Building a Capacitorプラグイン - Implementing for Android
contributors:
  - eric-horodyski
---

# Android のための実装

プラグインの開発はほぼ完了しています。残っているのは Android の実装だけです。

## プラグインを Capacitor に登録する

> **前提条件:** 続ける前に <a href="https://capacitorjs.com/docs/android/custom-code" target="_blank">Capacitor Custom Native Android Code documentation</a> のドキュメントをよく理解してください。

Android Studio で `npx cap open android` を実行し、Capacitor アプリケーションの Android プロジェクトを開いてください。 **app** モジュールと **java** フォルダーを展開し、アプリの Java パッケージを右クリックします。コンテキストメニューから **New -> Package** を選択し、**plugins** という名前のサブパッケージを作成します。 **plugins** パッケージを右クリックし、前述のプロセスを繰り返して、**ScreenOrientation**という名前のサブパッケージを作成します。

次に、 **ScreenOrientation** パッケージを右クリックし、コンテキストメニューから **New -> Java File** を選択して、新しい Java ファイルを追加します。このファイルの名前を `ScreenOrientationPlugin.java` とします。また、同様にこの作業を行い、`ScreenOrientation.java`という名前の新しいファイルを作成します。

次のコードを `ScreenOrientationPlugin.java` に貼り付けます:

```java
package io.ionic.cap.plugin.plugins.ScreenOrientation;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ScreenOrientation")
public class ScreenOrientationPlugin extends Plugin {

   @PluginMethod()
   public void orientation(PluginCall call) {
       call.resolve();
   }

   @PluginMethod()
   public void lock(PluginCall call) {
       call.resolve();
   }

   @PluginMethod()
   public void unlock(PluginCall call) {
       call.resolve();
   }
}
```

Java と JavaScript の橋渡しをするために、プロジェクトの MainActivity の中にプラグインクラスを登録します。 `MainActivity.java` を開き、プラグインを登録するための `onCreate()` メソッドを追加してください。

```java
package io.ionic.cap.plugin;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import io.ionic.cap.plugin.plugins.ScreenOrientation.ScreenOrientationPlugin;

public class MainActivity extends BridgeActivity {
   @Override
   public void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       registerPlugin(ScreenOrientationPlugin.class);
   }
}
```

## 現在の画面の向きを取得する

iOS と同様に、まず現在の画面の向きを取得することに取り組みます。 `ScreenOrientation.java` を開いてクラスを設定し、現在の向きを取得するメソッドを書きます。

```java
package io.ionic.cap.plugin.plugins.ScreenOrientation;

import android.view.Surface;
import androidx.appcompat.app.AppCompatActivity;

public class ScreenOrientation {
   private AppCompatActivity activity;

   public ScreenOrientation(AppCompatActivity activity) {
       this.activity = activity;
   }

   public String getCurrentOrientationType() {
       int rotation = activity.getWindowManager().getDefaultDisplay().getRotation();
       return fromRotationToOrientationType(rotation);
   }

   private String fromRotationToOrientationType(int rotation) {
       switch (rotation) {
           case Surface.ROTATION_90:
               return "landscape-primary";
           case Surface.ROTATION_180:
               return "portrait-secondary";
           case Surface.ROTATION_270:
               return "landscape-secondary";
           default:
               return "portrait-primary";
       }
   }
}
```

次に、`ScreenOrientationPlugin.java` に `orientation` メソッドを配置して、実装クラスのメソッドを呼び出すようにします:

```java
package io.ionic.cap.plugins.ScreenOrientation;

import com.getcapacitor.JSObject;
/* Remaining imports omitted for brevity */

@CapacitorPlugin(name = "ScreenOrientation")
public class ScreenOrientationPlugin extends Plugin {

   private ScreenOrientation implementation;

   @Override
   public void load() {
       implementation = new ScreenOrientation(getActivity());
   }

   @PluginMethod()
   public void orientation(PluginCall call) {
       JSObject ret = new JSObject();
       String type = implementation.getCurrentOrientationType();
       ret.put("type", type);
       call.resolve(ret);
   }

   /* Remaining code omitted for brevity */
}
```

`load()` メソッドは、Capacitor ブリッジオブジェクトで `ScreenOrientation` クラスのインスタンスを初期化するのに適切な場所です。

Android Studio 内で、実際のデバイスまたは Android エミュレーターでアプリを実行します。Logcat\*\* を開くと、呼び出しがログに記録されているのが確認できるはずです:

```bash
V/Capacitor/Plugin: To native (Capacitorプラグイン): callbackId: 89582874, pluginId: ScreenOrientation, methodName: orientation
```

> **注意:** ログの正確な値は、あなたにとって異なるものになります。この例では、`115962915`はプラグインから呼び出されたメソッドに割り当てられた任意の ID です。

## 画面の向きの変更を検知する

Android はデバイスの回転を実行時の設定変更と見なします。したがって、プラグインが <a href="https://developer.android.com/guide/topics/resources/runtime-changes" target="_blank">設定変更を処理する</a> 方法が必要です。

Capacitor はオーバーライド可能なメソッド `handleOnConfigurationChanged()` を提供しており、これを使用して実行時の設定変更に対応することができます。

まず、`ScreenOrientationPlugin` クラスに以下のインポートを追加してください:

```java
import android.content.res.Configuration;
```

次に、`ScreenOrientationPlugin` クラスに以下のメソッドを追加します:

```java
@Override
public void handleOnConfigurationChanged(Configuration newConfig) {
   super.handleOnConfigurationChanged(newConfig);
   this.onOrientationChanged();
}

private void onOrientationChanged() {
   JSObject ret = new JSObject();
   String type = implementation.getCurrentOrientationType();
   ret.put("type", type);
   notifyListeners("screenOrientationChange", ret);
}
```

Android がアプリケーションに設定変更を通知する際、新しい設定オブジェクト全体を返すため、2 つの課題があります:

1. 方向が変更されたときだけリスナーに通知するようにするには、どうすればよいでしょうか。
2. 設定変更が向きの変更に起因するものであることを、どのようにして確認するか？

これらの課題を解決するために、プラグインが以前の `newConfig.orientation` 値を追跡し、その後の設定変更と比較する必要があります。

`ScreenOrientation` クラスに以下の追加を行います:

```java
@Nullable private int configOrientation;

public boolean hasOrientationChanged(int orientation) {
    if (orientation == configOrientation) {
        return false;
    } else {
        this.configOrientation = orientation;
        return true;
    }
}
```

`ScreenOrientation.java` に `androidx.annotation.Nullable` をインポートすることを忘れないでください。

そして、`ScreenOrientationPlugin.java` の `handleOnConfigurationChanged()` メソッドを更新してください:

```java
@Override
public void handleOnConfigurationChanged(Configuration newConfig) {
   super.handleOnConfigurationChanged(newConfig);
   if(implementation.hasOrientationChanged(newConfig.orientation)) {
       this.onOrientationChanged();
   }
}
```

このプラグインは、実行時の設定変更がオリエンテーションの変更に関係する場合にのみ、リスナーに通知するようになりました。

## 画面の向きをロック・解除する

iOS の実装で見たように、JavaScript の OrientationType を対応するネイティブの列挙型値にマッピングするヘルパーメソッドが必要になります。Android では、OrientationType を ActivityInfo 列挙型の値に対応付けます。以下のメソッドを `ScreenOrientation` クラスに追加してください:

```java
private int fromOrientationTypeToEnum(String orientationType) {
   switch (orientationType) {
       case "landscape-primary":
           return ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE;
       case "landscape-secondary":
           return ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE;
       case "portrait-secondary":
           return ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT;
       default:
           // Case: portrait-primary
           return ActivityInfo.SCREEN_ORIENTATION_PORTRAIT;
   }
}
```

`ScreenOrientation.java` に `android.content.pm.ActivityInfo` がインポートされていることを確認してください。

次に、`ScreenOrientation` クラスに `lock()` メソッドを追加してください:

```java
public void lock(String orientationType) {
   int orientationEnum = fromOrientationTypeToEnum(orientationType);
   activity.setRequestedOrientation(orientationEnum);
}
```

このメソッドは `ScreenOrientationPlugin` クラスから呼び出される必要があります:

```java
@PluginMethod()
public void lock(PluginCall call) {
   String orientationType = call.getString("orientation");
   if(orientationType == null) {
       call.reject("Input option 'orientation' must be provided.");
       return;
   }
   implementation.lock(orientationType);
   call.resolve();
}
```

`lock()` メソッドに `orientation` という入力パラメータを与えない呼び出しに対して、ガードしていることに注意してください。

画面の向きをロック解除するには、アクティビティのオリエンテーション・タイプを未指定の列挙型値に設定します。以下のメソッドを `ScreenOrientation` クラスに追加してください。

```java
public void unlock() {
   activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED);
}
```

そして、 `ScreenOrientationPlugin` クラスから実装メソッドを呼び出します。

```java
@PluginMethod()
public void unlock(PluginCall call) {
   implementation.unlock();
   call.resolve();
}
```

## テストドライブをしよう！

Android Studio で、端末またはエミュレーターでアプリを実行します。「Rotate My Device」ボタンを押すと、画面の向きが横向きに回転し、さらに回転させると、画面の向きがロックされていることが確認できます。「Confirm Signature」を押すと、画面の向きがロック解除されます。

> **注意:** プラグインをテストする前に、 **自動回転** デバイスの設定が **オン** になっていることを確認してください; そうでない場合は、機能しません。

おめでとうございます！ウェブ、iOS、Android で動作する Capacitor プラグインが完成しました。👏 👏 👏

現状では、`ScreenOrientation`プラグインはローカルプラグインであり、このアプリケーションだけが使用することができます。そして、それは OK です! 多くの場合、プラグインは特定のアプリケーションの中だけで使いたいものです。しかし、複数のアプリでプラグインを再利用したい場合は、最後のステップであるプラグインのパッケージングでその方法を確認します。
