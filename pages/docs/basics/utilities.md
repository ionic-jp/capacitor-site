---
title: JavaScriptユーティリティ
description: CapacitorのJavaScriptユーティリティ
contributors:
  - dotNetkow
---

# JavaScriptユーティリティ

Capacitorには、同じコードベースを持つ複数のプラットフォーム間でアプリケーションを正常に実行するのに便利なJavaScriptユーティリティがいくつかあります。これらを使用するには、 Capacitorを読み込み、目的のユーティリティ関数を呼び出します:

```typescript
import { Capacitor } from '@capacitor/core';
const isAvailable = Capacitor.isPluginAvailable('Camera');
```

## convertFileSrc

`convertFileSrc: (filePath: string) => string;`

デバイスのファイルパスをWeb Viewに適したパスに変換します。

Capacitorアプリケーションは、デバイスファイルとは異なるプロトコルで提供されます。これらのプロトコル間の問題を回避するには、デバイスファイルへのパスを書き換える必要があります。たとえば、Androidでは、 `file:///path/to/device/file` を `http://localhost/_capacitor_file_/path/to/device/file` に書き換えてからWebビューで使用する必要があります。

```typescript
// file:///path/to/device/photo.jpg
const savedPhotoFile = await Filesystem.writeFile({
  path: "myFile.jpg",
  data: base64Data,
  directory: FilesystemDirectory.Data
});

// http://localhost/path/to/device/photo.jpg
const savedPhoto = Capacitor.convertFileSrc(savedPhotoFile.uri),
document.getElementById("savedPhoto").src = savedPhoto;
```

```html
<img id="savedPhoto" />
```

## getPlatform

`getPlatform: () => string;`

現在実行してるプラットフォームの名前を取得できます: `web`, `ios`, `android`.

```typescript
if (Capacitor.getPlatform() === 'ios') {
  // do something
}
```

## isNative

`isNative?: boolean;`

現在実行しているプラットフォームがネイティブかをチェックすることができます (`ios`, `android`).

```typescript
if (Capacitor.isNative) {
  // do something
}
```

## isPluginAvailable

`isPluginAvailable: (name: string) => boolean;`

現在実行中のプラットフォームでプラグインが使用可能かどうかを確認できます。プラグイン名はプラグインレジストリ(例: `const { Name } = Plugins;` )で使用されます。これは、カスタムプラグインも含め、動作することを確認することができます。

```typescript
const isAvailable = Capacitor.isPluginAvailable('Camera');

if (!isAvailable) {
  // Have the user upload a file instead
} else {
  // Otherwise, make the call:
  const image = await Camera.getPhoto({
    resultType: CameraResultType.Uri
  });
}
```
