---
title: Capacitor iOS ドキュメンテーション
description: JavaScriptとNativeSwift（もしくはObjective-C）コードの連携
contributors:
  - dotNetkow
  - mlynch
---

# Capacitor iOS ドキュメンテーション

CapacitorはNativeのiOSブリッジを特徴としており、開発者はJavaScriptとNative SwiftまたはObjective-Cコードとの間で通信できます。

Capacitor iOSアプリは、Xcodeを通じて設定、管理し、CocoaPodsが依存関係を管理します。

## Getting Started

iOSアプリを構築するには、Xcode11やXcodeコマンドラインツールなど、いくつかのiOS開発依存関係をインストールする必要があります。

> Note: Ionic Appflowの [Package feature](https://ionicframework.com/docs/appflow/package/intro) サービスを利用するなど、Macを使わずにiOSアプリを開発、ビルドすることも可能です。詳細については、選択したサービスを参照してください。

### iOSアプリの作成

デフォルトでは、すべてのCapacitorプロジェクトに対してiOSプロジェクトが作成されます。
既存のプロジェクトにCapacitorを追加する場合は、次を使用してiOSプロジェクトを手動で追加できます。

```bash
npx cap add ios
npx cap sync
```

`sync` コマンドは依存関係を更新し、Webアセットをプロジェクトにコピーします。このように実行することもできます:

```bash
npx cap copy
```

Webアセットのみをコピーするだけで、Nativeの依存関係を更新する必要がないことがわかっている場合にこのコマンドを使えば高速になります。

### iOSプロジェクトを開く

プロジェクトをXcodeで開く時、実行してください。

```bash
npx cap open ios
```

### アプリの実行

Xcodeを開いたら、 Playボタンをクリックして、シミュレータ、またはデバイス上でアプリを実行します。

![Running your app](/assets/img/docs/ios/running.png)

## 次のステップ

アプリケーションが動作したら、アプリケーションの開発と構築を続ける準備ができています。使用可能なさまざまなAPI、Capacitorプラグイン、Cordovaプラグイン、またはカスタムNativeコードを使用して、残りのアプリケーションを構築します。

## Further Reading

各トピックの詳細は、次のガイドを参照してください:

[Configuring and setting permissions for iOS &#8250;](/docs/ios/configuration)

[Building Native Plugins for iOS &#8250;](/docs/plugins)
