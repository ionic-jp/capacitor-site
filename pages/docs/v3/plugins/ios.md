---
title: Capacitor iOS プラグインガイド
description: Capacitor iOS プラグインガイド
contributors:
  - mlynch
  - jcesarmobile
---

# Capacitor iOS プラグインガイド

iOS 用の Capacitor プラグインを構築するには、Apple の iOS SDK とインターフェイスするために Swift（または Objective-C）を記述する必要があります。

## はじめに

まず、プラグインガイドの [はじめかた](/docs/plugins/creating-plugins) にあるように、プラグインを生成します。

次に、Xcode で `echo/ios/Plugin.xcworkspace` を開いてください。次に、プラグイン用の.swift ファイルに移動します。

例えば、Plugin Class Name が `Echo` のプラグインの場合、 `EchoPlugin.swift` を開く必要があります。

## プラグインの基本

iOS 用の Capacitor プラグインは、`CAPPlugin`を継承したシンプルな Swift クラスで、
JavaScript から呼び出し可能ないくつかのエクスポートされたメソッドを持っています。

### 簡単な例

生成されたばかりのサンプルには、単純な echo プラグインが `echo` 関数を持ち、与えられた値を単純に返します。

この例では、Capacitor プラグインのいくつかのコアコンポーネントを紹介します:
プラグインコールからデータを受け取り、呼び出し元にデータを返します:

`EchoPlugin.swift`

```swift
import Capacitor

@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin {
  @objc func echo(_ call: CAPPluginCall) {
    let value = call.getString("value") ?? ""
    call.resolve([
        "value": value
    ])
  }
}
```

### Call Data へのアクセス

各プラグインメソッドは、クライアントからプラグインメソッドの呼び出しに関するすべての情報を含む `CAPPluginCall` のインスタンスを受け取ります。

