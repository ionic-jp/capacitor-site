---
title: Capacitor iOS API
description: iOSにおけるCapacitorのAPIについて
---

# Capacitor iOS API

Capacitor iOS は、Capacitor アプリを iOS 上で動作させるためのネイティブランタイムです。

## Bridge

iOS ブリッジは、Capacitor iOS ライブラリの心臓部である。ブリッジには、情報を提供したり動作を変更したりするプロパティやメソッドがあります。

Capacitor に登録されると、プラグインはブリッジへの弱い参照を持ちます:

```swift
self.bridge?
```

> あなたのメソッドがブリッジが必要な場合、Guard を使ってブリッジを確認して、ない場合は return することができます:
>
> ```swift
> guard let bridge = self.bridge else { return }
> ```

---

### viewController

```swift
var viewController: UIViewController? { get }
```

このプロパティには、Capacitor のメインビューコントローラが含まれており、アプリ上のネイティブビューを表示するために使用できます。

例を示します。

```swift
DispatchQueue.main.async {
  self.bridge?.viewController.present(ourCustomViewController, animated: true, completion: nil)
}
```

iPad 端末では、Popover を表示することができます。

```swift
self.setCenteredPopover(ourCustomViewController)
self.bridge.viewController.present(ourCustomViewController, animated: true, completion: nil)
```

---

### config

```swift
var config: InstanceConfiguration { get }
```

このプロパティでは、Capacitor ランタイムに通知している構成オブジェクトを取得することができます。

---

### triggerJSEvent(...)

```swift
func triggerJSEvent(eventName: String, target: String)
func triggerJSEvent(eventName: String, target: String, data: String)
```

`window` や `document` などの JavaScript の [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) でイベントを発生させます。可能であれば、代わりに [Plugin Events](/docs/plugins/ios#plugin-events) を使用することをお勧めします。

例:

```swift
bridge.triggerJSEvent(eventName: "myCustomEvent", target: "window")
bridge.triggerJSEvent(eventName: "myCustomEvent", target: "document", data: "my custom data")
```

---

### localURL(...)

```swift
func localURL(fromWebURL webURL: URL?) -> URL?
```

WebView からの URL をネイティブ iOS 用のファイル URL に変換します。

WebView では、複数の異なるタイプの URL を扱うことがあります。

- `res://` (ウェブアセットへのショートカットスキーム)
- `file://` (ローカルデバイス上のファイルへの完全修飾 URL)

---

### portablePath(...)

```swift
func portablePath(fromLocalURL localURL: URL?) -> URL?
```

ネイティブ iOS 用のファイル URL を、Web ビューで読み込むための URL に変換します。

---

## データの受け渡し

環境間で渡されるデータの扱い方については、[こちら](/docs/core-apis/data-types#ios)を参照してください。

---

## CAPPluginCall の保存

非同期の操作や繰り返し行われる操作のためのプラグインの呼び出しを持続させるための注意点は[こちら](/docs/core-apis/saving-calls)にあります。
