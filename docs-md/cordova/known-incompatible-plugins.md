---
title: Known Incompatible Cordova Plugins
description: Known Incompatible Cordova Plugins
url: /docs/cordova/known-incompatible-plugins
contributors:
  - dotnetkow
---

# 既知の互換性のないCordovaプラグイン

<p class="intro">人気のあるCordovaプラグインをいくつかテストしましたが、CapacitorがすべてのCordovaプラグインをサポートしていない可能性もあります。Capacitorと一緒に動作しないものもあれば、競合する代替手段を提供するものもあります。プラグインが競合しているか、ビルドに問題があることがわかっている場合は、<code>npx cap update</code>の実行時にスキップされます。</p>

<p class="intro">既存のCordovaプラグインに問題がある場合は、その問題の詳細とプラグイン情報を<a href="https://github.com/ionic-team/capacitor/issues/new" target="_blank">お知らせください</a>。</p>

## 既知の互換性のないCordovaプラグイン (Subject to change)

- cordova-plugin-add-swift-support (not needed, Capacitor has built in Swift support)
- cordova-plugin-admobpro ([see details](https://github.com/ionic-team/capacitor/issues/1101))
- cordova-plugin-braintree ([see details](https://github.com/ionic-team/capacitor/issues/1415))
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
