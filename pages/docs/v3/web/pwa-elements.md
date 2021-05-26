---
title: PWA Elements
description: PWA Elementsの使い方
contributors:
  - dotNetkow
  - mlynch
---

# PWA Elements

いくつかの `Camera` や `Toast` といった Capacitor プラグインは、Native で実行していないときに Web ベースの UI を使用できます。たとえば、Camera を呼び出します。 `Camera.getPhoto()` を実行すると、Web 上での実行時に応答性の高い写真撮影エクスペリエンスがロードされます:

<img src="/assets/img/docs/pwa-elements.png" style="height: 200px" />

この UI は、Web Components を使って実装されています。
Shadow DOM の魔法により、これらのコンポーネントを使用するかどうかにかかわらず、これらのコンポーネントが独自の UI と競合することはありません。

## インストール

これらを操作するため、あなたは `@ionic/pwa-elements` をアプリに追加しないといけません。

典型的なインストールはパッケージをインポートして Element を登録することですが、あなたのアプリケーションで、`index.html`の`<head>`に script タグを追加することもできます:

#### PWA Elements のインポート

```bash
npm install @ionic/pwa-elements
```

次に、選択したフレームワークに応じて、エレメントローダーをインポートして正しいタイミングで呼び出します:

_React_

`index.tsx` or `index.js`:

```tsx
import { defineCustomElements } from '@ionic/pwa-elements/loader';

ReactDOM.render(<App />, document.getElementById('root'));

// Call the element loader after the app has been rendered the first time
defineCustomElements(window);
```

_Angular_

`main.ts`:

```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
```

#### script tag を利用する

PWA Elements はあなたの `index.html`の中の script タグを通して呼び出すこともできます。ただし、これはオフラインのシナリオでは機能しません:

```html
<script
  type="module"
  src="https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.js"
></script>
```
