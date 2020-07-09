---
title: カスタムNative Androidコード
description: カスタムNative Androidコード
url: /docs/android/custom-code
contributors:
  - mlynch
  - jcesarmobile
  - RoderickQiu
---

# カスタムNative Androidコード

<p class="intro">多くのアプリは、適切にCapacitorプラグインを構築して公開するというオーバーヘッドなしに、Native機能を実装するためのカスタムJavaコードを追加したいと思うでしょう。</p>

<p class="intro">WebViewからそのコードにアクセスする必要があるかどうかによって、2つの方法があります：</p>

## WebViewからNativeコードにアクセス

WebViewでアクセス可能にする必要があるカスタムNativeコードを構築する最も簡単な方法は、
そのためのローカルCapacitorプラグインを構築することです。この場合、プラグインの構築は `com.getcapacitor.Plugin` を継承するクラスの構築と同じくらい簡単です。
プラグインは `@NativePlugin()` と `@PluginMethod()` のアノテーションを使用します。

簡単な例です:

`com/example/myapp/CustomNativePlugin.java` in `android/app/src/main/java`:

```java
package com.example.myapp;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class CustomNativePlugin extends Plugin {

  @PluginMethod()
  public void customCall(PluginCall call) {
    String message = call.getString("message");
    // More code here...
    call.success();
  }

  @PluginMethod()
  public void customFunction(PluginCall call) {
    // More code here...
    call.resolve();
  }
}
```

最後に、アクティビティにプラグインを登録します。

```java
// Other imports...
import com.example.myapp.CustomNativePlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CustomNativePlugin.class);
    }});
  }
}
```

そうするとあなたはwebViewのコードであなたの機能を使うことができます:

```javascript
// Other codes...
import { Plugins } from "@capacitor/core";
const { CustomNativePlugin } = Plugins;
// Other codes...
CustomNativePlugin.customCall({ message: "CUSTOM MESSAGE" });
CustomNativePlugin.customFunction();
// Other codes...
```

より詳しいプラグインAPIの使い方を知るには [Capacitor Android Plugin Guide](https://capacitorjs.jp/docs/plugins/android) をご覧ください。

## プライベートNativeコード

WebViewからコードにアクセスする必要がない場合は、必要な場所にコードを追加するだけです。
Capacitorを使用すると、Nativeプロジェクトを完全に制御できます。アクティビティに新しいイベントハンドラを追加する必要がありますか？ `MainActivity` を更新して追加するだけです。世界はあなたの思いのままです。
