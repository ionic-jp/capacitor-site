---
title: マイグレーション戦略
description: マイグレーション戦略
contributors:
  - dotNetkow
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

## Migration Process Overview

### Audit Then Migrate Existing Cordova Plugins

Begin by auditing your existing Cordova plugins. It's possible that you may be able to remove ones that are no longer needed.

Next, review all of Capacitor's [official plugins](/docs/apis) as well as [community plugins](/docs/plugins/community). You may be able to switch to the Capacitor-equivalent Cordova plugin.

Some plugins may not match functionality entirely, but based on the features you need that may not matter.

### Continue to Use Cordova or Ionic Native if Needed

To leverage Cordova and/or Ionic Native plugins in your Capacitor app, [see here](/docs/plugins/cordova). If a replacement plugin doesn't exist, continue to use the Cordova plugin as-is. If there's a plugin you'd like to see supported, open a [plugin proposal](https://github.com/capacitor-community/proposals)!

Ready to [migrate to Capacitor](/docs/cordova/migrating-from-cordova-to-capacitor)?
