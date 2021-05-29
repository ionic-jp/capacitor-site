---
title: iOSの設定
description: iOSの設定
contributors:
  - dotnetkow
  - mlynch
---

# iOS の設定

## `Info.plist` を設定する

iOS 開発者は、自分のアプリの主な設定ファイルである `Info.plist` ファイルを使いこなすことに慣れておくべきです。このファイルは、Capacitor プラグインが必要とする可能性のある新しい設定、アプリの追加設定、およびアプリが要求する権限のために頻繁に更新されます。

これを修正するには、 [Xcode でプロジェクトを開き](/docs/ios#opening-the-ios-project) 、**App**プロジェクトと**App**ターゲットを選択し、**Info**タブをクリックします。

![Xcode info editor](/assets/img/docs/ios/xcode-info-editor.png)

> テーブル上で右クリックして、コンテキストメニューの**Raw Keys & Values**をチェックすると、真のキー名を表示することができます。
>
> また、手動で `ios/App/App/Info.plist` ファイルを開いて編集し、生のキーを調べることもできます。可能なキーのリストについては、 [this reference documentation](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html) をご利用ください。

## パーミッションの管理

iOS のパーミッションは、Android のように明示的に指定する必要はありません。しかし、iOS では `Info.plist` に "Usage Descriptions" を定義する必要があります。これらの設定は、特定のデバイス API に対するパーミッションが要求されたときに、エンドユーザに提示される人間が読める説明です。

アプリに必要となる様々な使用説明の設定を確認するには、[Cocoa Keys](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html) の `UsageDescription` を含むキーのリストを参照してください。

詳細については、Apple が提供している[Resolving the Privacy-Sensitive Data App Rejection](https://developer.apple.com/library/content/qa/qa1937/_index.html) のガイドに、使用説明を必要とする API に関する詳細情報が記載されています。

## Capabilities の設定

Capabilities は、アプリが必要とする主要な機能を有効にするために使用します。Capacitor のプラグインが必要とするときは、いつでも設定する必要があります。

他の設定オプションや使い方の説明とは異なり、ケイパビリティは `Info.plist` で設定することはできません。

新しいケイパビリティを追加するには、 [Xcode でアプリを開き](/docs/ios#opening-the-ios-project) 、**App**プロジェクトと**App**ターゲットを選択し、タブバーの**Signing & Capabilities**をクリックして、**+ Capability**ボタンをクリックします。iOS の機能については、 [本記事](https://developer.apple.com/documentation/xcode/adding_capabilities_to_your_app) をご参照ください。

![Xcode Capabilities](/assets/img/docs/ios/xcode-capabilities.png)

## アプリの名前の変更

App`ディレクトリの名前を変更することはできませんが、**App**ターゲットの名前を変更することで、アプリの名前を設定することができます。

App**ターゲットの名前を変更するには、[Xcode でプロジェクトを開き](/docs/ios#opening-the-ios-project)、**App**プロジェクトを選択して、**App\*\*ターゲットをダブルクリックします。

![Xcode Target](/assets/img/docs/ios/xcode-target.png)

次に、`ios/App/Podfile`を開き、ファイルの一番下にある現在のターゲットの名前を変更します:

```diff-ruby
-target 'App' do
+target 'MyRenamedApp' do
   capacitor_pods
   # Add your Pods here
 end
```

## ディープリンク (別名「ユニバーサルリンク」)

ディープリンクのガイドは、[こちら](/docs/guides/deep-links)をご覧ください。
