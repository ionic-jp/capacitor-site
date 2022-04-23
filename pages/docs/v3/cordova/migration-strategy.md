---
title: マイグレーション戦略
description: マイグレーション戦略
contributors:
  - dotNetkow
---

# マイグレーション戦略

Cordova から Capacitor への移行は、occur over time、もしくは多くの場合完全に置き換えることができます。この作業はアプリの複雑さに大きく依存します。

## なぜマイグレーションしますか？

長期間に渡る安定性と安心感を得るためです。

Capacitor は、[Ionic が支えており](https://ionicframework.com/), Ionic は長期に渡って、Cordova とより大きなオープンソースのエコシステムのコントリビューターです。Ionic はまだ Cordova を多用しており、今後も長い間プラットフォームに投資していきます。

Cordova との下位互換性もあるので、既存のウェブアプリをいつでも簡単に切り替えることができます。Capacitor は Cordova プラグインのエコシステムをサポートできるように最初から設計されました。したがって、Cordova プラグインを Capacitor で使用するのは簡単です。

## なぜ Ionic で Capacitor を使いますか？

Ionic と Capacitor を一緒に使うことは、Ionic Framework が Capacitor にはない UI と UX の拡張を提供するので、最高のアプリ エクスペリエンスを構築する方法です。また、Angular、React、Vue など、お気に入りのウェブアプリのフレームワークでも動作します。

Capacitor のリリースにより、Ionic はそのスタックのほぼすべてをコントロールするようになった。今日 Ionic アプリを構築すると、Native ランタイムレイヤ(Capacitor)、UI コントロール([Ionic Framework](https://ionicframework.com))、コントロールの構築に使用する"Framework"([Stencil](https://stenciljs.com/)を利用した Web コンポーネント)をコントロールできるようになります。重要なのは、私たちが管理しているスタックのどこかに問題があれば、すぐに修正できるということです。私たちがコントロールできない唯一の部分は、あなたが一番上で使うフロントエンドフレームワークです(Angular、React、Vue、またはプレーンの JavaScript)。

## マイグレーションプロセスの概要

### Utilize the Ionic VS Code Extension

The [Ionic VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ionic.ionic) provides tools to help assist your migration from Cordova to Capacitor by installing Capacitor's dependencies, replacing equivalent plugins, and more. It is a helpful tool that will automate much of the process of moving to Capacitor.

### 既存の Cordova プラグインの監査と移行

まず、既存の Cordova プラグインの監査を行います。不要になったプラグインは削除できる可能性があります。

次に、Capacitor の [official plugins](/docs/apis) と [community plugins](/docs/plugins/community) の全てを確認します。その結果、Capacitor と同等の Cordova プラグインに変更できる可能性があります。

プラグインによっては機能が完全に一致しないものもありますが、必要な機能を考えれば問題ないでしょう。

### C 必要に応じて Cordova や Ionic Native を使い続ける

Cordova や Ionic Native のプラグインを Capacitor アプリで活用するには、 [こちら](/docs/plugins/cordova) を参照してください。代替プラグインが存在しない場合は、Cordova プラグインをそのまま使用してください。もし、サポートしてほしいプラグインがあれば、 [plugin proposal](https://github.com/capacitor-community/proposals) を公開してください。

[Capacitor への移行](/docs/cordova/migrating-from-cordova-to-capacitor)の準備はできましたか？
