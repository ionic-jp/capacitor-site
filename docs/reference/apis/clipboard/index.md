---
title: Clipboard
description: Clipboard API
url: /docs/apis/clipboard
contributors:
  - mlynch
  - jcesarmobile
---


<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Clipboard

Clipboard APIを使用すると、クリップボードとの間でコピーと貼り付けを行うことができます。
iOSでは、このAPIを使って画像やURLをコピーすることもできます。

<plugin-api index="true" name="clipboard"></plugin-api>

## Example

```typescript
import { Plugins } from '@capacitor/core';

const { Clipboard } = Plugins;

Clipboard.write({
  string: "Hello, Moto"
});

let result = await Clipboard.read();
console.log('Got', result.type, 'from clipboard:', result.value);
```

## API

<plugin-api name="clipboard"></plugin-api>
