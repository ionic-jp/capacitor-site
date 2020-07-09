---
title: PWA Elements
description: PWA Elementsの使い方
url: /docs/pwa-elements
contributors:
  - dotNetkow
  - mlynch
---

# PWA Elements

<p class="intro">いくつかの <code>Camera</code> や <code>Toast</code> といったCapacitorプラグインは、ネイティブで実行していないときにWebベースのUIを使用できます。たとえば、Cameraを呼び出します。 <code>Camera.getPhoto()</code> を実行すると、Web上での実行時に応答性の高い写真撮影エクスペリエンスがロードされます。</p>

<img src="/assets/img/docs/pwa-elements.png" style="height: 200px" />

このUIは、Web Componentsを使って実装されています。
Shadow DOMの魔法により、これらのコンポーネントを使用するかどうかにかかわらず、これらのコンポーネントが独自のUIと競合することはありません。

## インストール

これらを操作するため、あなたは `@ionic/pwa-elements` をアプリに追加しないといけません。

典型的なインストールはパッケージをインポートしてElementを登録することですが、あなたのアプリケーションで、`index.html`の`<head>`にscriptタグを追加することもできます:

#### PWA Elementsのインポート

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

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
```

#### script tagを利用する

PWA Elementsはあなたの `index.html`の中のscriptタグを通して呼び出すこともできます。ただし、これはオフラインのシナリオでは機能しません:

```html
<script type="module" src="https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.esm.js"></script>
<script nomodule src="https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.js"></script>
```
