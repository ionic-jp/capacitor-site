---
title: Ionic FrameworkでのCapacitorの使用
description: Ionic FrameworkでのCapacitorの使用
contributors:
  - dotNetkow
---

# Ionic Framework での Capacitor の使用

## インストール

Capacitor は、新規または既存の Ionic アプリに直接インストールすることができます。

### 新規 Ionic プロジェクト

新規の Ionic アプリには、デフォルトで Capacitor がインストールされています。新規にプロジェクトを立ち上げるだけです。

```bash
ionic start
```

> 初めての Ionic/Capacitor アプリを作るためのチュートリアルをご希望の方は、 [このチュートリアル](https://ionicframework.com/docs/intro/next) をご覧ください。

### 既存の Ionic プロジェクト

アプリ名とバンドル ID で Capacitor をインストールして初期化します:

```bash
ionic integrations enable capacitor
```

Ionic Framework makes use of the APIs in the following plugins:

- [**App**](/docs/apis/app)
- [**Haptics**](/docs/apis/haptics)
- [**Keyboard**](/docs/apis/keyboard)
- [**StatusBar**](/docs/apis/status-bar)

For the best user experience, you should make sure these plugins are installed even if you don't import them in your app:

```bash
npm install @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar
```

If your Ionic app uses Cordova, you will want to read the [Migrating from Cordova to Capacitor guide](/docs/cordova/migrating-from-cordova-to-capacitor) as well.

### プラットフォームの追加

Capacitor のインストールが完了したら、アプリにネイティブプラットフォームを追加します。

```bash
ionic capacitor add
```

これにより、プロジェクトのルートにネイティブプラットフォーム用の新しいディレクトリが作成されます。このディレクトリは、ソースアーティファクトとみなされるべきネイティブプロジェクトです。[ネイティブプロジェクト管理](/docs/cordova#native-project-management)についてはこちらをご覧ください。

## ワークフロー

### Ionic アプリの構築

Capacitor の JavaScript ライブラリはアプリにバンドルされていますので、Web アセットのビルドは Capacitor をインストールした後と変わりません。

```bash
ionic build
```

これにより、Capacitor がネイティブプロジェクトにコピーする Web アセットディレクトリが作成されます。これは、[Capacitor の設定](/docs/config)の`webDir`で設定します。

### Ionic CLI の Capacitor コマンド

Ionic CLI には、便利なように Capacitor CLI をラップした様々なハイレベルコマンドが用意されています。以下、それぞれのドキュメントを参照してください。また、各コマンドの後に `--help` フラグを使用することで、ヘルプ出力を利用できます。

- [`ionic capacitor add`](https://ionicframework.com/docs/cli/commands/capacitor-add)
- [`ionic capacitor build`](https://ionicframework.com/docs/cli/commands/capacitor-build)
- [`ionic capacitor run`](https://ionicframework.com/docs/cli/commands/capacitor-run)
- [`ionic capacitor sync`](https://ionicframework.com/docs/cli/commands/capacitor-sync)
- [`ionic capacitor open`](https://ionicframework.com/docs/cli/commands/capacitor-open)

[詳しく Capacitor の開発ワークフローを学ぶ &#8250;](/docs/basics/workflow)
