---
title: Method　Types
description: Capacitor Plugin の Method Types
contributors:
  - ikeith
---

# Method Types

プラグインを開発する場合、使用できるメソッドシグネチャは 3 種類に分かれます。いずれも非同期で、Promise 型です。

3 つのタイプすべてを含むプラグイン定義を考えてみましょう:

```typescript
export type CallbackID = string;

export interface MyData {
  data: string;
}

export type MyPluginCallback = (message: MyData | null, err?: any) => void;

export interface MyPlugin {
  method1(): Promise<void>;
  method2(): Promise<MyData>;
  cmethod3(callback: MyPluginCallback): Promise<CallbackID>;
}
```

## Void の返り値

`method1()` はデータを返さないことが期待される最も単純なケースです。Promise にエラーがないか確認することはできますが、解決された場合はその結果は無視されます。

Android の場合、このようなメソッドにアノテーションを付けます:

```java
@PluginMethod(returnType = PluginMethod.RETURN_NONE)
public void method1(PluginCall call) {
}
```

iOS の場合、プラグインの `.m` ファイルでこのようにメソッドを宣言します。

```objc
CAP_PLUGIN(MyPlugin, "MyPlugin",
           CAP_PLUGIN_METHOD(method1, CAPPluginReturnNone);
)
```

## Value の返り値

`method2()` は最も一般的なケースです。何らかの値で解決されるプロミスです。

Android では、この Method 　 Type がデフォルトで、戻り値の型の指定は任意です:

```java
@PluginMethod()
public void method2(PluginCall call) {
}
```

iOS の場合、プラグインの `.m` ファイルでこのようにメソッドを宣言します:

```objc
CAP_PLUGIN(MyPlugin, "MyPlugin",
           CAP_PLUGIN_METHOD(method2, CAPPluginReturnPromise);
)
```

## Callback

`method3()` は最も複雑な型ですが、実際には最も一般的でない型でもあります。例えば、ジオロケーション API を使ってデバイスの位置をモニターするときなど、プラグインが繰り返しデータを返す必要があるときに使われます。

アンドロイドの場合、このようなアノテーションをつけることになります:

```java
@PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
public void method3(PluginCall call) {
}
```

iOS の場合、プラグインの `.m` ファイルでこのようにメソッドを宣言します:

```objc
CAP_PLUGIN(MyPlugin, "MyPlugin",
           CAP_PLUGIN_METHOD(method3, CAPPluginReturnCallback);
)
```

コールバックメソッドは、ネイティブコードから（潜在的に何度も）呼び出される関数を受け取り、識別子で解決される Promise を返します。

ネイティブ側では、コールバックを実装することは、後で呼び出せるように呼び出しを保存する必要があることを意味します。その具体的な処理方法については、 [こちらで解説しています](/docs/core-apis/saving-calls) 。
