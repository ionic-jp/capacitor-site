---
title: Capacitor Android API
description: AndroidにおけるCapacitorのAPIについて
---

# Capacitor Android API

Capacitor Android は、Capacitor アプリを Android 上で動作させるためのネイティブランタイムです。

## Bridge

Android ブリッジは、Capacitor Android ライブラリの心臓部です。ブリッジには、情報を提供したり動作を変更したりするいくつかのメソッドが用意されています。

Capacitor に登録されているプラグインは、ブリッジにアクセスすることができます:

```java
this.bridge
```

---

### getConfig()

```java
public CapConfig getConfig()
```

このプロパティでは、Capacitor ランタイムに通知している構成オブジェクトを取得することができます。

---

### triggerJSEvent(...)

```java
public void triggerJSEvent(final String eventName, final String target)
public void triggerJSEvent(final String eventName, final String target, final String data)
```

`window` や `document` などの JavaScript の [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) でイベントを発生させます。可能であれば、[Plugin Events](/docs/plugins/android#plugin-events)を使用することをお勧めします。

例を挙げます。

```java
bridge.triggerJSEvent("myCustomEvent", "window");
bridge.triggerJSEvent("myCustomEvent", "document", "{ 'dataKey': 'dataValue' }");
```

Note: `data` must be a serialized JSON string value.

---

## データの受け渡し

環境間で渡されるデータの扱い方については、[こちら](/docs/core-apis/data-types#android)を参照してください。

---

## CAPPluginCall の保存

非同期の操作や繰り返し行われる操作のためのプラグインの呼び出しを持続させるための注意点は[こちら](/docs/core-apis/saving-calls)にあります。
