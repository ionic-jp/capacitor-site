---
title: Progressive Web Appsのビルド
description: Capacitorを使ったProgressive Web Appsのビルド方法
url: /docs/basics/progressive-web-app
contributors:
  - jcesarmobile
  - dotNetkow
---

# Progressive Web Appsのビルド

<p class="intro">CapacitorはProgressive Web Appsをサポートしており、iOSとAndroidだけでなく、モバイルウェブアプリ"プログレッシブWebアプリケーション"として、ウェブ上でもNativeに動作するアプリを簡単に構築できます。</p>

## Progressive Web Appとは

簡単に言えば、Progressive Web App(PWA)は、最新のWeb機能を使用してアプリケーションのようなエクスペリエンスをユーザーに提供するWebアプリケーションです。これらのアプリは従来のウェブサーバにデプロイされ、URLを介してアクセスでき、検索エンジンによってインデックスされます。

Progressive Web Appは、実用的な目的のために、モバイルパフォーマンスに最適化され、プッシュ通知やオフラインストレージなど、従来のNativeアプリと同様の機能を提供するために新たに利用可能になったWeb APIを利用するWebサイトのことを指します。

## Capacitor と Progressive Web Apps

Capacitorは、Progressive Web AppsとNativeアプリを最高レベルでサポートしています。つまり、Capacitorのプラグインブリッジは、NativeコンテキストとWebのどちらもの実行をサポートしており、まったく同じAPIとそのAPIの利用方法で、両方のコンテキストで多くのコアプラグインを使用できます。

つまり、NativeアプリとProgressive Web Appの両方の依存関係として `@capacitor/core` を使用することによって、Capacitorは必要に応じてWebコードをシームレスに呼び出し、Nativeコードが使用可能な場合はNativeコードを呼び出すことになります。

また、Capacitorには、現在のプラットフォームに応じたクエリーを実行することで、NativeまたはWeb上での実行時にカスタマイズされたエクスペリエンスを提供するためのユーティリティが多数用意されています。

## アプリにProgressive Web Appサポートを追加

PWAサポートを既存のフロントエンドプロジェクトに追加するのは簡単です。App Manifestファイルを追加し、service workerを設定するだけです:

### App Manifest

まず、`index.html` ファイルと同じ階層に [App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) ファイル
([manifest.json](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json))を置き、
Appの名前、テーマカラー、アイコンなどのメタデータを提供する必要があります。この情報は、例えばあなたのアプリがホーム画面にインストールされる時に使われます。

### Service Worker

次に、プッシュ通知を送信したりデータをオフラインで保存するために、 [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) によってあなたのウェブアプリがネットワークリクエストをプロキシし、
データの処理と同期に必要なバックグラウンドタスクを実行できるようにします。

Service Workersは強力ですが、複雑です。通常、最初から作成することはお勧めしません。
代わりに、あなたのアプリに簡単に組み込むことができる一般的なService Workerのレシピを提供する[Workbox](https://developers.google.com/web/tools/workbox/)のようなツールの利用を検討ください。

登録方法など、Service Workersの使用方法の詳細は、MDNの [Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) ページを参照してください。

## Progressive Web Appのパフォーマンス

Progressive Web Appsは、 [Time to Interactive](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive) や [First Meaningful Paint](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint) など、いくつかのパフォーマンス標準によって評価されます。

本番環境に反映する前に、 [Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist) を確認して、[Lighthouse](https://developers.google.com/web/tools/lighthouse/) を使ってあなたのアプリを監査してください。

既存のフロントエンドスタックでProgressive Web Appのパフォーマンス標準を満たすのに苦労しているなら、ほぼ0の設定で高速PWAサポートを得るためのオプションとして、 [Ionic Framework](http://ionicframework.com/) の4以上を見てください。Ionic4.x以上は、Angularだけでなく、いくつかの一般的なフロントエンドフレームワークで動作するWebコンポーネントライブラリです。

## NativeとWebでの実行

Capacitorの重要な機能の一つは、Native(アプリストアで配信することができる) と ウェブの両方で動くアプリを作れることです。これは、ベースとなるプラットフォームと使用するAPI/プラグインの間にレイヤーを提供することで実現しています。

もしあなたのアプリがSplashScreenのようなウェブでは代替物を持たないNativeのプラグインコールをする `SplashScreen.show()` を実行すると、Webでもクラッシュすることなくこれらのコールを許可します。promiseを返すコールはrejected promiseを返します。

また、CapacitorのJavaScript APIには、特定のAPIが使用可能かどうかをプログラムでチェックできる多数のユーティリティーがあります。

例えば、もしあなたのアプリが写真を撮るためためにカメラアプリに依存しているのであれば、そのカメラが利用可能かどうかをチェックし、利用可能でない場合は代わりにファイルをアップロードするようユーザに依頼することができます。

```typescript
import { Capacitor } from '@capacitor/core';

const isAvailable = Capacitor.isPluginAvailable('Camera');

if (!isAvailable) {
  // Have the user upload a file instead
} else {
  // Otherwise, make the call:
  Camera.getPhoto()
}
```
