---
title: JavaScriptユーティリティ
description: CapacitorのJavaScriptユーティリティ
contributors:
  - dotNetkow
---

# JavaScript ユーティリティ

Capacitor には、同じコードをベースにして複数のプラットフォームにまたがってアプリを正常に動作させるために役立つ JavaScript ユーティリティがいくつかあります。これらを使用するには、Capacitor をインポートしてから、目的のユーティリティ関数を呼び出します。

```typescript
import { Capacitor } from '@capacitor/core';
const isAvailable = Capacitor.isPluginAvailable('Camera');
```

## convertFileSrc

`convertFileSrc: (filePath: string) => string;`

デバイスのファイルパスを Web View に適したパスに変換します。

Capacitor アプリは、デバイスファイルとは異なるプロトコルで提供されます。これらのプロトコル間の衝突を避けるため、デバイスファイルへのパスは書き換える必要があります。例えば、Android では `file:///path/to/device/file` を `http://localhost/_capacitor_file_/path/to/device/file` に書き換えてから Web View で使用する必要があります。

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

アプリが現在動作しているプラットフォームの名称を取得します。 `web`, `ios`, `android` のいずれかを取得します。

```typescript
if (Capacitor.getPlatform() === 'ios') {
  // do something
}
```

## isNativePlatform

`isNativePlatform: () => boolean;`

現在実行中のプラットフォームがネイティブかどうか (`ios` もしくは `android`) を確認する。

```typescript
if (Capacitor.isNativePlatform()) {
  // do something
}
```

## isPluginAvailable

`isPluginAvailable: (name: string) => boolean;`

現在動作中のプラットフォームでプラグインが利用可能かどうかを確認します。プラグイン名はプラグインレジストリで使用されるため (例: `const { Name } = Plugins;`) 、カスタムプラグインでも機能します。

```typescript
const isAvailable = Capacitor.isPluginAvailable('Camera');

if (!isAvailable) {
  // Have the user upload a file instead
} else {
  // Otherwise, make the call:
  const image = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
  });
}
```
