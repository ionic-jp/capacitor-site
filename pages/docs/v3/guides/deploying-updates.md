---
title: Deploying Realtime Updates
description: Update your Capacitor app remotely in realtime even through the app stores
contributors:
  - mlynch
---

# アプリの公開とリアルタイムの更新

アプリ開発のラストワンマイルは、アプリストアへのアプリの公開と、アプリの継続的な更新です。

Web Native モバイル開発アプローチの主な利点の 1 つは、バイナリの更新（コンパイルされたネイティブ機能）を必要としない変更であれば、アプリストアに適した方法でアプリをリアルタイムに更新できることです。

さらに、Capacitor のデベロッパーの多くは、iOS と Android（および Web）の両方を同時にターゲットとしているため、アプリとバイナリのアップデートをそれぞれのストアに手動で公開することは、不必要に面倒な作業となります。

アプリストアへの公開や長期的なアプリの更新を容易にするために、Capacitor を開発している Ionic 社は、 [Appflow](https://useappflow.com/) という強力な Mobile DevOps プラットフォームを提供しています。

## Appflow による App Store Publishing の自動化

Appflow は、Capacitor の開発者にいくつかの主要な時間短縮機能を提供します。その中でも特に興味深いのは、Apple App Store と Google Play Store の両方に直接パブリッシュできる機能です。全てのプランにおいて、毎月のデプロイメント数をサポートしており、より多くのアプリをサポートするための制限の拡張や、デプロイメントの完全自動化機能は上位プランにのみ搭載されています。

## Appflow でリアルタイムにアップデートを配信

アプリストアの公開機能と連動して、デベロッパーは Appflow のライブデプロイ機能を使って、アプリのライフタイムを通してリアルタイムにアプリのアップデートを展開することができます。

ライブデプロイ機能は、Capacitor のアプリが主にネイティブ機能へのフックを持つウェブアプリとして構築されているという原則に基づいて動作します。Apple と Google は、アプリに対する Web コンテンツの更新を明示的に許可しているため、この機能は app store と互換性があり、モバイルアプリチームにこれまでにない俊敏性を提供します。

## GitHub、Bitbucket、GitLab への接続

Appflow は GitHub、Bitbucket、GitLab のレポに直接接続し、git トリガーによるビルドやデプロイを行うことができます。

これにより、既存の開発ワークフローに簡単に接続することができ、自動化されたアプリストアやリアルタイムのアップデートを中断することなく開始することができます。

## Try Appflow Today

Appflow は、数億人のユーザーを持ち、ビジネスに大きな影響を与える主要な消費者向けおよび企業向けアプリを提供しています。Appflow のチームは、多くのフォーチュン 500 企業や数千の中小企業と密接に連携しています。

また、Appflow のチームは Capacitor のチームと密接に連携しているため、Appflow は Capacitor との連携に最適化されています。

Appflow は無料で利用でき、過去に使用したことのある Ionic アカウントを使用します。まずは、 [useappflow.com](https://useappflow.com/) にアクセスするか、 [documentation](https://ionicframework.com/docs/appflow) を参照して、Appflow の仕組みをご確認ください。
