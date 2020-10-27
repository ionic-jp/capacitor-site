---
title: Capacitor Android ドキュメンテーション
description: Capacitor Android ドキュメンテーション
contributors:
  - mlynch
  - jcesarmobile
---

# Capacitor Android ドキュメンテーション

Capacitor は Native の Android ランタイムを特徴としており、開発者は JavaScript と Native Java for Android コード間で通信することができます。

Capacitor の Android アプリは(一般的に)Android Studio を通じて設定、管理されます。各トピックの詳細は、次のガイドを参照してください:

## はじめ方

Android アプリケーションを開発するには、Android SDK の依存関係をインストールする必要があります。Android SDK Tools(26.0 .1 以上が必要です)と、Android SDK Platforms for API21 以降が
インストールされていることを確認してください。

これらを簡単にインストールするには、Android Studio を開き、トップメニューバーから Tools->Android->SDK Manager の順に選択します:

![SDK Platforms](/assets/img/docs/android/sdk-platforms.png)
![SDK Tools](/assets/img/docs/android/sdk-tools.png)

### Android プロジェクトの作成

デフォルトでは、Capacitor プロジェクトごとに Android プロジェクトが作成されます。
既存のプロジェクトに Capacitor を追加する場合は、次のコマンドを使用して Android プロジェクトを手動で追加できます。

```bash
npx cap add android
npx cap sync
```

`sync` コマンドは依存関係を更新し、Web アセットをプロジェクトにコピーします。このように実行することもできます:

```bash
npx cap copy
```

Web アセットのみをコピーするだけで、Native の依存関係を更新する必要がないことがわかっている場合にこのコマンドを使えば高速になります。

### Android プロジェクトを開く

プロジェクトを Android Studio で開く時、実行してください。

```bash
npx cap open android
```

### アプリの実行

> **Note:** 現在、Android エミュレータを使用するには、API24 上で少なくとも Android バージョン 7.0 のシステムイメージを使用する必要があります。これは、System WebView バージョンがエミュレータ上で更新できないためです。System WebView がアップデートされていれば、物理デバイスは Android 5.0(API21)程度で動作するはずです。

Android Studio を開くと、デバイスまたはエミュレータ上でアプリを実行できるようになるはずです。「Run」 または 「Debug」 をクリックします:

![Running App](/assets/img/docs/android/running.png)

### トラブルシューティング

上記の問題が発生した場合は、レポジトリで問題を報告し、[Troubleshooting Android](/docs/android/troubleshooting) ページで、Android の一般的な問題の解決方法をご確認ください。

### 次のステップ

アプリケーションが動作したら、アプリケーションの開発と構築を続ける準備ができています。使用可能なさまざまな API、Capacitor プラグイン、Cordova プラグイン、またはカスタム Native コードを使用して、残りのアプリケーションを構築します。

## 詳細情報

アプリのパーミッション設定、依存関係の更新、ビルドの詳細、プラグインなどについては、
以下の Android 専用ガイドを参照してください:

[Configuring and setting permissions for Android &#8250;](/docs/android/configuration)

[Building Native Plugins for Android &#8250;](/docs/plugins)
