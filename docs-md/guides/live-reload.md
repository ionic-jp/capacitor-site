---
title: ライブリロード
description: デバイスやシュミレーター上でWebとネイティブ機能を簡単にライブリロードで検証する方法
url: /docs/guides/live-reload
contributors:
  - dotNetkow
---

# ライブリロード

ライブリロードは、アプリのウェブ部分とデバイスハードウェアやシミュレータのネイティブ機能の両方をデバッグするのに便利です。コードを変更するたびに新しいネイティブバイナリをデプロイするのではなく、アプリの変更が検出されるとブラウザ(またはWebビュー)を自動的にリロードします。

> デバイス上で実行している場合は、そのデバイスがコンピュータと同じWi-Fiネットワーク上にあることを確認します。

## Ionic CLIを利用する

Ionic CLIには完全なライブリロードエクスペリエンスが含まれており、以下で手動で説明するすべての手順が自動化されています。 `native-run` (デバイスやシミュレータ/エミュレータ上でネイティブバイナリを実行するためのクロスプラットフォームコマンドラインユーティリティ)と一緒にインストールします:

```bash
npm install -g @ionic/cli native-run
```

次に `ionic cap run` コマンドをつかってライブリロードプロセスを開始します:

```bash
ionic cap run android -l --external
ionic cap run ios -l --external
```

これによって `ionic build` を行い、Webアセットをネイティブプラットフォームにコピーします。そしてネイティブプロジェクトのIDEを開きます(Xcode for iOS, Android Studio for Android)。

`capacitor.config.json` の設定を読み込んで `server` が自動的に起動しますが、コマンドを終了すると自動的に削除されます。 `ionic cap run` コマンドの詳しくは、 [こちらをご覧ください](https://ionicframework.com/docs/cli/commands/capacitor-run)。


## Framework CLIを使う

Capacitorライブリロード機能を備えたCLIをサポートしています。

まず、LAN上のコンピュータのIPアドレスを確認します。

- macOSの場合、 `ifconfig` を実行します。 IPアドレスは、 `inet` の後の `en0` エントリの下に表示されます。または、システム環境設定->ネットワーク->(アクティブなネットワークを選択)を開き、ステータスに表示されているIPを探します。
- Windowsの場合、`ipconfig` を実行して `IPv4` addressをご確認ください。

次に、ローカルWebサーバーを起動します。LANからアクセスできるようにするには、サーバーを `0.0.0.0` にバインドする必要があります。実行するコマンドはさまざまですが、通常は次のようになります:

```bash
npm run start
```

> react-scriptsでは `HOST=0.0.0.0 npm run start` を使ってください。

`capacitor.config.json` の中で、 `server` キーをつくって、 `url` フィールドにローカルWebサーバーのIPアドレスとポートを設定します:

```json
"server": {
  "url": "http://192.168.1.68:8100",
  "cleartext": true
},
```

次に `npx cap copy` を実行して、Capacitorの設定とWebアセットをネイティブプロジェクトにコピーします。

ネイティブIDEを開いていない場合は開いてください:

```bash
npx cap open ios
npx cap open android
```

最後に、Runボタンをクリックしてアプリを起動し、ライブリロードを使い始めます。

> サーバー構成をコミットしないように注意してください。
