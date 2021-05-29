---
title: 画面の向きの設定
description: Manage screen orientation settings in your Capacitor app
contributors:
  - mlynch
---

## Capacitor アプリでの画面の向きの設定

すべてのアプリケーションは、デバイスの縦向きと横向きでうまく動作します。しかし、多くのアプリはそうではありません。また、アプリがどちらかのモードでのみ、あるいは時折、機能することを必要とする正当な理由もあります。

## グローバルな向きの設定

Capacitor アプリの向きをグローバルに設定するには、対象とするプラットフォームに必要な設定値を設定します。

### iOS の設定

iOS では、iPhone や iPad でサポートされる画面の向きが異なります。iOS で使用できる画面の向きを制限するには、Xcode を起動して、`Info.plist` ファイルを開きます。以下のキーを見つけてください。 `Supported interface orientation` と `Supported interface orientation (iPad)` です。これらの値を使って、iPhone と iPad でサポートしたい異なる向きを指定します。

`Info.plist` ファイルを直接編集する場合は、以下のキーを探します。 `UISupportedInterfaceOrientations` と `UISupportedInterfaceOrientations~ipad` です。例えば、以下の設定では、iPhone では右向きの "Portrait" 、iPad では "Landscape" のいずれかの向きに制限されます。

```
  <key>UISupportedInterfaceOrientations</key>
  <array>
    <string>UIInterfaceOrientationPortrait</string>
  </array>
  <key>UISupportedInterfaceOrientations~ipad</key>
  <array>
    <string>UIInterfaceOrientationLandscapeRight</string>
    <string>UIInterfaceOrientationLandscapeLeft</string>
  </array>
```

### Android の設定

Android では、 `AndroidManifest.xml` を修正して、メインアプリのアクティビティの `<activity>` エントリに `android:screenOrientation` を設定することで、向きを設定することができます。設定可能なエントリの詳細については、[Android Manifest Documentation](https://developer.android.com/guide/topics/manifest/activity-element#screen) を参照してください。

## 動的な方向の設定

多くのアプリでは、複数の方向性をサポートする必要があり、コンテンツに応じて方向性をロックすることもあります。

Capacitor では、 `cordova-plugin-screen-orientation` プラグインでこの機能をサポートしています:

```shell
npm install cordova-plugin-screen-orientation
npx cap update
```

そして、 `window.screen.orientation` に用意されている `lock` と `unlock` のメソッドを使います:

```typescript
window.screen.orientation.lock('portrait');
window.screen.orientation.lock('landscape');

// To unlock orientation which will default back to the global setting:
window.screen.orientation.unlock();
```

使用可能な向きの値や設定オプションについては、 [Orientation Plugin Docs](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-screen-orientation/) を参照してください。
