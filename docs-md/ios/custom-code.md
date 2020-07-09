---
title: カスタムNative iOSコード
description: カスタムNative iOSコード
url: /docs/ios/custom-code
contributors:
  - dotnetkow
  - mlynch
---

# カスタムNative iOSコード

<p class="intro">多くのアプリケーションでは、適切にCapacitorプラグインを構築して公開するというオーバーヘッドなしに、ネイティブ機能を実装するためのカスタムSwift（またはObjective-C）コードを追加したいと思うでしょう。</p>

<p class="intro">iOSのエコシステムはSwiftを採用しているので、Swiftを使用してプラグインを構築することを強くお勧めします。そうすれば、より簡単にヘルプや開発者を見つけることができますが、Objective-Cでも同様に機能します。</p>

<p class="intro">WebViewからそのコードにアクセスする必要があるかどうかによって、カスタムコードを追加する2つの方法があります：</p>


## WebViewからNativeコードへアクセス

WebViewでアクセス可能にする必要があるカスタムNativeコードを構築する最も簡単な方法は、
そのためのローカルCapacitorプラグインを構築することです。
この場合、プラグインのビルドは、新しいClassをビルドしてCapacitorに登録するだけです。

`MyPlugin.swift`

```swift
import Capacitor

@objc(MyPlugin)
public class MyPlugin: CAPPlugin {
  @objc func echo(_ call: CAPPluginCall) {
    let value = call.getString("value") ?? ""
    call.success([
        "value": value
    ])
  }
}
```

`@objc` デコレーターは、Capacitorのランタイム（ダイナミックプラグインサポートにはobj-Cを使用する必要があります）が認識できるようにするために必要です。

次に、プラグイン(`MyPlugin.m`)に対応する新しいObjective-Cファイル(拡張子は`.m`です。`.h`ではありません！)を作成する必要があります。重要: これを行うには、Xcodeの 「新規ファイル」 ダイアログを使用する必要があります。XcodeからBridging Headerを作成するように指示されますので、これを実行してください。

最後に、必要なCapacitorプラグインマクロを新しい `.m` ファイル に追加して、プラグインを登録します:

```objectivec
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(MyPlugin, "MyPlugin",
  CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
)
```

これは `MyPlugin` を作成し、`echo` メソッドをこのようにCapacitor web runtimeで実行できるようになります:

```typescript
import { Plugins } from "@capacitor/core"
const { MyPlugin } = Plugins

const result = await MyPlugin.echo({ value: "Hello World!" })
console.log(result.value)
```

## プライベートNativeコード

WebViewからコードにアクセスする必要がない場合は、必要な場所にコードを追加するだけです。
Capacitorを使用すると、ネイティブプロジェクトを完全に制御できます。

`AppDelegate` に新しいイベントハンドラを追加する必要がありますか？入れるだけです！Capacitorはコードに触れません。
