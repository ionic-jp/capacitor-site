---
title: アプリの設定
description: ネイティブプロジェクトの設定
contributors:
  - jcesarmobile
  - dotNetkow
---

# アプリの設定

Capacitor は「一度だけコードを記述し、あらゆる場所で利用」という考え方を取り入れています。
Cordova の `config.xml` のように抽象化されたシステムではなく、プラットフォームごとに管理されます。

## プラットフォームごとの管理

Capacitor では、Cordova よりもネイティブプロジェクト構成に深く関与するようになっています。このことで、既存の iOS/Android ネイティブガイドが利用できたり、Stack Overflow が助けになったりし、プロジェクトを完全にコントロールするのが簡単になるので、これは正しいアプローチだと考えています。

また、Capacitor プロジェクトの設定は iOS や Android のプロジェクトの設定と同じであるため、既存のネイティブ開発チームは Web 開発者と一緒に、それぞれの側が使い慣れたツールや SDK を使用して簡単に作業することができます。もちろん、Web 開発者は必要なネイティブ構成をすべて自分で処理できると信じていますし、Web 開発者がそれを実行できるように、Capacitor のドキュメントも存在します。

## 共通の設定

Capacitor には [Capacitor の設定ファイル](/docs/config) で設定されるいくつかの高レベルな構成オプションがあります。これらは通常、ネイティブの機能を変更するのではなく、Capacitor のツールを制御します。

## ネイティブの設定

iOS と Android にはそれぞれ共通の変更を行うための設定ガイドが用意されています:

[Configuring iOS &#8250;](/docs/ios/configuration)

[Configuring Android &#8250;](/docs/android/configuration)
