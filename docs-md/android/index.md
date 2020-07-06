---
title: Capacitor Android Documentation
description: Capacitor Android Documentation
url: /docs/android
contributors:
  - mlynch
  - jcesarmobile
---

# Capacitor Android ドキュメンテーション

<p class="intro">CapacitorはネイティブのAndroidランタイムを特徴としており、開発者はJavaScriptとNative Java for Androidコード間で通信することができます。</p>

<p class="intro">CapacitorのAndroidアプリは(一般的に)Android Studioを通じて設定、管理されます。</p>

<p class="intro">各トピックの詳細は、次のガイドを参照してください:</p>

## はじめ方

Androidアプリケーションを開発するには、Android SDKの依存関係をインストールする必要があります。Android SDK Tools(26.0 .1以上が必要です)と、Android SDK Platforms for API21以降が
インストールされていることを確認してください。

これらを簡単にインストールするには、Android Studioを開き、トップメニューバーからTools->Android->SDK Managerの順に選択します:

![SDK Platforms](/assets/img/docs/android/sdk-platforms.png)
![SDK Tools](/assets/img/docs/android/sdk-tools.png)

### Androidプロジェクトの作成

デフォルトでは、CapacitorプロジェクトごとにAndroidプロジェクトが作成されます。
既存のプロジェクトにCapacitorを追加する場合は、次のコマンドを使用してAndroidプロジェクトを手動で追加できます。

```bash
npx cap add android
npx cap sync
```

`sync` コマンドは依存関係を更新し、Webアセットをプロジェクトにコピーします。このように実行することもできます:

```bash
npx cap copy
```

Webアセットのみをコピーするだけで、ネイティブの依存関係を更新する必要がないことがわかっている場合にこのコマンドを使えば高速になります。

### Androidプロジェクトを開く

プロジェクトをAndroid Studioで開く時、実行してください。

```bash
npx cap open android
```

### アプリの実行
> __Note:__ 現在、Androidエミュレータを使用するには、API24上で少なくともAndroidバージョン7.0のシステムイメージを使用する必要があります。これは、System WebViewバージョンがエミュレータ上で更新できないためです。System WebViewがアップデートされていれば、物理デバイスはAndroid 5.0(API21)程度で動作するはずです。

Android Studioを開くと、デバイスまたはエミュレータ上でアプリを実行できるようになるはずです。「Run」 メニューの 「Run」 または 「Debug」 に移動します:

![Running App](/assets/img/docs/android/running.png)

### トラブルシューティング

上記の問題が発生した場合は、レポジトリで問題を報告し、[Androidのトラブルシューティング](troubleshooting/)ページで、Androidの一般的な問題の解決方法をご確認ください。

### 次のステップ

アプリケーションが動作したら、アプリケーションの開発と構築を続ける準備ができています。使用可能なさまざまなAPI、Capacitorプラグイン、Cordovaプラグイン、またはカスタムネイティブコードを使用して、残りのアプリケーションを構築します。

## 詳細情報

アプリのパーミッション設定、依存関係の更新、ビルドの詳細、プラグインなどについては、
以下のAndroid専用ガイドを参照してください:

[Configuring and setting permissions for Android &#8250;](/docs/android/configuration)

[Building Native Plugins for Android &#8250;](/docs/plugins)
