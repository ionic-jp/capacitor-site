---
title: Progressive Web Appsのビルド
description: Capacitorを使ったProgressive Web Appsのビルド方法
contributors:
  - jcesarmobile
  - dotNetkow
---

# Progressive Web Apps のビルド

Capacitor は Progressive Web Apps をサポートしており、iOS と Android だけでなく、モバイルウェブアプリ"プログレッシブ Web アプリケーション"として、ウェブ上でも Native に動作するアプリを簡単に構築できます。

## Progressive Web App とは

簡単に言えば、Progressive Web App(PWA)は、最新の Web 機能を使用してアプリケーションのようなエクスペリエンスをユーザーに提供する Web アプリケーションです。これらのアプリは従来のウェブサーバにデプロイされ、URL を介してアクセスでき、検索エンジンによってインデックスされます。

Progressive Web App は、実用的な目的のために、モバイルパフォーマンスに最適化され、プッシュ通知やオフラインストレージなど、従来の Native アプリと同様の機能を提供するために新たに利用可能になった Web API を利用する Web サイトのことを指します。

## Capacitor と Progressive Web Apps

Capacitor は、Progressive Web Apps と Native アプリを最高レベルでサポートしています。つまり、Capacitor のプラグインブリッジは、Native コンテキストと Web のどちらもの実行をサポートしており、まったく同じ API とその API の利用方法で、両方のコンテキストで多くのコアプラグインを使用できます。

つまり、Native アプリと Progressive Web App の両方の依存関係として `@capacitor/core` を使用することによって、Capacitor は必要に応じて Web コードをシームレスに呼び出し、Native コードが使用可能な場合は Native コードを呼び出すことになります。

また、Capacitor には、現在のプラットフォームに応じたクエリーを実行することで、Native または Web 上での実行時にカスタマイズされたエクスペリエンスを提供するためのユーティリティが多数用意されています。

## アプリに Progressive Web App サポートを追加

PWA サポートを既存のフロントエンドプロジェクトに追加するのは簡単です。App Manifest ファイルを追加し、service worker を設定するだけです:

### App Manifest

まず、`index.html` ファイルと同じ階層に [App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) ファイル
([manifest.json](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json))を置き、
App の名前、テーマカラー、アイコンなどのメタデータを提供する必要があります。この情報は、例えばあなたのアプリがホーム画面にインストールされる時に使われます。

### Service Worker

次に、プッシュ通知を送信したりデータをオフラインで保存するために、 [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) によってあなたのウェブアプリがネットワークリクエストをプロキシし、
データの処理と同期に必要なバックグラウンドタスクを実行できるようにします。

Service Workers は強力ですが、複雑です。通常、最初から作成することはお勧めしません。
代わりに、あなたのアプリに簡単に組み込むことができる一般的な Service Worker のレシピを提供する[Workbox](https://developers.google.com/web/tools/workbox/)のようなツールの利用を検討ください。

登録方法など、Service Workers の使用方法の詳細は、MDN の [Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) ページを参照してください。

## Progressive Web App のパフォーマンス

Progressive Web Apps は、 [Time to Interactive](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive) や [First Meaningful Paint](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint) など、いくつかのパフォーマンス標準によって評価されます。

本番環境に反映する前に、 [Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist) を確認して、[Lighthouse](https://developers.google.com/web/tools/lighthouse/) を使ってあなたのアプリを監査してください。

既存のフロントエンドスタックで Progressive Web App のパフォーマンス標準を満たすのに苦労しているなら、ほぼ 0 の設定で高速 PWA サポートを得るためのオプションとして、 [Ionic Framework](http://ionicframework.com/) の 4 以上を見てください。Ionic4.x 以上は、Angular だけでなく、いくつかの一般的なフロントエンドフレームワークで動作する Web コンポーネントライブラリです。

## Native と Web での実行

Capacitor の重要な機能の一つは、Native(アプリストアで配信することができる) **と** ウェブの両方で動くアプリを作れることです。これは、ベースとなるプラットフォームと使用する API/プラグインの間にレイヤーを提供することで実現しています。

もしあなたのアプリが SplashScreen のようなウェブでは代替物を持たない Native のプラグインコールをする `SplashScreen.show()` を実行すると、Web でもクラッシュすることなくこれらのコールを許可します。promise を返すコールは rejected promise を返します。

また、Capacitor の JavaScript API には、特定の API が使用可能かどうかをプログラムでチェックできる多数のユーティリティーがあります。

例えば、もしあなたのアプリが写真を撮るためためにカメラアプリに依存しているのであれば、そのカメラが利用可能かどうかをチェックし、利用可能でない場合は代わりにファイルをアップロードするようユーザに依頼することができます。

```typescript
import { Capacitor } from '@capacitor/core';

const isAvailable = Capacitor.isPluginAvailable('Camera');

if (!isAvailable) {
  // Have the user upload a file instead
} else {
  // Otherwise, make the call:
  Camera.getPhoto();
}
```
