---
title: ライブリロード
description: デバイスやシュミレーター上でWebとNative機能を簡単にライブリロードで検証する方法
contributors:
  - dotNetkow
---

# ライブリロード

ライブリロードは、アプリのウェブ部分とデバイスハードウェアやシミュレータの Native 機能の両方をデバッグするのに便利です。コードを変更するたびに新しい Native バイナリをデプロイするのではなく、アプリの変更が検出されるとブラウザ(または Web ビュー)を自動的にリロードします。

> デバイス上で実行している場合は、そのデバイスがコンピュータと同じ Wi-Fi ネットワーク上にあることを確認します。

## Ionic CLI を利用する

Ionic CLI には完全なライブリロードエクスペリエンスが含まれており、以下で手動で説明するすべての手順が自動化されています。 `native-run` (デバイスやシミュレータ/エミュレータ上で Native バイナリを実行するためのクロスプラットフォームコマンドラインユーティリティ)と一緒にインストールします:

```bash
npm install -g @ionic/cli native-run
```

次に `ionic cap run` コマンドをつかってライブリロードプロセスを開始します:

```bash
ionic cap run android -l --external
ionic cap run ios -l --external
```

これによって `ionic build` を行い、Web アセットを Native プラットフォームにコピーします。そして Native プロジェクトの IDE を開きます(Xcode for iOS, Android Studio for Android)。

`capacitor.config.json` の設定を読み込んで `server` が自動的に起動しますが、コマンドを終了すると自動的に削除されます。 `ionic cap run` コマンドの詳しくは、 [こちらをご覧ください](https://ionicframework.com/docs/cli/commands/capacitor-run)。

## Framework CLI を使う

Capacitor ライブリロード機能を備えた CLI をサポートしています。

まず、LAN 上のコンピュータの IP アドレスを確認します。

- macOS の場合、 `ifconfig` を実行します。 IP アドレスは、 `inet` の後の `en0` エントリの下に表示されます。または、システム環境設定->ネットワーク->(アクティブなネットワークを選択)を開き、ステータスに表示されている IP を探します。
- Windows の場合、`ipconfig` を実行して `IPv4` address をご確認ください。

次に、ローカル Web サーバーを起動します。LAN からアクセスできるようにするには、サーバーを `0.0.0.0` にバインドする必要があります。実行するコマンドはさまざまですが、通常は次のようになります:

```bash
npm run start
```

> react-scripts では `HOST=0.0.0.0 npm run start` を使ってください。

`capacitor.config.json` の中で、 `server` キーをつくって、 `url` フィールドにローカル Web サーバーの IP アドレスとポートを設定します:

```json
"server": {
  "url": "http://192.168.1.68:8100",
  "cleartext": true
},
```

次に `npx cap copy` を実行して、Capacitor の設定と Web アセットを Native プロジェクトにコピーします。

NativeIDE を開いていない場合は開いてください:

```bash
npx cap open ios
npx cap open android
```

最後に、Run ボタンをクリックしてアプリを起動し、ライブリロードを使い始めます。

> サーバー構成をコミットしないように注意してください。
