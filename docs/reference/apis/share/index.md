---
title: Share
description: Share API
url: /docs/apis/share
contributors:
  - mlynch
  - jcesarmobile
---

<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Share

Share APIは、ユーザーがインストールした可能性のある共有対応なアプリでコンテンツを共有するためのメソッドを提供します。

Share APIは、iOS、Android、Webで利用することができます（新しい[Web Share API](https://developers.google.com/web/updates/2016/09/navigator-share)を利用しますが、すべてのブラウザで利用できるわけではありません）。

<plugin-api index="true" name="share"></plugin-api>

## Example

```typescript
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

let shareRet = await Share.share({
  title: 'See cool stuff',
  text: 'Really awesome thing you need to see right meow',
  url: 'https://ionicframework.com/',
  dialogTitle: 'Share with buddies'
});
```

Each platform uses a different set of fields, but you should supply them all.

## API

<plugin-api name="share"></plugin-api>
