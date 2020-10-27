---
title: Capacitor用 React Hooks
description: これらのReact Hooksを使用して、Capacitorを使用したネイティブモバイルAPIアクセスを簡単にします
contributors:
  - mlynch
---

# Capacitor用 React Hooks

CapacitorアプリでReactを使用している開発者は、React関数コンポーネント内のCapacitor APIにアクセスするための、コミュニティで保守されている便利なReact Hooksのセットを利用することができます。

このhooksのインストール方法:

```shell
npm install @capacitor-community/react-hooks
```

hooksを使うためには、関数コンポーネントにインストールして利用します:

```typescript
import { useFilesystem, base64FromPath, availableFeatures } from '@capacitor-community/react-hooks/filesystem';

const MyComponent = () => (
  const { readFile } = useFilesystem();

  useEffect(() => {
    const readMyFile = async () => {
      const file = await readFile({
        path: filepath,
        directory: FilesystemDirectory.Data
      });
      // ...
    }

    readMyFile();
  }, [ readFile ]);
```

## より多くの情報More Reading

[@capacitor-community/react-hooks](https://github.com/capacitor-community/react-hooks) レポジトリのドキュメンテーションにすべての利用可能なHooksが掲載されています。
