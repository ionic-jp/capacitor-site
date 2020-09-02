---
title: Accessibility
description: Accessibility API
url: /docs/apis/accessibility
contributors:
  - mlynch
  - jcesarmobile
---

<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Accessibility

Accessibility APIを使用すると、ユーザーがスクリーンリーダーを有効にしているかどうかを簡単に確認したり、
接続されたスクリーンリーダーを介してプログラムでラベルを読み上げたりできます。

<plugin-api index="true" name="accessibility"></plugin-api>

## Example

```typescript
import { Plugins } from '@capacitor/core';

const { Accessibility, Modals } = Plugins;

Accessibility.addListener('accessibilityScreenReaderStateChange', (state) => {
  console.log(state.value);
});

async isVoiceOverEnabled() {
  var vo = await Accessibility.isScreenReaderEnabled();
  alert('Voice over enabled? ' + vo.value);
}

async speak() {
  var value = await Modals.prompt({
    title: "Value to speak",
    message: "Enter the value to speak"
  });

  Accessibility.speak({value: value.value});
}
```

## API

<plugin-api name="accessibility"></plugin-api>
