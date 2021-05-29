---
title: Capacitor Android ドキュメンテーション
description: Capacitor Android ドキュメンテーション
contributors:
  - mlynch
  - jcesarmobile
---

# Capacitor Android ドキュメンテーション

Capacitor は Native の Android ランタイムを特徴としており、開発者は JavaScript と Native Java for Android コード間で通信することができます。

Capacitor の Android アプリは、Android Studio で設定・管理されています。

## Android サポート

API 21+（Android 5 以降）に対応しており、 [Android 市場の 95%以上を占めています](https://gs.statcounter.com/android-version-market-share/mobile-tablet/worldwide) 。Capacitor は、Chrome バージョン 60 以降の Android WebView が必要です。Android 5 および 6 の場合、Capacitor は [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview) を使用します。Android 7 以上では、[Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome) を使用します。

## Android プラットフォームの追加

まず、`@capacitor/android`パッケージをインストールします。

```bash
npm install @capacitor/android
```

そして Androi プラットフォームを追加します。

```bash
npx cap add android
```

## Android プロジェクトのオープン

Android Studio でプロジェクトを開くには、次のように実行します:

```bash
npx cap open android
```

あるいは、Android Studio を開いて、 `android/` ディレクトリを Android Studio プロジェクトとしてインポートすることもできます。

## アプリの実行

作成したアプリは、コマンドラインまたは Android Studio で実行することができます。

> Android エミュレータを使用するには、API 24+のシステムイメージを使用する必要があります。エミュレータでは、System WebView は自動的に更新されません。物理デバイスの場合は、システム WebView が更新されていれば、API 21 以下で動作します。

### コマンドラインでの実行

物理デバイスやエミュレータでプロジェクトを実行するには、次のように実行します:

```bash
npx cap run android
```

コマンドを実行すると、ターゲットを選択するように促されます。詳しくは [`run`](/docs/cli/run) をご覧ください。

### Android Studio での実行

Android Studio では、まずデバイスやエミュレータを選択し、実行またはデバッグボタンをクリックしてアプリを実行します。Java や Kotlin のコードをデバッグするのでなければ、実行ボタンが好ましいでしょう。

![Running App](/assets/img/docs/android/running.png)

## トラブルシューティング

使い始めてすぐに何か問題が発生した場合は、 [Android トラブルシューティングガイド](/docs/android/troubleshooting) を参考にしてください。お困りの方は、お気軽に [ディスカッションを開いて](https://github.com/ionic-team/capacitor/discussions/) までご連絡ください。

## 次のステップ

アプリが動作すれば、アプリの開発と構築を続ける準備が整いました。様々な API、Capacitor や Cordova のプラグイン、またはカスタムネイティブコードを使用して、アプリの残りの部分を構築してください。

## Further Reading

アプリのパーミッションの設定、依存関係の更新、プラグインの構築などの詳細については、以下の Android 固有のガイドを参照してください。

[Android の設定とパーミッションの設定 &#8250;](/docs/android/configuration)

[Android 用のネイティブプラグインを作る &#8250;](/docs/plugins)
