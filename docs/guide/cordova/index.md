---
title: CordovaとPhoneGap
description: CordovaとPhoneGap
url: /docs/cordova
contributors:
  - dotnetkow
---

# CordovaとPhoneGap

<p class="intro">2008年に作成されたApache Cordova(とAdobe PhoneGap)は、Web開発者がHTML、CSS、およびJavaScriptのコンテンツを使用して、さまざまなモバイルおよびデスクトッププラットフォーム用のNativeアプリケーションを作成できるようにするオープンソースプロジェクトです。</p>

<p class="intro">Cordovaの歴史と仕組みの詳細については、 <a href="https://ionicframework.com/resources/articles/what-is-apache-cordova" target="_blank">こちらをご覧ください</a>.</p>

## 新しいプロジェクトをはじめたわけ

オープンソースの世界は、古いプロジェクトの上に構築された新しいプロジェクトで埋め尽くされており、元の製品を根本的に変更しない限り実現できない具体的な改善を実現するためには新規プロジェクトが必要です。これが、Capacitorが必要であった理由です。Ionicのチームは、技術的、政治的な理由から、Cordovaではこれが不可能だと感じました。それが正しいか間違っているかにかかわらず、それがチームが到達した結論です。とはいえ、Ionicは今でもCordovaを多用しており、今後も長期にわたってこのプラットフォームへの投資を続ける予定です。

