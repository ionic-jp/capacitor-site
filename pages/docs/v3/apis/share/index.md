---
title: Share
description: Share API
contributors:
  - mlynch
  - jcesarmobile
canonicalUrl: https://capacitorjs.com/docs/apis/share
---

<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Share

Share API は、ユーザーがインストールした可能性のある共有対応なアプリでコンテンツを共有するためのメソッドを提供します。

Share API は、iOS、Android、Web で利用することができます（新しい[Web Share API](https://developers.google.com/web/updates/2016/09/navigator-share)を利用しますが、すべてのブラウザで利用できるわけではありません）。

<docgen-index>

- [`share(...)`](#share)
- [Interfaces](#interfaces)

</docgen-index>

## Example

```typescript
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

let shareRet = await Share.share({
  title: 'See cool stuff',
  text: 'Really awesome thing you need to see right meow',
  url: 'http://ionicframework.com/',
  dialogTitle: 'Share with buddies',
});
```

Each platform uses a different set of fields, but you should supply them all.

## API

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### share(...)

```typescript
share(options: ShareOptions) => Promise<any>
```

Show a Share modal for sharing content in your app with other apps

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#shareoptions">ShareOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### ShareOptions

| Prop              | Type                | Description                                                               |
| ----------------- | ------------------- | ------------------------------------------------------------------------- |
| **`title`**       | <code>string</code> | Set a title for any message. This will be the subject if sharing to email |
| **`text`**        | <code>string</code> | Set some text to share                                                    |
| **`url`**         | <code>string</code> | Set a URL to share, can be http, https or file URL                        |
| **`dialogTitle`** | <code>string</code> | Set a title for the share modal. Android only                             |

</docgen-api>
