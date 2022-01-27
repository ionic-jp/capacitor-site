---
title: Capacitorプラグインの作成
description: Capacitorプラグインの作成
contributors:
  - mlynch
  - jcesarmobile
  - dotNetkow
---

# Capacitor プラグインの作成

Capacitor のプラグインは、JavaScript が Native API と直接通信することを可能にします。

このガイドでは、npm で公開される共有可能な Capacitor プラグインの作成を開始するのに役立つ情報を提供します。また、あなたのアプリにローカルな Capacitor プラグインを作成することもできます。 [iOS](/docs/ios/custom-code) と [Android](/docs/android/custom-code) のカスタムネイティブコードのガイドを参照してください。

## 理念

もしあなたのプラグインが一般向けであれば、始める前に Capacitor プラグインに関するいくつかの理念を共有しておく必要があります。

### 協業する

私たちは、競争よりも協力の方が、より質の高いプラグインを生み出すことができると考えています。これが、私たちが [Capacitor Community GitHub organization](https://github.com/capacitor-community) を作った理由の一つです。この組織は、プラグインを個人のリポジトリでホストするよりもコミュニティ間の協力が容易になります。

[Capacitor Community](https://github.com/capacitor-community) の中に特定のトピックのためのプラグインが存在する場合、それに貢献することを検討してください! もしプラグインに主要なメンテナがいない場合、Capacitor チームは喜んであなたを GitHub 組織に追加することを検討します。

### 最小のスコープ

私たちは、Capacitor のプラグインは適度に小さい範囲を担うべきだと考えています。Capacitor プラグインは、使用されるかどうかわからないネイティブコードをアプリに追加します。プラグインの範囲を小さくすることで、アプリが必要とする最小限のネイティブコードを確保することができます。これにより、不要なアプリの肥大化や、使用方法の説明がない API などによる App Store からの警告や拒否を避けることができます。

もちろん、スコープを小さくすることで、デプロイの迅速化、連携の容易化、保守性の向上など、他のメリットも生まれます。

### 統一された概念

Capacitor プラグインは、JavaScript 開発者が慣れ親しんでいるプラットフォーム間で統一されたエクスペリエンスを提供するよう努力する必要があります。これは、ネイティブなプラットフォームからの値は強制される必要があるかもしれないことを意味します。

以下は、統一された慣用的なエクスペリエンスを実現する方法を示す、いくつかのガイドラインとその例です:

- **`null` やその他の値よりも `undefined` を優先する** Example: 例: Android API が `0.0` を返して「値がない」ことを示す場合、その値は JavaScript レイヤーのために `undefined` に強制されるべきです。
- **同一単位を優先する** 例: iOS API が摂氏を使い、Android API が華氏を使う場合、その値は JavaScript レイヤーに届く前にどちらかに強制されるべきです。
- **他のフォーマットよりも ISO8601 のタイムゾーンでのデータタイムを優先してください。** 例: `"2020-12-13T20:21:58.415Z"` のような文字列から正確な JavaScript の `Date` を得るのは簡単ですが、Unix タイムスタンプを与えられた場合は混乱します (JavaScript のタイムスタンプはミリ秒単位です)。タイムゾーンは常に含めるようにしましょう。そうしないと、異なるロケールから来た日付は不正確に解釈される可能性があります。

## プラグインジェネレーター

始める準備はできましたか？Capacitor には [プラグインジェネレータ](https://github.com/ionic-team/create-capacitor-plugin) があり、これを使用してプラグインの作業を開始することができます。

> 続行する前に、最新の Node LTS バージョンと npm 6+を使用していることを確認したいかもしれません。

新しいターミナルで、以下を実行します:

```bash
npm init @capacitor/plugin
```

ジェネレーターが入力を促します。コマンドラインオプションを指定することもできます（ [GitHub レポ](https://github.com/ionic-team/create-capacitor-plugin/) を参照してください）。

## 次のステップ

[Capacitor プラグイン開発のワークフローについて &#8250;](/docs/plugins/workflow)

[Capacitor 用 Android プラグインの構築について &#8250;](/docs/plugins/android)

[Capacitor 用 iOS プラグインの構築について &#8250;](/docs/plugins/ios)

[Capacitor の Web/PWA プラグイン構築について &#8250;](/docs/plugins/web)
