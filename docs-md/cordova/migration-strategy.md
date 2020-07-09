---
title: マイグレーション戦略
description: マイグレーション戦略
url: /docs/cordova/migration-strategy
contributors:
  - dotnetkow
---

# マイグレーション戦略

<p class="intro">Cordovaからキャパシターへの移行は、occur over time、もしくは多くの場合完全に置き換えることができます。この作業はアプリの複雑さに大きく依存します。</p>

## なぜマイグレーションしますか？

長期間に渡る安定性と安心感を得るためです。

Capacitorは、[Ionicが支えており](https://ionicframework.com/), Ionicは長期に渡って、Cordovaとより大きなオープンソースのエコシステムのコントリビューターです。IonicはまだCordovaを多用しており、今後も長い間プラットフォームに投資していきます。

Cordovaとの下位互換性もあるので、既存のウェブアプリをいつでも簡単に切り替えることができます。CapacitorはCordovaプラグインのエコシステムをサポートできるように最初から設計されました。したがって、CordovaプラグインをCapacitorで使用するのは簡単です。

## なぜIonicでCapacitorを使いますか？

IonicとCapacitorを一緒に使うことは、Ionic FrameworkがCapacitorにはないUIとUXの拡張を提供するので、最高のアプリ エクスペリエンスを構築する方法です。また、Angular、React、Vueなど、お気に入りのウェブアプリのフレームワークでも動作します。

Capacitorのリリースにより、Ionicはそのスタックのほぼすべてをコントロールするようになった。今日Ionicアプリを構築すると、ネイティブランタイムレイヤ(Capacitor)、UIコントロール([Ionic Framework](https://ionicframework.com))、コントロールの構築に使用する"Framework"([Stencil](https://stenciljs.com/)を利用したWebコンポーネント)をコントロールできるようになります。重要なのは、私たちが管理しているスタックのどこかに問題があれば、すぐに修正できるということです。私たちがコントロールできない唯一の部分は、あなたが一番上で使うフロントエンドフレームワークです(Angular、React、Vue、またはプレーンのJavaScript)。

`Ionic React` や `Ionic Vue`のような新しいIonicを使っていますか? Capacitorは公式にサポートされているネイティブ・ランタイムです。

### すでにIonicを使っていますか？Ionic 4へのアップデートを検討ください

CapacitorはどんなIonicプロジェクト(1.0から4.x+)でも動作しますが、最高のアプリ開発体験を楽しむためにはIonic4以上をお勧めします。既存のIonic1から3のアプリがある場合は、[Ionic 4 migration guide](https://ionicframework.jp/docs/building/migration)に従ってください。さらにサポートが必要な場合は、Ionicがお手伝いします。Ionic4トレーニング、アーキテクチャレビュー、移行支援などのアドバイザリーサービス [Ionic can help.](https://ionicframework.com/enterprise-edition) を利用できます。

## Migrationプロセスの概要

### 既存のCordovaプラグインの監査と移行

既存のCordovaプラグインを監査することから始めます。不要になったプラグインを削除できる場合があります。

Next, review all of Capacitor's [core plugins](/docs/apis) as well as [community plugins](/docs/community/plugins). You may be able to switch to the Capacitor-equivalent Cordova plugin.

プラグインによっては機能が完全に一致しない場合がありますが、必要な機能によっては問題にならない場合があります。

### 必要に応じて引き続きCordovaまたはIonic Nativeを使用

CordovaやIonic NativeのプラグインをCapacitorアプリで利用するには、 [こちらをご覧ください](/docs/cordova/using-cordova-plugins)。代わりのプラグインが存在しない場合は、Cordovaプラグインをそのまま使用します。サポートして欲しいプラグインがあれば [教えてください](https://github.com/ionic-team/capacitor/issues/new)。

[Capacitorにマイグレーションする](/docs/cordova/migrating-from-cordova-to-capacitor) 用意はできましたか？
