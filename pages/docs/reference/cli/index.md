---
title: CLIコマンド
description: Capacitor CLIリファレンスリスト
contributors:
  - dotNetkow
---

# Capacitor CLIリファレンス

Capacitorのコマンドラインインターフェイス(CLI) ツールは、Capacitorアプリの開発に使用されます。 [ここ](/docs/getting-started) でインストールの詳細を表示します。

## Add

あなたのプロジェクトにNativeプラットフォームを追加します。

```bash
npx cap add <platform>
```

<strong>Inputs:</strong>
- `platform` (required): `android`, `ios`

## Cap

すべての利用可能なCLIのコマンドとオプションを表示します。

```bash
npx cap [-V] [-h]
```

<strong>Options:</strong>
- `-V, --version` (optional): バージョンを出力します
- `-h, --help` (optional): 利用できる情報を出力します。個別のコマンドについても利用できます。

## Copy

WebアプリのビルドファイルとCapacitorの設定ファイルをNativeのプラットフォームプロジェクトにコピーします。Webアプリケーションに変更を加えたり、 `capacitor.config.json` を変更したりするたびに、これを実行します。

```bash
npx cap copy [platform]
```

<strong>Inputs:</strong>
- `platform` (optional): `android`, `ios`

<strong>Example output:</strong>
```
√ Copying web assets from www to android\app\src\main\assets\public in 2.64s
√ Copying web assets from www to ios/App/public in 450ms
√ Copying native bridge in 7.32ms
√ Copying capacitor.config.json in 3.22ms
√ copy in 2.74s
√ copy in 1.10ms
```

## Create

新しくプロジェクトをはじめて、UI/フロントエンドフレームワークを個別に追加する場合は、標準プロジェクト構造で新規のCapacitorプロジェクトを作成します。

```bash
npx @capacitor/cli create [options] [directory] [name] [id]
```

<strong>Inputs:</strong>
- `directory` (optional): Directory to create the new app in, such as `c:\src\myapp`
- `name` (optional): App name
- `id` (optional): App Package Id (in Java package format, no dashes), such as `com.example.app`

<strong>Options:</strong>
- `--npm-client <npmClient>`: npm client to use for dependency installation

## Doctor

各Nativeプロジェクトで一般的なエラーを確認し、使用可能な最新のCapacitorの依存関係と現在インストールされている依存関係を比較します。

```bash
npx cap doctor [platform]
```

<strong>Inputs:</strong>
- `platform` (optional): `android`, `ios`

<strong>Example output:</strong>
```
Latest Dependencies:
  @capacitor/cli: 2.2.0
  @capacitor/core: 2.2.0
  @capacitor/android: 2.2.0
  @capacitor/ios: 2.2.0

Installed Dependencies:
  @capacitor/ios not installed
  @capacitor/cli 2.1.0
  @capacitor/core 2.1.0
  @capacitor/android 2.1.0
```

## Init

既存のWebアプリケーション内でCapacitorプロジェクトを初期化します。指定されたすべての値(アプリケーション名、アプリケーションID、WebDirなど)が `capacitor.config.json` に書き込まれます。

```bash
npx cap init [options] [appName] [appId]
```

<strong>Inputs:</strong>
- `appName` (optional): Name of app
- `appId` (optional): App Package Id (in Java package format, no dashes), such as `com.example.app`

<strong>Options:</strong>
 - `--web-dir <value>`: Directory of your project's built web assets (default: `www`)
 - `--npm-client <npmClient>`: npm client to use for dependency installation

## List

インストールされているすべてのCordovaプラグインとCapacitorプラグインを一覧表示します。

```bash
npx cap ls [platform]
```

<strong>Inputs:</strong>
- `platform` (optional): `android`, `ios`

<strong>Example output:</strong>
```
Found 1 Capacitor plugin for android:
    capacitor-mapbox (0.0.1)
Found 2 Cordova plugins for android:
    cordova-plugin-camera
    cordova-plugin-splashscreen
```

## Open

指定したNativeIDE (Xcode for iOS, Android Studio for Android)でNativeプロジェクトのワークスペースを開きます。アプリケーションを開いたら、NativeIDEを使用して、デバイス上でアプリケーションを構築、シミュレート、および実行します。

```bash
npx cap open <platform>
```

<strong>Inputs:</strong>
- `platform` (required): `android`, `ios`

## Plugin Generate

新しくカスタムCapacitorプラグインを作成します。新しいプラグインに関する情報を入力するウィザードが起動します。プラグインの開発に関する詳細は[こちら](/docs/plugins) .

```bash
# Capacitor CLI already installed in project
npx cap plugin:generate

# Capacitor CLI not installed
npx @capacitor/cli plugin:generate
```

## Serve

`capacitor.config.json` で指定された `webDir` ディレクトリを使用して、ブラウザでCapacitor Progressive Web Appを提供します。。

```bash
npx cap serve
```

## Sync

[Copy](#copy) と [Update](#update) を同時に実行します。

```bash
npx cap sync [options] [platform]
```

<strong>Inputs:</strong>
- `platform` (optional): `android`, `ios`

<strong>Options:</strong>
- `--deployment`: Podfile.lock won't be deleted and pod install will use `--deployment` option.

<strong>Example output:</strong>
```
√ Copying web assets from www to android\app\src\main\assets\public in 3.37s
√ Copying native bridge in 5.80ms
√ Copying capacitor.config.json in 2.59ms
√ copy in 3.43s
√ Updating Android plugins in 11.48ms
  Found 1 Capacitor plugin for android:
    capacitor-mapbox (0.0.1)
√ update android in 105.91ms
√ copy in 409.80μp
√ update web in 6.80μp
Sync finished in 3.563s
```

## Update

Nativeプラグインと依存関係を `package.json` を参照してアップデートします。

```bash
npx cap update
```

<strong>Inputs:</strong>
- `platform` (optional): `android`, `ios`

<strong>Options:</strong>
- `--deployment`: Podfile.lock won't be deleted and pod install will use `--deployment` option.
