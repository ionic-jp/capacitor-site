---
title: CLI Commands
description: Capacitor CLI command reference list
contributors:
  - dotNetkow
canonicalUrl: https://capacitorjs.com/docs/cli/create
---

# Capacitor CLI - create

新しくプロジェクトをはじめて、UI/フロントエンドフレームワークを個別に追加する場合は、標準プロジェクト構造で新規の Capacitor プロジェクトを作成します。

```bash
npx @capacitor/cli create [options] [directory] [name] [id]
```

<strong>Inputs:</strong>

- `directory` (optional): Directory to create the new app in, such as `c:\src\myapp`
- `name` (optional): App name
- `id` (optional): App Package Id (in Java package format, no dashes), such as `com.example.app`

<strong>Options:</strong>

- `--npm-client <npmClient>`: npm client to use for dependency installation
