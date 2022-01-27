---
title: Capacitorプラグインの構築
description: Capacitorプラグインの構築 - コードの抽象化パターン
contributors:
  - eric-horodyski
---

# Capacitor プラグイン 抽象化パターン

Capacitor 用に構築されるプラグインは、複雑さが異なる場合があります。<a href="https://capacitorjs.com/docs/plugins" target="_blank">公式 Capacitor プラグイン</a>を例にとってみましょう。Android での<a href="https://github.com/ionic-team/capacitor-plugins/blob/main/toast/android/src/main/java/com/capacitorjs/plugins/toast/Toast.java" target="_blank">Toast プラグイン</a>実装はシンプルですが、<a href="https://github.com/ionic-team/capacitor-plugins/tree/main/push-notifications/android/src/main/java/com/capacitorjs/plugins/pushnotifications" target="_blank">Push 通知プラグイン</a>は複数のファイルがあり、かなり複雑です。

プラグインの複雑さと要件によりますが、特に iOS と Android で実装要件が異なる場合、プラグインを構築するために必要な作業を独自のソフトウェアプロジェクトとしてスコープするのは無理な話ではないでしょう。

とはいえ、デザインパターンを再確認し、Capacitor プラグインの標準的なコードの抽象化を確認することは必要です。

## デザインパターン 101

デザインパターンは、ソフトウェア設計における一般的な問題に対する、一般的で再利用可能な解決策です。デザインパターンは、プログラムによる問題解決策ではなく、繰り返し発生する問題を解決するためにコードを抽象化するためのガイド、またはブループリントです。

このような場合、「Constraints」（制約）は、「Constraint」（制約）を意味します。Angular は、Dependency Injection と Singleton パターンに大きく依存しています。React は Mediator パターンと State パターンを使っています。プッシュ通知には Observer パターンが使われています。

開発者としてあなたは、デザインパターンのライブラリを使用して、Capacitor プラグインで機能するコードの抽象化を作成する権限を感じるはずです。

デザインパターンについて説明し、その例を提供している良いリソースがいくつかあります：

- <a href="https://www.oreilly.com/library/view/head-first-design/0596007124/" target="_blank">Head First Design Patterns (O'Reilly Publishing)</a>
- <a href="https://refactoring.guru/design-patterns" target="_blank">Design Patterns (Refactoring Guru)</a>

> 個人的には、プロジェクトの計画段階では「Head First Design Patterns」を読み、コードを書くときには「Refactoring Guru」に目を通すようにしています。

## 一般的に使われているパターン

Capacitor プラグインのソースコードに目を通すと、特定のデザインパターンが Capacitor プラグイン開発者に人気があることがわかるでしょう。

**Bridge デザインパターン**

Bridge デザインパターンは、コードの抽象化と実装を分離するものです。インターフェイスクラスの中に実装クラスをカプセル化するデザインメカニズムです。

公式の Capacitor プラグインは Bridge パターンを多用しており、Device プラグインのこの例からも明らかです:

```swift
@objc func getLanguageCode(_ call: CAPPluginCall) {
    let code = implementation.getLanguageCode()
    call.resolve([ "value": code ])
}
```

なぜ、このデザインパターンが Capacitor プラグインに適しているのでしょうか？

- 抽象化ではハイレベルなロジックに、実装ではプラットフォームの詳細にフォーカスすることができます。
- クライアントから実装の詳細を隠蔽できます。
- 新しい実装を独立して導入できます。
- プラットフォームに依存しないクラスと実装を作成することができます。

**Facade デザインパターン**

Facade デザインパターンは、多くの可動部を含む複雑なサブシステムにシンプルなインターフェースを提供します。それは、サブシステムのすべての機能を公開しないかもしれません。しかし、クライアントが気にするような機能は公開されます。

より複雑な Capacitor 公式プラグインの中には、Local 通知プラグインを含め、Facade パターンを使用しているものがあります:

```java
@Override
public void load() {
    super.load();
    notificationStorage = new NotificationStorage(getContext());
    manager = new LocalNotificationManager( … );
    manager.createNotificationChannel();
    notificationChannelManager = new NotificationChannelManager(getActivity();
    staticBridge = this.bridge;
}
```

なぜ、このデザインパターンが Capacitor プラグインに適しているのでしょうか？

- サブシステムの複雑性からコードを分離することができます。
- サブシステムのコードの変更からクライアントコードを保護することができます。
- サブシステムを階層化することができます。

## Screen Orientation プラグインでは何を使いましょうか？

`ScreenOrientation` プラグインは Bridge デザインパターンを使用します。プラグインが必要とするアクションを実行するために必要な iOS と Android の API には触れていませんが、プラグインの API を実装するのは簡単で比較的単純です。次のステップでは、iOS の実装から見ていきます。
