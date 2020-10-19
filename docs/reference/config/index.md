---
title: Capacitorの設定ファイル
description: Capacitorの設定
url: /docs/reference/config
contributors:
  - mlynch
  - jcesarmobile
---

# 設定ファイル

<p class="intro">Capacitor構成ファイルは、Capacitorツールの高レベルオプションを設定するために使用されます。</p>

すべての `capacitor.config.json` で利用可能な設定オプションの例を紹介します:

```json5
{
  // Androidのパッケージ名とiOSのバンドル識別子
  "appId": "com.company.appname",

  // アプリ名
  "appName": "Capacitor Kitchen Sink",

  // 構築したWeb資産のディレクトリを設定します。
  // これは、Native環境でアプリケーションを実行するために使用されるディレクトリです。
  "webDir": "www",

  // JavaScriptのパッケージマネージャーを選択します。npm か yarn かです。
  "npmClient": "npm",

  // Webコードのコピーにcapacitor.jsを使うか、
  // もしくは標準的なtypescript/babel/webpack/rollup workflow.を利用して
  // bundled/importedする必要があります。
  //
  // スタータープロジェクトではこれをtrueにしますが、Ionicや他のフレームワークを使用している場合には、
  // あなたはこれをfalseに設定する必要があります (デフォルトは false)
  "bundledWebRuntime": false,

  // Windowsではフルパスを入力しなければ、
  // Android Studioを開くことができません。
  // Android Studioのインストールパスですが、手動で変更することもできます。
  "windowsAndroidStudioPath": "C:\Program Files\Android\Android Studio\bin\studio64.exe",

  // A Boolean value that determines whether to hide native logs for iOS and Android. The preference is ignored if it's also declared inside ios or android
  // Default is false
  "hideLogs": true,

  // Serverオブジェクトには、ポートとURLの設定が含まれます。
  "server": {
    // 外部URLをロードするようにアプリをつくることができます（つまりライブリロードです）
    "url": "http://192.168.1.33:8100",
    // ローカルホスト名を設定できますが、
    // navigator.geolocationやMediaDevices.getUserMediaなどの安全なコンテキストを必要とする
    // Web APIを実行できるようにlocalhostを保持することをお勧めします。
    "hostname": "app",
    // 使用されるローカルスキームを設定することができます。
    // これは、iOSのデフォルトのスキームがionicであるcordova-plugin-ionic-webviewから移行する場合に役立ちます。
    "iosScheme": "ionic",
    "androidScheme": "http",
    // 通常、すべての外部URLはブラウザで開かれます。
    // このオプションを設定することで、あなたはCapacitorのWebViewの中でこれらのホストに属するURLを開くようにできます。
    "allowNavigation": [
      "example.org",
      "*.example.org",
      "192.0.2.1"
    ]
  },
  // iOS、Android、Electron用のCapacitor WebViewのユーザーエージェント（ios、android、electronオブジェクト内でも宣言されていない場合）
  "overrideUserAgent": "my custom user agent",
  // iOS、Android、およびElectronのCapacitor WebViewの元のユーザーエージェントに追加する文字列。ios、android、またはelectronオブジェクト内でも宣言されている場合を除きます。
  // overrideUserAgentが設定されていない場合のみ有効。
  "appendUserAgent": "string to append",
  // iOSとAndroidのCapacitor WebViewの背景色 (iOSまたはAndroidオブジェクト内でも宣言されていない場合)
  "backgroundColor": "#ffffff",
  "android": {
    // User agent of Capacitor WebView for Android
    "overrideUserAgent": "my custom user agent for Android",
    // String to append to the original user agent of Capacitor WebView for Android.
    "appendUserAgent": "string to append for Android",
    // Background color of Capacitor WebView for Android only
    "backgroundColor": "#ffffffff",
    // Androidで、あなたがアプリをremote/testingサーバからhttpsプロトゴルで入手する場合、
    // あなたはmixed content modeを有効にして、WebViewに異なるURLスキーマからロードする必要があります。
    // capacitor-content:// もしくは capacitor-file:// からです。
    "allowMixedContent": true,
    // Androidのデフォルトのキーボードでは、JSのキーを正しくキャプチャできません。
    // あなたはこれをtrueにすることで、より簡単なキーボードを使うことができます。
    // このキーボードにはいくつかの問題と制限があることに注意してください。
    "captureInput": true,
    // このアプリケーションの任意のWebViewにロードされたWebコンテンツ（HTML / CSS / JavaScript）の
    // デバッグを有効にします。
    // WebView内で実行されているWebレイアウトおよびJavaScriptコードのデバッグを容易にするために、
    // このフラグを有効にすることができます
    "webContentsDebuggingEnabled": true,

    // この真偽値はAndroidのNative Logを非表示にするかどうかを設定します。
    // Default は false です
    "hideLogs": true
  },
  "ios": {
    // iOSにおけるCapacitor WebViewの背景色
    "overrideUserAgent": "my custom user agent for iOS",
    // iOS用Capacitor WebViewの元のユーザーエージェントに追加する文字列.
    "appendUserAgent": "string to append for iOS",
    // iOSにおけるCapacitor WebViewの背景色を指定
    "backgroundColor": "#ffffffff",
    // WebViewのUIScrollViewのコンテンツ挿入動作を設定する
    // Default は never
    //  "automatic", "scrollableAxes", "never" と "always" を利用可能です
    // https://developer.apple.com/documentation/uikit/uiscrollview/contentinsetadjustmentbehavior
    "contentInset": "always",
    // Cordovaプラグインを利用するためのSwiftのバージョン。
    // 標準は 5.0
    "cordovaSwiftVersion": "4.2",
    // このプロジェクトがサポートするiOSの最低バージョン。
    // デフォルトは、11.0
    "minVersion": "11.3",
    // 一部のCordovaプラグインでは、linker flagsを設定する必要があります。
    "cordovaLinkerFlags": ["-ObjC"],
    // リンクをタップしたときにプレビューを表示するかどうかを決定する真偽値
    // リンクの行き先
    "allowsLinkPreview": false,

    // この真偽値はiOSのNative Logを非表示にするかどうかを設定します。
    // Default は false です
    "hideLogs": true
  }
}
```
