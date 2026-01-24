# Portfolio

個人ポートフォリオサイトです。自己紹介、スキル、プロジェクト、受賞歴、インターンシップなどの情報を掲載しています。

**公開URL**: [https://yuu0413.com](https://yuu0413.com)

## 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite
- **UIライブラリ**: Mantine UI, Yamada UI
- **アニメーション**: Framer Motion
- **ルーティング**: React Router DOM
- **アイコン**: Font Awesome, Tabler Icons
- **ホスティング**: Cloudflare Pages

## プロジェクト構成

```
src/
├── components/     # UIコンポーネント
│   ├── about.tsx      # 自己紹介セクション
│   ├── awards.tsx     # 受賞歴セクション
│   ├── career.tsx     # 経歴セクション
│   ├── header.tsx     # ヘッダー・ナビゲーション
│   ├── interns.tsx    # インターンシップセクション
│   ├── links.tsx      # リンク集
│   ├── projects.tsx   # プロジェクトセクション
│   └── skills.tsx     # スキルセクション
├── contents/       # プロジェクト詳細コンテンツ
│   ├── interns/       # インターンシップ詳細
│   └── projects/      # プロジェクト詳細
├── assets/         # 画像などの静的ファイル
├── App.tsx         # メインアプリケーション
├── main.tsx        # エントリーポイント
└── styles.css      # グローバルスタイル
```