プラス面としては、Ionicがほぼすべてのスタックをコントロールできるようになりました。Ionicアプリを構築してCapacitorを使用する場合、Nativeのランタイムレイヤー、UIコントロール、コントロールの構築に使用する"framework"([Stencil](https://stenciljs.com/))をコントロールします。私たちがコントロールできない唯一の部分は、あなたが一番上で使うフロントエンドフレームワークです(Angular、React、Vue、またはVanilla.js)。重要なのは、私たちが管理しているスタックのどこかに問題があれば、すぐに修正できるということです。Capacitorは既に価値のある投資であることが証明されています。これにより、より強力なIonicアプリを構築し、独自に得意なことに集中することが可能になりました。

## CapacitorとCordovaの違い

理念的には、CapacitorとCordovaはよく似ています。どちらもWebビューを管理し、Native機能をWebコードからアクセスするための構造化された方法を提供します。しかし、Capacitorにはいくつかの重要な違いがあり、以前Cordovaのアプローチに慣れていたウェブ開発者は、アプリ開発ワークフローを変える必要があります。

### Nativeプロジェクトのマネジメント

Capacitorは、各プラットフォーム・プロジェクトを _build time asset_ ではなく _source asset_ と見なします。つまり、XcodeとAndroid Studioプロジェクトをソース・コントロールに導入し、プラットフォーム固有の構成や実行/テストに必要な場合にはこれらのIDEを使用します。

このアプローチの変化にはいくつかの意味がります。まず、Capacitorは `config.xml` または同様のカスタム構成を使用しません。代わりに、 適切なプラットフォーム固有の構成ファイルを直接編集することによって、構成変更が行われます。これは、Androidの場合は、`AndroidManifest.xml`、Xcodeの場合は `Info.plist` です。Capacitorには、`capacitor.config.json` で設定することのできる、いくつかの [high level configuration options](/docs/basics/configuring-your-app)があります。これらは通常、本来の機能を変更するのではなく、Capacitorのツールを制御します。

また、Capacitorはコマンドラインを使用して「デバイス上で実行」またはエミュレートしません。その代わりに、そのような操作はプラットフォーム固有のIDEを通じて行われ、そのプラットフォーム用のアプリケーション開発の標準に従った、より高速で典型的なエクスペリエンスを提供します。例えば、コマンドラインからiOSアプリを実行することは、Appleによって公式にはサポートされていないので、Xcodeの方が好ましいです。

これらの変更は、長年Cordovaを使っている人にとっては気になるかもしれないが、価値のあるメリットがあります:

 1. `config.xml` などの抽象化されたツールを使用してNativeプロジェクトを更新および変更すると、エラーが発生しやすく、ターゲットが絶えず移動します。プラットフォーム固有のツールに慣れてくると、トラブルシューティングの問題がずっと簡単になります。
 2. 新しいプラグインを作成しなくても、アプリケーションに必要なカスタムNativeコードを簡単に追加できます。さらに、Nativeチームは同じプロジェクトでWebチームと一緒に作業することができます。
 3. WebアプリにNativeUIシェルを追加するなど、Nativeプロジェクトを「自分自身」することで、より魅力的なアプリ体験を簡単に作成できるようになりました。
 4. 新しいモバイルオペレーティングシステムのバージョンがリリースされると、Nativeプロジェクトの変更がより明確になり、アプリケーションの保守性が向上します。Capacitorへの無効な変更が導入された場合、または変更がNativeプロジェクトテンプレートに適用された場合、チームは段階的なアップグレード手順を公開して、更新プロセスができる限りスムーズになるようにします。

### Pluginマネジメント

CapacitorはCordovaとは異なる方法でプラグインを管理します。まず、Capacitorはプラグインのソースコードをビルド前にアプリにコピーしません。代わりに、すべてのプラグインはフレームワーク(iOSの場合)、およびライブラリ(Androidの場合)として構築され、各プラットフォームの主要な依存関係管理ツール(それぞれCocoaPodsとGradle/Maven)を使用してインストールされます。また、CapacitorはNativeのソースコードを変更しないため、必要なNativeプロジェクト設定は手動で追加する必要があります(例えばAndroidManifest.xmlのパーミッションなどです)。このアプローチの方がエラーが発生しにくく、開発者が特定のプラットフォームのコミュニティで簡単にヘルプを見つけられるようになります。

大きな違いの1つは、WebViewから実行するために必要なJavaScriptコードをプラグインが処理する方法です。Cordovaには、独自のJavaScriptを提供し、手動で `exec()` を呼び出すプラグインが必要です。一方、Capacitorは、実行時に検出したメソッドに基づいて各プラグインのすべてのJavaScriptを登録してエクスポートするため、WebViewがロードされると、すぐにすべてのプラグイン・メソッドを使用できます。ここで重要なのは、 `deviceready` イベントが不要になったことです。アプリケーションコードがロードされるとすぐに、プラグインメソッドの呼び出しを開始できます。

CapacitorはJavaScriptを提供するためにプラグインを必要としませんが、多くのプラグインはJavaScriptのロジックを必要とします。この場合、追加のJavaScriptでプラグインを提供するのは従来のJavaScriptライブラリ(バンドル、モジュールなど)を提供するのと同じくらい簡単ですが、Cordovaで `exec()` を呼び出す代わりに、プラグインは `Capacitor.Plugins.MyPlugin` を介してCapacitorプラグインを参照します。

最後に、Capacitorはプラグインの作成者に影響を与えます。iOSではSwift4が公式にサポートされており、プラグインの開発にも好まれています(Objective-Cもサポートされています。)。プラグインは `Plugin.xml` をエクスポートしなくなりました。Capacitorには、実行時に読み取ったメタデータをプラグインのソースコードに追加するための、iOS用のシンプルなマクロとAndroid用のアノテーションがいくつか用意されています。

### CLI/Versionマネジメント

Cordovaとは異なり、CapacitorはグローバルCLIを使用せず、Capacitor「CLI」はnpmスクリプトとして各プロジェクトにローカルにインストールされます。これにより、さまざまなアプリケーション間でのCapacitorのバージョン管理が容易になります。

したがって、 `capacitor` ディレクトリから直接コマンドラインを実行するのではなくく、アプリケーションのディレクトリで`npx cap`を呼び出すことによってCapacitorが呼び出されます。

## マイグレーションをはじめる

[migration process](/docs/cordova/migration-strategy) と [get started migrating](/docs/cordova/migrating-from-cordova-to-capacitor) で正しい方法を学んでください。
