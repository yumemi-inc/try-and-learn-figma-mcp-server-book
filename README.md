# 『試して学ぶ Figma MCPサーバー ― AIを活用したプロダクト開発』サンプルコード & デザインファイル集

本リポジトリは、書籍  [**『試して学ぶ Figma MCPサーバー ― AIを活用したプロダクト開発』** ](https://book.mynavi.jp/ec/products/detail/id=149485)
で使用しているサンプルコードおよび Figma デザインファイルをまとめたものです。

書籍とあわせて利用することで、Figma MCP を活用した開発フローを実際に手を動かしながら学ぶことができます。



## リポジトリ構成

```
try-and-learn-figma-mcp-server-book
├ chapter2
│ ├ section02
│ │ └ mcp.json
│ ├ section03
│ │ └ example-html/
│ │   ├ index.html
│ │   └ style.css
│ └ section04
│   ├ sds/                  # https://github.com/figma/sds をベースに書籍の手順に沿って追加
│   │ ├ src/examples/
│   │ │ └ MyLandingPage.tsx # 既存コンポーネントを使ったランディングページ
│   │ └ src/ui/primitives/
│   │   └ Alert/            # 「Alert」コンポーネント
│   └ sds.fig               # Simple Design System に Alert を追加した Figma ファイル
└ chapter3
  └ section05
    └ design.fig
```


##  各Chapterの内容

### Chapter2：Figma MCPサーバー活用ワークフロー

#### セクション02 環境構築と設定
Figma MCPサーバーを利用するための基本設定ファイルです。
- [`mcp.json`](chapter2/section02/mcp.json)



#### セクション03 デザインからHTMLとCSSのページを生成する
Figmaデザインをもとに、静的な HTML / CSS を生成する演習用サンプルです。
- [`example-html/`](chapter2/section03/example-html/)




#### セクション04 Reactコンポーネントを生成し、既存プロジェクトを拡張する
- [`sds/`](chapter2/section04/sds/)（React演習プロジェクト — [figma/sds](https://github.com/figma/sds) をベースに書籍の手順に沿って追加）
- [`sds.fig`](chapter2/section04/sds.fig)（Simple Design System に Alert を追加した Figma ファイル）

既存プロジェクトに対して Figma MCP を活用し、コンポーネントを生成・拡張する実践例です。


### Chapter3：Figma MCPのためにデザイナーができること

#### セクション05 理解を同期する
AIが文脈として扱いやすい構造・命名・整理を行ったデザイン例です。

- [`design.fig`](chapter3/section05/design.fig)



## 注意事項

- Figmaコミュニティ上のファイルは更新される場合があります。
- 本リポジトリの内容は書籍執筆時点の仕様に基づいています。
