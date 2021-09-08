---
title: iOSトラブルシューティングガイド
description: iOSトラブルシューティングガイド
contributors:
  - dotNetkow
  - mlynch
  - ryanccn
---

# iOS トラブルシューティングガイド

100％完璧な Native 管理ツールを作成するのはほぼ不可能です。遅かれ早かれ iOS ワークフローの一部でさまざまな問題に遭遇するでしょう。

このガイドでは、考えられる解決策とともに一般的な iOS / Xcode の問題を文書化することを試みます。

## iOS Toolbox

iOS 開発者は誰でも、iOS の問題をデバッグするためのいくつかの一般的なテクニックを学んでおり、これらを自分のワークフローに組み込む必要があります。

### Google, Google, Google

iOS や Xcode で何か問題が発生した場合、最初のステップは Google 検索にエラーをコピペすることです。

Capacitor は標準的な iOS ツールチェーンを使用していますので、あなたが何かに遭遇した場合、多くの iOS 開発者も同様に遭遇している可能性があり、そこには解決策があるはずです。

依存関係の更新、クリーン実行、派生データの削除などの簡単な方法があります。

### Clean/Rebuild

Clean と Rebuild を行うことで、多くのビルドの問題を解決することができます。Xcode メニューの Product -> Clean Build Folder を選択して、現在のビルドをクリーンアップします。

### 派生データの削除

Xcode は古い、時代遅れのビルドアーティファクトに固執することがあります。新たに始めるには、ディスク上の派生データを削除する必要があります。

これを行うには、Xcode の環境設定を開き、Locations タブを選択して、Derived Data パスの横にある小さな矢印をクリックします:

![Locations](/assets/img/docs/ios/location-prefs.png)

これにより、Xcode の一時的な Derived Data の場所に Finder ウィンドウが開きます。

次に、そのディレクトリ内のすべてのアイテムを選択し、削除します:

![Deleting Derived Data](/assets/img/docs/ios/deleting-derived-data.png)

最後に、Xcode でリビルドを行います。

## Error: Sandbox not in sync with the Podfile.lock

このエラーは、CocoaPods が依存関係をインストールするために実行できなかった場合に起こります。

これを実行して Pod を更新してください。

```bash
npx cap update ios
```

このコマンドを実行した後、新規にビルドを行います。

## Indexing FOREVER

Xcode は時々、永遠にインデックス作成に行き詰まることがあります。この不幸な状況は次のようなものです:

![Xcode indexing](/assets/img/docs/ios/indexing.png)

唯一の解決策は、アクティビティモニタを使って Xcode を強制終了し、再度起動させることです。

## Apple Silicon: `ffi` Bus Error

If you're using an Apple Silicon-powered Mac, you might encounter something like this when running `npx cap update`:

```
[error] Analyzing dependencies
        /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.3/lib/ffi/library.rb:275: [BUG] Bus Error at 0x0000000000000000
        ruby 2.6.3p62 (2019-04-16 revision 67580) [universal.arm64e-darwin20]
```

This is a CocoaPods bug related to `ffi` not installing on M1. For now, you need to have Rosetta installed, install `ffi` on a `x86_64` architecture and run `pod install` using the simulated Intel architecture for the first time.

```
$ sudo arch -x86_64 gem install ffi
$ arch -x86_64 pod install
```

After that, running Capacitor should work as expected.

## CocoaPods: Failed to connect to GitHub

このエラーは、古いバージョンの openssl と ruby がインストールされた Mac で発生する可能性があります。
これは、GitHub がリポジトリへのアクセス時に使用できる暗号プロトコルを制限しているためです。

解決策は、openssl をアップデートし、Ruby をアップデートすることです:

```bash
brew install openssl
brew upgrade openssl
brew install ruby
brew link --overwrite ruby
```

最後に、環境変数 `PATH` が `$PATH` の後に `/usr/local/bin` を置くのではなく、その前に置くようにしてください。

この問題に対する他の可能な解決策については、 [この StackOverflow の問題](https://stackoverflow.com/questions/38993527/cocoapods-failed-to-connect-to-github-to-update-the-cocoapods-specs-specs-repo/48996424#48996424) を参照してください。

## Plugin Not Implemented

On iOS, this can happen if Capacitor doesn't find the plugins or can't inject its code into the WebView.

First of all, make sure the plugin is installed and appears in the `package.json`.

Then, run `npx cap sync ios`.

Finally, check that the plugin is in `ios/App/Podfile`. If the plugin is not listed, make sure your Podfile looks like [this one](https://github.com/ionic-team/capacitor/blob/main/ios-template/App/Podfile) and run `npx cap sync` again.

If still getting the "Plugin not implemented" error, make sure you don't have `WKAppBoundDomains` key in `ios/App/App/Info.plist`, that prevents Capacitor's and Plugins code from injecting. Remove the key if not needed, or if it can't be removed, add `limitsNavigationsToAppBoundDomains` to your capacitor config file with `true` value inside the `ios` object.
