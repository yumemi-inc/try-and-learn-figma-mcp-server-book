# 『試して学ぶ Figma MCPサーバー ― AIを活用したプロダクト開発』サンプルコード & デザインファイル集

本リポジトリは、書籍  [**『試して学ぶ Figma MCPサーバー ― AIを活用したプロダクト開発』** ](https://book.mynavi.jp/ec/products/detail/id=149485) 
で使用しているサンプルコードおよび Figma デザインファイルをまとめたものです。

書籍とあわせて利用することで、Figma MCP を活用した開発フローを実際に手を動かしながら学ぶことができます。



## リポジトリ構成

```
try-and-learn-figma-mcp-server-book
├ chapter2
│ ├ 02
│ │ └ mcp.json
│ ├ 03
│ │ ├ sds.fig
│ │ └ example-html/
│ │     ├ index.html
│ │     └ style.css
│ └ 04
│     ├ sds/
│     │ └ sdsプロジェクト
│     ├ alert.fig
│     ├ Alert.tsx
│     ├ Alert.stories.tsx
│     └ Alert.figma.tsx
└ chapter3
  └ 05
      └ design.fig
```


##  各Chapterの内容

### Chapter2：Figma MCPサーバー活用ワークフロー

#### セクション02 環境構築と設定
Figma MCPサーバーを利用するための基本設定ファイルです。
- `mcp.json`



#### セクション03 デザインからHTMLとCSSのページを生成する
Figmaデザインをもとに、静的な HTML / CSS を生成する演習用サンプルです。
- `sds.fig`
- `example-html/`




#### セクション04 Reactコンポーネントを生成し、既存プロジェクトを拡張する
- `sds/`（React演習プロジェクト）
- `alert.fig`
- `Alert.tsx`
- `Alert.stories.tsx`
- `Alert.figma.tsx`

既存プロジェクトに対して Figma MCP を活用し、コンポーネントを生成・拡張する実践例です。


### Chapter3：Figma MCPのためにデザイナーができること

#### セクション05 理解を同期する
AIが文脈として扱いやすい構造・命名・整理を行ったデザイン例です。

- `design.fig`



## 必要環境

- Node.js（LTS推奨）
- Figmaアカウント
- CursorなどのAI搭載エディター
- Git（任意）


## 注意事項

- Figmaコミュニティ上のファイルは更新される場合があります。
- 本リポジトリの内容は書籍執筆時点の仕様に基づいています。
- 生成コードは実務利用前に必ずレビューしてください。