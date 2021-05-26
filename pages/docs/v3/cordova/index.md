---
title: CordovaとPhoneGap
description: CordovaとPhoneGap
contributors:
  - dotNetkow
canonicalUrl: https://capacitorjs.com/docs/cordova
---

# Cordova と PhoneGap

2008 年に作成された Apache Cordova(と Adobe PhoneGap)は、Web 開発者が HTML、CSS、および JavaScript のコンテンツを使用して、さまざまなモバイルおよびデスクトッププラットフォーム用の Native アプリケーションを作成できるようにするオープンソースプロジェクトです。

Cordova の歴史と仕組みの詳細については、 [こちらをご覧ください](https://ionicframework.com/resources/articles/what-is-apache-cordova)。

## 新しいプロジェクトをはじめたわけ

オープンソースの世界は、古いプロジェクトの上に構築された新しいプロジェクトで埋め尽くされており、元の製品を根本的に変更しない限り実現できない具体的な改善を実現するためには新規プロジェクトが必要です。これが、Capacitor が必要であった理由です。Ionic のチームは、技術的、政治的な理由から、Cordova ではこれが不可能だと感じました。それが正しいか間違っているかにかかわらず、それがチームが到達した結論です。とはいえ、Ionic は今でも Cordova を多用しており、今後も長期にわたってこのプラットフォームへの投資を続ける予定です。

プラス面としては、Ionic がほぼすべてのスタックをコントロールできるようになりました。Ionic アプリを構築して Capacitor を使用する場合、Native のランタイムレイヤー、UI コントロール、コントロールの構築に使用する"framework"([Stencil](https://stenciljs.com/))をコントロールします。私たちがコントロールできない唯一の部分は、あなたが一番上で使うフロントエンドフレームワークです(Angular、React、Vue、または Vanilla.js)。重要なのは、私たちが管理しているスタックのどこかに問題があれば、すぐに修正できるということです。Capacitor は既に価値のある投資であることが証明されています。これにより、より強力な Ionic アプリを構築し、独自に得意なことに集中することが可能になりました。

## Capacitor と Cordova の違い

理念的には、Capacitor と Cordova はよく似ています。どちらも Web ビューを管理し、Native 機能を Web コードからアクセスするための構造化された方法を提供します。しかし、Capacitor にはいくつかの重要な違いがあり、以前 Cordova のアプローチに慣れていたウェブ開発者は、アプリ開発ワークフローを変える必要があります。

### Native プロジェクトのマネジメント

Capacitor は、各プラットフォーム・プロジェクトを _build time asset_ ではなく _source asset_ と見なします。つまり、Xcode と Android Studio プロジェクトをソース・コントロールに導入し、プラットフォーム固有の構成や実行/テストに必要な場合にはこれらの IDE を使用します。

このアプローチの変化にはいくつかの意味がります。まず、Capacitor は `config.xml` または同様のカスタム構成を使用しません。代わりに、 適切なプラットフォーム固有の構成ファイルを直接編集することによって、構成変更が行われます。これは、Android の場合は、`AndroidManifest.xml`、Xcode の場合は `Info.plist` です。Capacitor には、`capacitor.config.json` で設定することのできる、いくつかの [high level configuration options](/docs/basics/configuring-your-app)があります。これらは通常、本来の機能を変更するのではなく、Capacitor のツールを制御します。

また、Capacitor はコマンドラインを使用して「デバイス上で実行」またはエミュレートしません。その代わりに、そのような操作はプラットフォーム固有の IDE を通じて行われ、そのプラットフォーム用のアプリケーション開発の標準に従った、より高速で典型的なエクスペリエンスを提供します。例えば、コマンドラインから iOS アプリを実行することは、Apple によって公式にはサポートされていないので、Xcode の方が好ましいです。

これらの変更は、長年 Cordova を使っている人にとっては気になるかもしれないが、価値のあるメリットがあります:

1.  `config.xml` などの抽象化されたツールを使用して Native プロジェクトを更新および変更すると、エラーが発生しやすく、ターゲットが絶えず移動します。プラットフォーム固有のツールに慣れてくると、トラブルシューティングの問題がずっと簡単になります。
2.  新しいプラグインを作成しなくても、アプリケーションに必要なカスタム Native コードを簡単に追加できます。さらに、Native チームは同じプロジェクトで Web チームと一緒に作業することができます。
3.  Web アプリに NativeUI シェルを追加するなど、Native プロジェクトを「自分自身」することで、より魅力的なアプリ体験を簡単に作成できるようになりました。
4.  新しいモバイルオペレーティングシステムのバージョンがリリースされると、Native プロジェクトの変更がより明確になり、アプリケーションの保守性が向上します。Capacitor への無効な変更が導入された場合、または変更が Native プロジェクトテンプレートに適用された場合、チームは段階的なアップグレード手順を公開して、更新プロセスができる限りスムーズになるようにします。

### Plugin マネジメント

Capacitor は Cordova とは異なる方法でプラグインを管理します。まず、Capacitor はプラグインのソースコードをビルド前にアプリにコピーしません。代わりに、すべてのプラグインはフレームワーク(iOS の場合)、およびライブラリ(Android の場合)として構築され、各プラットフォームの主要な依存関係管理ツール(それぞれ CocoaPods と Gradle/Maven)を使用してインストールされます。また、Capacitor は Native のソースコードを変更しないため、必要な Native プロジェクト設定は手動で追加する必要があります(例えば AndroidManifest.xml のパーミッションなどです)。このアプローチの方がエラーが発生しにくく、開発者が特定のプラットフォームのコミュニティで簡単にヘルプを見つけられるようになります。

大きな違いの 1 つは、WebView から実行するために必要な JavaScript コードをプラグインが処理する方法です。Cordova には、独自の JavaScript を提供し、手動で `exec()` を呼び出すプラグインが必要です。一方、Capacitor は、実行時に検出したメソッドに基づいて各プラグインのすべての JavaScript を登録してエクスポートするため、WebView がロードされると、すぐにすべてのプラグイン・メソッドを使用できます。ここで重要なのは、 `deviceready` イベントが不要になったことです。アプリケーションコードがロードされるとすぐに、プラグインメソッドの呼び出しを開始できます。

Capacitor は JavaScript を提供するためにプラグインを必要としませんが、多くのプラグインは JavaScript のロジックを必要とします。この場合、追加の JavaScript でプラグインを提供するのは従来の JavaScript ライブラリ(バンドル、モジュールなど)を提供するのと同じくらい簡単ですが、Cordova で `exec()` を呼び出す代わりに、プラグインは `Capacitor.Plugins.MyPlugin` を介して Capacitor プラグインを参照します。

最後に、Capacitor はプラグインの作成者に影響を与えます。iOS では Swift4 が公式にサポートされており、プラグインの開発にも好まれています(Objective-C もサポートされています。)。プラグインは `Plugin.xml` をエクスポートしなくなりました。Capacitor には、実行時に読み取ったメタデータをプラグインのソースコードに追加するための、iOS 用のシンプルなマクロと Android 用のアノテーションがいくつか用意されています。

### CLI/Version マネジメント

Cordova とは異なり、Capacitor はグローバル CLI を使用せず、Capacitor「CLI」は npm スクリプトとして各プロジェクトにローカルにインストールされます。これにより、さまざまなアプリケーション間での Capacitor のバージョン管理が容易になります。

したがって、 `capacitor` ディレクトリから直接コマンドラインを実行するのではなくく、アプリケーションのディレクトリで`npx cap`を呼び出すことによって Capacitor が呼び出されます。

## マイグレーションをはじめる

[migration process](/docs/cordova/migration-strategy) と [get started migrating](/docs/cordova/migrating-from-cordova-to-capacitor) で正しい方法を学んでください。
