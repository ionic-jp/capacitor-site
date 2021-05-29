---
title: Toast Capacitor Plugin API
description: トーストAPIは、ユーザーに重要な情報を表示するための通知ポップアップを提供します。まるで本物のトーストのように！
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/toast/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/toast/src/definitions.ts
---

# @capacitor/toast

トーストAPIは、ユーザーに重要な情報を表示するための通知ポップアップを提供します。まるで本物のトーストのように！

## インストール

```bash
npm install @capacitor/toast
npx cap sync
```

## 例

```typescript
import { Toast } from '@capacitor/toast';

const showHelloToast = async () => {
  await Toast.show({
    text: 'Hello!',
  });
};
```

## API

<docgen-index>

* [`show(...)`](#show)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### show(...)

```typescript
show(options: ShowOptions) => Promise<void>
```

Shows a Toast on the screen

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#showoptions">ShowOptions</a></code> |

**Since:** 1.0.0

--------------------


### Interfaces


#### ShowOptions

| Prop           | Type                                       | Description                                                       | Default               | Since |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------- | --------------------- | ----- |
| **`text`**     | <code>string</code>                        | Text to display on the Toast                                      |                       | 1.0.0 |
| **`duration`** | <code>'short' \| 'long'</code>             | Duration of the Toast, either 'short' (2000ms) or 'long' (3500ms) | <code>'short'</code>  | 1.0.0 |
| **`position`** | <code>'top' \| 'center' \| 'bottom'</code> | Postion of the Toast                                              | <code>'bottom'</code> | 1.0.0 |

</docgen-api>
