---
title: PWA Elements
description: Using PWA Elements
contributors:
  - dotNetkow
  - mlynch
---

# PWA Elements

`Camera` や `Toast` などの一部の Capacitor プラグインでは、ネイティブで実行していない場合でも Web ベースの UI を使用できます。​ たとえば、 `Camera.getPhoto ()` を呼び出すと、Web 上での実行時に、応答性の高い写真撮影エクスペリエンスがロードされます。

<img src="/assets/img/docs/pwa-elements.png" style="height: 200px" />

​ この UI は、Web コンポーネントを使用して実装されます。​Shadow DOM の魔法により、これらのコンポーネントはあなたのプロジェクトに競合しません。
​ 独自の UI を使用します。

## インストール

​ これらのコントロールを有効にするには、 `@ionic/pwa-elements` をあなたのアプリに追加する必要があります。

​ 通常のインストールでは、パッケージをインポートして要素を登録するか、アプリケーションの `index.html` の `<head>` に script タグを追加します:

#### PWA Elements のインポート

```bash
npm install @ionic/pwa-elements
```

​ 次に、選択したフレームワークに応じて、 element loader をインポートし、適切なタイミングで呼び出します:

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

#### script タグを利用した読み込み

PWA Elements は、 `index.html` の script タグを通じて含めることができます。​ ただし、これはオフラインのシナリオでは機能しないことに注意してください。

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
