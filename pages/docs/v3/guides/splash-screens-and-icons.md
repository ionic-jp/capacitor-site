---
title: スプラッシュスクリーンとアイコンの作成
description: cordova-resを使用してネイティブプロジェクトのリソースイメージを生成します。
contributors:
  - dotNetkow
---

# スプラッシュスクリーンとアイコンの作成

スプラッシュスクリーンとアイコンの生成に対応しました。詳細は [cordova-res docs](https://github.com/ionic-team/cordova-res) をご覧ください。

まず、`cordova-res`をインストールします。

```bash
npm install -g cordova-res
```

`cordova-res` は、Cordova のような構造を想定しています。つまり、アイコンとスプラッシュスクリーンのファイルを、プロジェクト内のトップレベルの `resources` フォルダに、次のように配置します:

```
resources/
├── icon.png
└── splash.png
```

次に、以下を実行してすべてのイメージを生成し、それをネイティブプロジェクトにコピーします:

```bash
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```
