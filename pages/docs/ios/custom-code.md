---
title: カスタムNative iOSコード
description: カスタムNative iOSコード
contributors:
  - dotnetkow
  - mlynch
---

# カスタム Native iOS コード

多くのアプリケーションでは、適切に Capacitor プラグインを構築して公開するというオーバーヘッドなしに、Native 機能を実装するためのカスタム Swift（または Objective-C）コードを追加したいと思うでしょう。

iOS のエコシステムは Swift を採用しているので、Swift を使用してプラグインを構築することを強くお勧めします。そうすれば、より簡単にヘルプや開発者を見つけることができますが、Objective-C でも同様に機能します。

WebView からそのコードにアクセスする必要があるかどうかによって、カスタムコードを追加する 2 つの方法があります：

## WebView から Native コードへアクセス

WebView でアクセス可能にする必要があるカスタム Native コードを構築する最も簡単な方法は、
そのためのローカル Capacitor プラグインを構築することです。
この場合、プラグインのビルドは、新しい Class をビルドして Capacitor に登録するだけです。

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

`@objc` デコレーターは、Capacitor のランタイム（ダイナミックプラグインサポートには obj-C を使用する必要があります）が認識できるようにするために必要です。

次に、プラグイン(`MyPlugin.m`)に対応する新しい Objective-C ファイル(拡張子は`.m`です。`.h`ではありません！)を作成する必要があります。重要: これを行うには、Xcode の 「新規ファイル」 ダイアログを使用する必要があります。Xcode から Bridging Header を作成するように指示されますので、これを実行してください。

最後に、必要な Capacitor プラグインマクロを新しい `.m` ファイル に追加して、プラグインを登録します:

```objectivec
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(MyPlugin, "MyPlugin",
  CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
)
```

これは `MyPlugin` を作成し、`echo` メソッドをこのように Capacitor web runtime で実行できるようになります:

```typescript
import { Plugins } from '@capacitor/core';
const { MyPlugin } = Plugins;

const result = await MyPlugin.echo({ value: 'Hello World!' });
console.log(result.value);
```

## プライベート Native コード

WebView からコードにアクセスする必要がない場合は、必要な場所にコードを追加するだけです。
Capacitor を使用すると、Native プロジェクトを完全に制御できます。

`AppDelegate` に新しいイベントハンドラを追加する必要がありますか？入れるだけです！Capacitor はコードに触れません。
