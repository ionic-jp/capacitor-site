---
title: Android の問題のトラブルシューティング
description: Android の問題のトラブルシューティング
contributors:
  - mlynch
  - jcesarmobile
---

# Android の問題のトラブルシューティング

100％完璧な Native 管理ツールを作成するのはほぼ不可能です。遅かれ早かれ、Android ワークフローの一部でさまざまな問題に遭遇するでしょう。

このガイドでは、考えられる解決策とともに一般的な Android の問題を文書化することを試みます。

## Android Toolbox

Android 開発者は、Android の問題をデバッグするためのいくつかの一般的なテクニックを学びます。

### Google, Google, Google

Android、Gradle、エミュレータなどで問題が発生した場合、最初にすべきことは、そのエラーをコピーして Google 検索にペーストすることです。

Capacitor は標準的な Android ツールキットを使用していますので、何か問題が発生した場合、多くの Android 開発者も同様に問題を抱えており、解決策が存在する可能性があります。

依存関係の更新、Gradle sync の実行、キャッシュの無効化などの簡単な方法があります。

## Gradle Sync

npm から新しいプラグインをインストールしたのに、Android のビルドでプラグインが使えない、または表示されない場合は、Android Studio の右上にある「Sync Project with Gradle Files」ボタン（アイコンは象の形をしています）を使ってみてください。これにより、Android のネイティブコードが新しいプラグインのコードを含むように再同期され、新しいプラグインを使用できるようになります。詳細については、 [this issue on Github](https://github.com/ionic-team/capacitor/issues/4012) をご覧ください。

他にも様々な問題に対応できるので、Android のビルドで問題が発生した際には、"Sync Project with Gradle Files "を実行することをお勧めします。

### クリーン/リビルド

クリーンとリビルドを行うことで、多くのビルド問題を解決することができます。

![Android Clean and Build](/assets/img/docs/android/clean-rebuild.png)

### キャッシュの無効化/再起動

問題を解決した自信があっても、Android Studio や Gradle が納得しない場合、多くの場合、Android Studio のキャッシュを無効にしてプログラムを再起動することで解決します。

これは File メニューから簡単に行うことができます:

![Android Invalidate Caches](/assets/img/docs/android/invalidate-caches.png)

## Error: "package android.support.\* does not exist"

このエラーは、Cordova や Capacitor のプラグインが、新しい AndroidX に相当するものではなく、古い android support の依存関係を使用している場合に発生します。
この問題をプラグインのリポジトリに報告することで、メンテナが AndroidX の依存性を使用するようプラグインを更新することができます。

回避策として、jetifier を使ってプラグインにパッチを当てることもできます。

```bash
npm install jetifier
npx jetify
npx cap sync android
```

## Error: "Please select Android SDK"

このエラーは、多くの場合、Gradle の同期が必要なことが原因です。
これは、依存関係を更新したり、プロジェクトの設定を変更した後に定期的に行う必要があります。

Gradle を手動で同期するには、メインメニューバーから「File」→「Sync Project with Gradle Files」を開きます:

![Sync Gradle](/assets/img/docs/android/sync-gradle.png)

## Error: "APK Can't be installed"

APK がエミュレータやデバイスにインストールできないのは、同じパッケージ名の既存のアプリがあることが原因の場合が多いです。アプリを実行しようとすると、次のようなエラーが表示されることがあります:

![Android APK Failed](/assets/img/docs/android/apk-failed.png)

解決策としては、古いアプリを削除し、パッケージ名が `AndroidManifest.xml` で最新のものになっていて、開発中の他のアプリと競合していないことを確認します。

最後に、念のため、クリーンアップとリビルドを行います。

## プロジェクトの再構築

Capacitor では、自分の Android プロジェクトを管理することができます。IDE で管理されているプロジェクトと同様に、時には同期が取れなくなることもあり、その場合はプロジェクトを再構築するしかありません。

これを行うには、以下の手順に従います。

1. 作成したソースコード（`app/android/src`にある Java ファイル、マニフェストファイル、リソースファイルなど）を`app/android`以外の安全な場所にコピーします。
2. 次に、Capacitor CLI の最新版が動作していることを確認します。
3. android ディレクトリを削除します：`rm -rf android/`。
4. キャパシターからアンドロイドアプリを再作成します：`npx cap add android`。
5. 保存したソースファイルをプロジェクトにコピーして戻す
