---
title: Toast
description: Toast API
url: /docs/apis/toast
contributors:
  - mlynch
  - jcesarmobile
---

<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Toast

Toast APIは、ユーザに重要な情報を表示するための通知ポップアップを提供します。本物のトーストみたい!

<plugin-api index="true" name="toast"></plugin-api>

## PWA Notes

[PWA Elements](/docs/pwa-elements) are required for Toast plugin to work.

## Example

```typescript
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

async show() {
  await Toast.show({
    text: 'Hello!'
  });
}
```

## API

<plugin-api name="toast"></plugin-api>
