---
title: Building a Capacitorプラグイン
description: Capacitorプラグインの構築 - プラグインのパッケージ化
contributors:
  - eric-horodyski
---

# プラグインのパッケージ化

`ScreenOrientation` プラグインは機能的に完全であり、ローカルプラグインとして Capacitor アプリケーションに統合されています。しかし、`ScreenOrientation`プラグインは現在の状態では他の Capacitor アプリケーションから使用することができません。

それでは、`ScreenOrientation` プラグインをグローバルに利用できるようにするために、プラグインを公開用にパッケージングしてみましょう。

> **注意:** このセクションでは、Capacitor ドキュメントの Creating Capacitor プラグイン部分の手順と手続きを参照しています。このチュートリアルの範囲外の詳細については、ドキュメントを参照してください。

## 新しいプラグインプロジェクトをつくる

Capacitor には、グローバルプラグインを公開するのに適した形式でプロジェクトの土台を作るために使用できる <a href="https://github.com/ionic-team/create-capacitor-plugin" target="_blank">プラグインジェネレータ</a> があります。

新しくターミナルを開いて、以下のコマンドを実行ください:

```bash
npx @capacitor/create-plugin \
  --name @capacitor-community/screen-orientation \
  --package-id io.ionic.plugins.screenorientation \
  --class-name ScreenOrientation \
  --repo "https://ionic.io" \
  --license "MIT" \
  --description "Work with the screen orientation in a common way for iOS, Android, and web"
```

ディレクトリを指定するプロンプトが表示されたら、Enter キーを押してデフォルトを使用します。作者名を聞かれたら、自分の名前を使うこと！

## プラグインのコードを移植する

生成されたプロジェクトの構成を見てください。Capacitor アプリケーションのために構築された構成と非常によく似ていますね。🤔

明らかに、これは Capacitor アプリケーションのコードベースから生成されたプラグインプロジェクトにプラグインコードを簡単に移植するための意図的なものです。

`src/plugins/screen-orientation` にあるファイルの内容を、プラグインプロジェクトの `web.ts`, `index.ts`, `definitions.ts` ファイルにコピーしてください。

次に、`ScreenOrientation.swift`, `ScreenOrientationPlugin.m`, `ScreenOrientationPlugin.swift` の内容を、一方のコードベースからもう一方のコードベースにコピーしてください。

次に、`ScreenOrientation.java` と `ScreenOrientationPlugin.java` について同じことをします。その後、プラグインプロジェクト内のこれらのファイルのパッケージを更新します:

```java
package io.ionic.plugins.screenorientation
```

上記のパッケージ名は、プラグインプロジェクトを生成する際に提供されたもので、プロジェクト内の Android ファイルはこのパッケージ名を使用する必要があります。

最後に、以下のコマンドを実行して、コードを移植する際に問題が発生しないことを確認しましょう:

```bash
npm run verify
```

> **Note:** Capacitor プロジェクトにプラグインフォルダをリンクすることで、公開前にプラグインをテストすることができます。詳しくは、 <a href="https://capacitorjs.com/docs/plugins/workflow#local-testing" target="_blank">プラグイン開発ワークフロー</a> をご覧ください。

## プラグインのドキュメンテーションをアップデート

プラグインプロジェクトの `README.md` ファイルを見てください。プラグインの API に関するドキュメントが更新されています。この更新は `npm run verify` を実行したときに行われました。ソースファイルの JSDoc コメントを変更した場合は、 `npm run docgen` を実行することで、Readme ファイルの API セクションに反映させることができます。

このプラグインは、開発者が Capacitor アプリケーションの `AppDelegate.swift` ファイルを修正する必要があるので、その方法はプラグインのドキュメントに含まれているはずです。

> **注意:** 開発者がビルドしたプラグインをインストールしたり設定したりする際に必要な修正は、必ず文書化してください。

`README.md` の "Install" セクションを以下のようなマークダウンに置き換えてください:

<pre>
## Install

```bash
npm install @capacitor-community/screen-orientation
npx cap sync
```

### iOS

For iOS, you must make the following adjustments to your `AppDelegate.swift` file:

```diff
import UIKit
...snip...
+ import CapacitorCommunityScreenOrientation

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    ...snip...
+   func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
+     return ScreenOrientationPlugin.supportedOrientations
+  }
    ...snip...
}
```
</pre>

## プラグインの公開

プラグインは、npm レジストリに公開できる状態にあります。このチュートリアルではこれを行いませんが、Capacitor プラグインプロジェクトを公開するコマンドは、他の npm パッケージの公開と同じであることに注意してください： `npm publish`

グローバルな Capacitor プラグインを npm のパブリックレジストリ、プライベートレジストリに公開するか、マシン上のローカルの一連のプロジェクトにリンクすることができます。ユースケースに合うものは何でも。

さらに、<a href="https://github.com/capacitor-community/welcome" target="_blank">Capacitor Community GitHub organization</a>では、プラグインをホストしてもらい、コミュニティや Capacitor チームと密接に協力しながら、プラグインの開発やメンテナンスを継続することができます。

## まとめ

Capacitor のプラグイン API は、特定のアプリケーションにカスタムネイティブコードを追加したり、複数のアプリ間でネイティブコードを再利用する必要がある場合でも、Web では利用できないネイティブ機能で Capacitor アプリケーションを補完する柔軟で堅牢なソリューションです。

皆さんが開発するプラグインを楽しみにしています。🎉
