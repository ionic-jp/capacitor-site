---
title: 既知の互換性のないCordovaプラグイン
description: 既知の互換性のないCordovaプラグイン
contributors:
  - dotnetkow
---

# 既知の互換性のない Cordova プラグイン

人気のある Cordova プラグインをいくつかテストしましたが、Capacitor がすべての Cordova プラグインをサポートしていない可能性もあります。Capacitor と一緒に動作しないものもあれば、競合する代替手段を提供するものもあります。プラグインが競合しているか、ビルドに問題があることがわかっている場合は、 `npx cap update` の実行時にスキップされます。

既存の Cordova プラグインに問題がある場合は、その問題の詳細とプラグイン情報を [お知らせください](https://github.com/ionic-team/capacitor/issues/new)。

## 既知の互換性のない Cordova プラグイン (Subject to change)

- cordova-plugin-add-swift-support (not needed, Capacitor has built in Swift support)
- cordova-plugin-admobpro ([see details](https://github.com/ionic-team/capacitor/issues/1101))
- cordova-plugin-braintree ([see details](https://github.com/ionic-team/capacitor/issues/1415))
- cordova-plugin-code-push ([see details](https://github.com/microsoft/code-push/issues/615))
- cordova-plugin-compat (not needed)
- cordova-plugin-console (not needed, Capacitor has its own)
- cordova-plugin-crosswalk-webview (Capacitor doesn't allow to change the webview)
- cordova-plugin-fcm ([see details](https://github.com/ionic-team/capacitor/issues/584))
- cordova-plugin-firebase ([see details](https://github.com/ionic-team/capacitor/issues/815))
- cordova-plugin-ionic-keyboard (not needed, Capacitor has it's own)
- cordova-plugin-ionic-webview (not needed, Capacitor uses WKWebView)
- cordova-plugin-music-controls (causes build failures, skipped)
- cordova-plugin-qrscanner ([see details](https://github.com/ionic-team/capacitor/issues/1213))
- cordova-plugin-splashscreen (not needed, Capacitor has its own)
- cordova-plugin-statusbar (not needed, Capacitor has its own)
- cordova-plugin-wkwebview-engine (not needed, Capacitor uses WKWebView)
- cordova-plugin-googlemaps (causes build failures on iOS, skipped for iOS only)
- cordova-plugin-lottie-splashscreen (it's incompatible and some further work is needed)
