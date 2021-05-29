---
title: Progressive Web Appsを構築する
description: Capacitorを使ったProgressive Web Appsの構築方法
contributors:
  - jcesarmobile
  - dotNetkow
---

# Progressive Web App の構築

Capacitor は Progressive Web Apps をサポートしており、iOS や Android 上でネイティブに動作するアプリだけでなく、モバイル Web アプリや "Progressive Web App" として Web 上でも動作するアプリを簡単に構築することができます。

## Progressive Web App とは？

簡単に言うと、Progressive Web App（PWA）とは、最新の Web 機能を使ってユーザーにアプリのような体験を提供する Web アプリのことです。これらのアプリは、従来のウェブサーバに配置され、URL でアクセスでき、検索エンジンにインデックスされることができます。

Progressive Web App とは、実際には、モバイルパフォーマンスに最適化された Web サイトの別名であり、新しく利用可能になった Web API を利用して、プッシュ通知やオフラインストレージなど、従来のネイティブアプリと同様の機能を提供するものです。

## Capacitor と Progressive Web App

Capacitor は、Progressive Web Apps とネイティブアプリを最優先でサポートしている。つまり、Capacitor のブリッジは、ネイティブ・コンテキストでもウェブ・コンテキストでも動作することをサポートしており、多くのプラグインは、全く同じ API と呼び出し規則で、 _両方のコンテキストで_ 利用可能です。

つまり、ネイティブアプリと Progressive Web App の両方に、`@capacitor/core`と Capacitor のプラグインを依存関係として使用すると、Capacitor は必要に応じて Web コードを、利用可能な場合はネイティブコードをシームレスに呼び出します。

さらに、Capacitor には現在のプラットフォームを照会するための多くのユーティリティが用意されており、ネイティブまたは Web 上で実行する際にカスタマイズされた体験を提供します。

## Progressive Web App サポートをアプリに追加する

プログレッシブ Web アプリは、App Manifest と Service Worker を持つ必要があります。

### App Manifest

まず、[App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) ファイル ( [manifest.json](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json) )が必要です。このファイルは、 `index.html` ファイルと一緒に置かれ、アプリの名前、テーマカラー、アイコンなど、アプリに関するメタデータを提供します。この情報は、アプリがホーム画面にインストールされる際などに使用されます。

### Service Worker

次に、プッシュ通知を送信したり、データをオフラインで保存したりするために、 [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) を使用して、Web アプリがネットワークリクエストをプロキシしたり、データの処理や同期に必要なバックグラウンドタスクを実行したりできるようにします。

Service Worker は強力ですが、複雑です。一般的に、ゼロから書くことはお勧めできません。代わりに、 [Workbox](https://developers.google.com/web/tools/workbox/) のようなツールを利用すると、アプリに簡単に組み込むことができる一般的なサービスワーカーのレシピが提供されています。

MDN の [Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) ページでは、Service Worker の登録方法など、Service Worker の使用について詳しく説明しています。

## Progressive Web App のパフォーマンス

Progressive Web App は、　[Time to Interactive](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive)　や　[First Meaningful Paint](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint)　など、いくつかのパフォーマンス基準によって判断されます。

本番稼働前には　[Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist)　に従ってください。また、　[Lighthouse](https://developers.google.com/web/tools/lighthouse/)　を使用してアプリの監査とテストを行ってください。

既存のフロントエンドスタックで Progressive Web App のパフォーマンス基準を満たすのに苦労している場合は、設定をほとんどせずに高速な PWA をサポートするオプションとして、　[Ionic Framework](http://ionicframework.com/)　を見てみましょう。
