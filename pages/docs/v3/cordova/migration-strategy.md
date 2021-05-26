---
title: マイグレーション戦略
description: マイグレーション戦略
contributors:
  - dotNetkow
canonicalUrl: https://capacitorjs.com/docs/cordova/migration-strategy
---

# マイグレーション戦略

Cordova からキャパシターへの移行は、occur over time、もしくは多くの場合完全に置き換えることができます。この作業はアプリの複雑さに大きく依存します。

## なぜマイグレーションしますか？

長期間に渡る安定性と安心感を得るためです。

Capacitor は、[Ionic が支えており](https://ionicframework.com/), Ionic は長期に渡って、Cordova とより大きなオープンソースのエコシステムのコントリビューターです。Ionic はまだ Cordova を多用しており、今後も長い間プラットフォームに投資していきます。

Cordova との下位互換性もあるので、既存のウェブアプリをいつでも簡単に切り替えることができます。Capacitor は Cordova プラグインのエコシステムをサポートできるように最初から設計されました。したがって、Cordova プラグインを Capacitor で使用するのは簡単です。

## なぜ Ionic で Capacitor を使いますか？

Ionic と Capacitor を一緒に使うことは、Ionic Framework が Capacitor にはない UI と UX の拡張を提供するので、最高のアプリ エクスペリエンスを構築する方法です。また、Angular、React、Vue など、お気に入りのウェブアプリのフレームワークでも動作します。

Capacitor のリリースにより、Ionic はそのスタックのほぼすべてをコントロールするようになった。今日 Ionic アプリを構築すると、Native ランタイムレイヤ(Capacitor)、UI コントロール([Ionic Framework](https://ionicframework.com))、コントロールの構築に使用する"Framework"([Stencil](https://stenciljs.com/)を利用した Web コンポーネント)をコントロールできるようになります。重要なのは、私たちが管理しているスタックのどこかに問題があれば、すぐに修正できるということです。私たちがコントロールできない唯一の部分は、あなたが一番上で使うフロントエンドフレームワークです(Angular、React、Vue、またはプレーンの JavaScript)。

`Ionic React` や `Ionic Vue`のような新しい Ionic を使っていますか? Capacitor は公式にサポートされている Native・ランタイムです。

### すでに Ionic を使っていますか？Ionic 4 へのアップデートを検討ください

Capacitor はどんな Ionic プロジェクト(1.0 から 4.x+)でも動作しますが、最高のアプリ開発体験を楽しむためには Ionic4 以上をお勧めします。既存の Ionic1 から 3 のアプリがある場合は、[Ionic 4 migration guide](https://ionicframework.jp/docs/building/migration)に従ってください。さらにサポートが必要な場合は、Ionic がお手伝いします。Ionic4 トレーニング、アーキテクチャレビュー、移行支援などのアドバイザリーサービス [Ionic can help.](https://ionicframework.com/enterprise-edition) を利用できます。

## Migration プロセスの概要

### 既存の Cordova プラグインの監査と移行

既存の Cordova プラグインを監査することから始めます。不要になったプラグインを削除できる場合があります。

Next, review all of Capacitor's [core plugins](/docs/apis) as well as [community plugins](/docs/plugins/community). You may be able to switch to the Capacitor-equivalent Cordova plugin.

プラグインによっては機能が完全に一致しない場合がありますが、必要な機能によっては問題にならない場合があります。

### 必要に応じて引き続き Cordova または Ionic Native を使用

Cordova や Ionic Native のプラグインを Capacitor アプリで利用するには、 [こちらをご覧ください](/docs/cordova/using-cordova-plugins)。代わりのプラグインが存在しない場合は、Cordova プラグインをそのまま使用します。サポートして欲しいプラグインがあれば [教えてください](https://github.com/ionic-team/capacitor/issues/new)。

[Capacitor にマイグレーションする](/docs/cordova/migrating-from-cordova-to-capacitor) 用意はできましたか？
