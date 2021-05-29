---
title: Capacitor Web API
description: WebにおけるCapacitorのAPIについて
contributors:
  - dotNetkow
---

# Capacitor Web API

Capacitor には、同じコードベースで複数のプラットフォームにまたがってアプリケーションを正常に動作させるために役立つ、いくつかの JavaScript ユーティリティがあります。これらを使用するには、Capacitor をインポートし、必要なユーティリティー関数を呼び出します:

## Capacitor Object

`Capacitor` オブジェクトは、いくつかのユーティリティー関数のコンテナです。このオブジェクトは `window.Capacitor` で利用できますが、最近の JavaScript アプリでは、Capacitor をインポートするのが望ましい使い方です:

```typescript
import { Capacitor } from '@capacitor/core';
```

### convertFileSrc(...)

```typescript
convertFileSrc: (filePath: string) => string;
```

デバイスのファイルパスを Web View に適したパスに変換します。

コンデンサアプリは、デバイスファイルとは異なるプロトコルで提供されます。これらのプロトコル間の問題を避けるために、デバイスファイルのパスを書き換える必要があります。例えば、Android の場合、 `file:///path/to/device/file` は、Web View で使用する前に、 `http://localhost/_capacitor_file_/path/to/device/file` に書き換える必要があります。

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

### getPlatform()

```typescript
getPlatform: () => string;
```

アプリが現在動作しているプラットフォームの名前を取得します。 `web`, `ios`, `android`.

```typescript
if (Capacitor.getPlatform() === 'ios') {
  // do something
}
```

### isNativePlatform()

```typescript
isNativePlatform: () => boolean;
```

現在動作しているプラットフォームがネイティブ（`ios`, `android`）であるかどうかをチェックします。

```typescript
if (Capacitor.isNativePlatform()) {
  // do something
}
```

### isPluginAvailable(...)

```typescript
isPluginAvailable: (name: string) => boolean;
```

現在稼働中のプラットフォームでプラグインが利用可能かどうかを確認します。プラグイン名はプラグインレジストリで使用されるため、カスタムプラグインでも動作します。

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