クライアントは、number、text、booleans、オブジェクト、配列など、JSON でシリアライズ可能な任意のデータを送信することができます。このデータ には、コールインスタンスの `options` フィールド、または `getString` や `getObject` などの便利なメソッドでアクセスすることができます。
これらの値を渡したり、アクセスしたりする際には、 [別途説明するように](/docs/core-apis/data-types#ios) 注意しなければならない点があります。

例えば、メソッドに渡されるデータを取得する方法は以下の通りだとします:

```swift
@objc func storeContact(_ call: CAPPluginCall) {
  let name = call.getString("yourName") ?? "default name"
  let address = call.getObject("address") ?? [:]
  let isAwesome = call.getBool("isAwesome") ?? false

  guard let id = call.options["id"] as? String else {
    call.reject("Must provide an id")
    return
  }

  // ...

  call.resolve()
}
```

`CAPPluginCall` インスタンスでデータにアクセスするさまざまな方法に注目してください。 オプションは `guard` を使用しています。

### データを返す

プラグインの呼び出しは、成功するか失敗するかのどちらかです。プラグインの呼び出しは JavaScript の Promise からメソッド名を拝借しています。成功を示すには `resolve()` を呼び出し（オプションでデータを返す）、失敗をエラーメッセージとともに示すには `reject()` を使用します。

`CAPPluginCall` の `resolve()` メソッドは辞書を受け取り、JSON シリアライズ可能なデータ型をサポートします。以下は、データをクライアントに返す例です:

```swift
call.resolve([
  "added": true,
  "info": [
    "id": id
  ]
])
```

失敗する、あるいは呼び出しを拒否するには、 `reject()` を呼び出し、エラー文字列と、オプションでエラーコードと `Error` のインスタンスを渡します:

```swift
call.reject(error.localizedDescription, nil, error)
```

### プラグイン読み込み時にコードを実行する

プラグインが最初にロードされるときに、いくつかのコードを実行する必要がある場合があります。例えば、これは通知センターのイベントハンドラを設定するのに良い場所でしょう。

これを行うために、`load()` メソッドの実装を提供しています:

```swift
override public func load() {
}
```

### Capacitor へのエクスポート

Capacitor があなたのプラグインを見ることができるようにするために、プラグイン・ジェネレータは 2 つのことをします: Swift クラスを Objective-C にエクスポートし、提供された Capacitor Objective-C マクロを使用してそれを登録することです。

Swift のクラスを Objective-C にエクスポートするために、プラグインジェネレータは Swift のクラスの上に `@objc(EchoPlugin)` を追加し、`echo` メソッドの前に `@objc` を追加します。

プラグインを登録するには、プラグインジェネレータはプラグインに対応する `.m` 拡張子のファイル (例えば `EchoPlugin.m`) を作成し、`CAP_PLUGIN` マクロを使用してプラグインを登録し、`CAP_PLUGIN_METHOD` マクロを使用して `echo` メソッドを登録します。

```objectivec
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(EchoPlugin, "Echo",
  CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
)
```

これにより、`Echo` プラグインと `echo` メソッドが Capacitor Web ランタイムで利用可能になり、echo メソッドが Promise を返すことが Capacitor に示されます。

プラグインに他のメソッドを追加するには、 `.swift` プラグインクラスで `func` キーワードの前に `@objc` を付けてメソッドを作成し、 `.m` ファイルに新しい `CAP_PLUGIN_METHOD` エントリを追加してください。

## パーミッション

もしあなたのプラグインが iOS 上でエンドユーザーの許可を必要とする機能を持つなら、permissions パターンを実装する必要があります。

このセクションに進む前に、パーミッションのエイリアスとステータスのインターフェイスが設定されていることを確認してください。もしまだなら、Web ガイドの [permissions のセクション](/docs/plugins/web#permissions) を参照してください。

### Permissions の設定

`checkPermissions()` と `requestPermissions()` メソッドをあなたの Swift のプラグインのクラスに追加します。

```diff-swift
 import Capacitor

 @objc(EchoPlugin)
 public class EchoPlugin: CAPPlugin {
     ...

+    @objc override public func checkPermissions(_ call: CAPPluginCall) {
+        // TODO
+    }

+    @objc override public func requestPermissions(_ call: CAPPluginCall) {
+        // TODO
+    }
 }
```

#### `checkPermissions()`

このメソッドは、あなたのプラグインにおけるパーミッションの現在の状態を返すべきです。それは、あなたが定義した [permission status definition](/docs/plugins/web#permission-status-definitions) の構造に一致する辞書であるべきです。一般的に、この情報はあなたが使っているフレームワーク上で直接利用できます。

以下の例では、ロケーションサービスから ` authorizationStatus`` を  `locationState``にマップし、その状態に`location` というエイリアスを関連付けています。

```swift
@objc override func checkPermissions(_ call: CAPPluginCall) {
    let locationState: String

    switch CLLocationManager.authorizationStatus() {
    case .notDetermined:
        locationState = "prompt"
    case .restricted, .denied:
        locationState = "denied"
    case .authorizedAlways, .authorizedWhenInUse:
        locationState = "granted"
    @unknown default:
        locationState = "prompt"
    }

    call.resolve(["location": locationState])
}
```

#### `requestPermissions()`

**ブロック型の API の場合**

フレームワークがパーミッションを要求するためのブロックベースの API をサポートしている場合、単一のメソッド内で操作を完了させることが可能です。

以下の例では、`AVCaptureDevice` にビデオアクセスを要求してから、独自の `checkPermissions` メソッドを使用してパーミッションの現在の状態を確認し、呼び出しを実行しています。

```swift
@objc override func requestPermissions(_ call: CAPPluginCall) {
    AVCaptureDevice.requestAccess(for: .video) { [weak self] _ in
        self?.checkPermissions(call)
    }
}
```

**Delegate 型の API の場合**

フレームワークが delegate（またはコールバック）API を使用している場合、操作を完了すると、元の呼び出しを保存し、コールバックが呼び出された後に取得する必要があることを意味します。

```swift
var permissionCallID: String?
var locationManager: CLLocationManager?

@objc override func requestPermissions(_ call: CAPPluginCall) {
    if let manager = locationManager, CLLocationManager.locationServicesEnabled() {
        if CLLocationManager.authorizationStatus() == .notDetermined {
            bridge?.saveCall(call)
            permissionCallID = call.callbackId
            manager.requestWhenInUseAuthorization()
        } else {
            checkPermissions(call)
        }
    } else {
        call.reject("Location services are disabled")
    }
}

public func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
    if let callID = permissionCallID, let call = bridge?.getSavedCall(callID) {
        checkPermissions(call)
        bridge?.releaseCall(call)
    }
}
```

**マルチ Permission の場合**

複数の種類のパーミッションが必要な場合、[DispatchGroup](https://developer.apple.com/documentation/dispatch/dispatchgroup) を使用すると、複数の呼び出しを同期させることができて便利です。

```swift
let store = CNContactStore()

@objc override func requestPermissions(_ call: CAPPluginCall) {
    // get the permissions to check or default to all of them
    var permissions = call.getArray("types", String.self) ?? []
    if permissions.isEmpty {
        permissions = ["contacts", "camera"]
    }

    let group = DispatchGroup()
    if permissions.contains("contacts") {
        group.enter()
        store.requestAccess(for: .contacts) { (_, _) in
            group.leave()
        }
    }
    if permissions.contains("camera") {
        group.enter()
        AVCaptureDevice.requestAccess(for: .video) { _ in
            group.leave()
        }
    }
    group.notify(queue: DispatchQueue.main) {
        self.checkPermissions(call)
    }
}
```

### プラグイン呼び出しの永続化

ほとんどの場合、プラグインメソッドはタスクを実行するために呼び出され、すぐに終了することができます。しかし、後でアクセスできるようにプラグインの呼び出しを有効にしておく必要がある場合もあります。例えば、位置情報データのライブストリーミングのようなデータを定期的に返したり、非同期タスクを実行したりする場合です。

プラグイン呼び出しを持続させる方法の詳細については、[プラグイン呼び出しの保存に関するこのガイド](/docs/v3/core-apis/saving-calls)を参照してください。

## エラーハンドリング

### Unavailable

このエラーは、その機能が今すぐには使用できないことを示すために投げられることがあります。

```swift
@objc override func methodThatUsesNewIOSFramework(_ call: CAPPluginCall) {
    if #available(iOS 14, *) {
        // TODO implementation
    } else {
        call.unavailable("Not available in iOS 13 or earlier.")
    }
}
```

> 古い API のエクスペリエンスを可能な限り適切に低下させることをお勧めします。 `unavailable` は控えめに使いましょう。

### Unimplemented

このエラーは、あるメソッドが iOS 用に実装できないことを示すために使用します。

```swift
@objc override func methodThatRequiresAndroid(_ call: CAPPluginCall) {
    call.unimplemented("Not implemented on iOS.")
}
```

## Plugin Events

プラグインは独自のイベントを発生させることができ、このようなリスナーをプラグインオブジェクトにアタッチすることでリスニングすることができます。

```typescript
import { MyPlugin } from 'my-plugin';

MyPlugin.addListener('myPluginEvent', (info: any) => {
  console.log('myPluginEvent was fired');
});
```

Swift のプラグインクラスからイベントを発信する方法:

```swift
self.notifyListeners("myPluginEvent", data: [:])
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

> `window` でのグローバルオブジェクトをトリガーにすることもできます。　詳細は [`triggerJSEvent`](/docs/core-apis/ios#triggerjsevent) をご確認ください。

## ネイティブ画面を表示する

Capacitor の [`UIViewController`](/docs/core-apis/ios#viewcontroller) を使用すると、アプリ上でネイティブ画面を表示することができます。

## ナビゲーションをオーバーライドする

Capacitor プラグインはウェブビューのナビゲーションをオーバーライドすることができます。そのために、プラグインは `- (NSNumber *)shouldOverrideLoad:(WKNavigationAction *)navigationAction` メソッドをオーバーライドすることができます。
`true` を返すと、WebView は URL の読み込みを中断します。
`false` を返すと、WebView は URL の読み込みを継続します。
`nil`を返すと、デフォルトのコンデンサーのポリシーに従います。

## 高度な設定

Capacitor iOS プラグインは CocoaPods ライブラリなので、依存関係や必要なフレームワーク、その他の高度な設定を追加するには、プラグインジェネレータによって作成された `.podspec` ファイルを編集する必要があります。可能なすべてのオプションを確認するには、[podspec reference](https://guides.cocoapods.org/syntax/podspec.html) をチェックしてください。
