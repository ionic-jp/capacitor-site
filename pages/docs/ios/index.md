---
title: Capacitor iOS ドキュメンテーション
description: JavaScriptとNativeSwift（もしくはObjective-C）コードの連携
contributors:
  - dotNetkow
  - mlynch
---

# Capacitor iOS ドキュメンテーション

Capacitor は Native の iOS ブリッジを特徴としており、開発者は JavaScript と Native Swift または Objective-C コードとの間で通信できます。

Capacitor iOS アプリは、Xcode を通じて設定、管理し、CocoaPods が依存関係を管理します。

## Getting Started

iOS アプリを構築するには、Xcode11 や Xcode コマンドラインツールなど、いくつかの iOS 開発依存関係をインストールする必要があります。

> Note: Ionic Appflow の [Package feature](https://ionicframework.com/docs/appflow/package/intro) サービスを利用するなど、Mac を使わずに iOS アプリを開発、ビルドすることも可能です。詳細については、選択したサービスを参照してください。

### iOS アプリの作成

デフォルトでは、すべての Capacitor プロジェクトに対して iOS プロジェクトが作成されます。
既存のプロジェクトに Capacitor を追加する場合は、次を使用して iOS プロジェクトを手動で追加できます。

```bash
npx cap add ios
npx cap sync
```

`sync` コマンドは依存関係を更新し、Web アセットをプロジェクトにコピーします。このように実行することもできます:

```bash
npx cap copy
```

Web アセットのみをコピーするだけで、Native の依存関係を更新する必要がないことがわかっている場合にこのコマンドを使えば高速になります。

### iOS プロジェクトを開く

プロジェクトを Xcode で開く時、実行してください。

```bash
npx cap open ios
```

### アプリの実行

Xcode を開いたら、 Play ボタンをクリックして、シミュレータ、またはデバイス上でアプリを実行します。

![Running your app](/assets/img/docs/ios/running.png)

## 次のステップ

アプリケーションが動作したら、アプリケーションの開発と構築を続ける準備ができています。使用可能なさまざまな API、Capacitor プラグイン、Cordova プラグイン、またはカスタム Native コードを使用して、残りのアプリケーションを構築します。

## Further Reading

各トピックの詳細は、次のガイドを参照してください:

[Configuring and setting permissions for iOS &#8250;](/docs/ios/configuration)

[Building Native Plugins for iOS &#8250;](/docs/plugins)
