---
title: iOSの設定
description: iOSの設定
url: /docs/ios/configuration
contributors:
  - dotnetkow
  - mlynch
---

# iOSの設定

## `Info.plist` を設定する

iOS開発者は、自分のアプリの主な設定ファイルである `Info.plist` ファイルを使いこなすことに慣れておくべきです。このファイルは、Capacitorプラグインが必要とする可能性のある新しい設定、アプリの追加設定、およびアプリが要求する権限のために頻繁に更新されます。

一般的に、このファイルを修正する最も簡単な方法は、Xcodeでプロジェクトを開いて(`npx cap open ios`)、Xcodeのプロパティリストエディタでファイルを編集することです。 `Info.plist` の各設定には、低レベルのパラメータ名と高レベルの名前があります。デフォルトでは、プロパティリストエディタには上位レベルの名前が表示されますが、生の下位レベル名の表示に切り替えると便利なことがよくあります。これを行うには、プロパティリストエディタ内の任意の場所を右クリックし、"Show Raw Keys / Values" を切り替えます。

フードの下には `Info.plist` のプレーンなXMLファイルがあり、必要に応じて直接編集できます。この場合、 `Info.plist` の `<key>` valuesには必ず低レベルのパラメータ名を使用してください。

一部のプラグインとSDKは低レベルのキーを使用して設定を表示し、他のものは高レベルのキーを使用します。それらの間のマッピングに慣れましょう。

この[Cocoa Keys](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html)リストには、`Info.plist`の設定可能な多数の設定オプションが表示されています。

## 権限を管理する

Androidとは異なり、iOSの許可は事前に指定する必要はありません。代わりに、特定のプラグインまたはSDKを使用しているときにプロンプ​​トが表示されます。

ただし、iOSのアクセス許可の多くには、`Info.plist`で定義されている"Usage Descriptions"と呼ばれるものが必要です。これらの設定は、アプリが要求する各許可について人間が読める形式で説明する必要があります。

アプリに必要となる可能性のあるさまざまな使用法の説明設定を確認するには、[Cocoa Keys](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html)リストに含まれるUsageDescriptionキーを調べてください。

詳細については、Appleは、[Resolving the Privacy-Sensitive Data App Rejection](https://developer.apple.com/library/content/qa/qa1937/_index.html)ガイドを提供しています。これには、使用方法の説明が必要なAPIに関する詳細情報が含まれています。

## Entitlementsを設定する

Entitlementsは、アプリが必要とする可能性がある主な機能を有効にするために使用されます。

特定の設定オプションや使用方法の説明とは異なり、Entitlementsは`Info.plist`とは異なり、Xcode内の特別な領域で設定されます。

プラグインに特定の権限が必要な場合は、Xcodeでアプリケーションを開き、左側のプロジェクトメニューでプロジェクト名をクリックし、タブバーで `Capabilities` を選択します。

## アプリケーションのデフォルト名 `App` を変更する

Appフォルダ名を変更することはできませんが、"App"という"target"の名前を変更することはできます。

XCodeでは、以下のようになります:
```
PROJECT
  App
-------
TARGET
  App
```
TARGETの下にある"App"という名前をクリックすると、アプリの名前を変更できます。

また、Podfileを変更して、現在のTARGETの名前を適宜変更する必要があります。

デフォルトのPodfileには `'App'` ターゲットがありますが、<a href="https://github.com/ionic-team/capacitor/blob/master/ios-template/App/Podfile#L16" target="_blank">ここで新しい名前に置き換える</a>必要があります。

## Deeplinks (aka Universal Links)

Deep Linksのガイドは [こちら](/docs/guides/deep-links) をご覧ください。
