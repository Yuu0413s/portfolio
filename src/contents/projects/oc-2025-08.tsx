import { Stack, Text, Title, Divider, List, AspectRatio, Anchor } from '@mantine/core';

const OC2025 = () => {
    return (
        <Stack align="flex-start" gap="md">
            <Text>
                オープンキャンパスにて来場した中高生とその保護者に向け、自身が開発したwebアプリや大学で行っている研究について発表
            </Text>

            <Divider w="100%" />

            <Stack align="flex-start" gap="sm">
                <Title order={3} size="h5">
                    作成したwebアプリ: 小説検索＆推薦システム
                </Title>
                <Text>
                    ユーザーが入力したキーワードをもとに、複数の書籍データソースから小説を検索・推薦するWebアプリケーション。
                </Text>
            </Stack>

            <Stack align="flex-start" gap="xs">
                <Title order={4} size="h6">技術構成</Title>
                <List size="sm" spacing="xs">
                    <List.Item>バックエンド：Cloudflare Workers + Cloudflare D1（SQLite）</List.Item>
                    <List.Item>ベクトル検索：Cloudflare Vectorize</List.Item>
                    <List.Item>AI：Gemini Embedding API（768次元）</List.Item>
                    <List.Item>外部API：なろうAPI / Google Books API / Open Library API / CiNii API</List.Item>
                    <List.Item>フロントエンド：Next.js / Vercel</List.Item>
                </List>
            </Stack>

            <Stack align="flex-start" gap="xs">
                <Title order={4} size="h6">推薦ロジック</Title>
                <List size="sm" spacing="xs">
                    <List.Item>書籍データを事前にGemini Embeddingで768次元ベクトル化し、Cloudflare Vectorizeにインデックス化</List.Item>
                    <List.Item>ユーザー入力キーワードを同じくベクトル化し、cosine類似度で上位件数を取得</List.Item>
                    <List.Item>スコアを0〜1にスケール変換して表示</List.Item>
                </List>
            </Stack>

            <Stack align="flex-start" gap="xs">
                <Title order={4} size="h6">工夫した点</Title>
                <List size="sm" spacing="xs">
                    <List.Item>5種類の外部APIを統合し、ソースごとに取得フィールドを最適化</List.Item>
                    <List.Item>fetchWithRetryヘルパー（リトライ3回・指数バックオフ・タイムアウト10秒）で通信の堅牢性を確保</List.Item>
                    <List.Item>リクエスト間に500ms〜1000msのウェイトを挟みレート制限に対応</List.Item>
                </List>
            </Stack>

            <Anchor
                href="https://bookrecom.y-shibata0820.workers.dev"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
            >
                デプロイ先: bookrecom.y-shibata0820.workers.dev
            </Anchor>

            <Divider w="100%" />

            <AspectRatio ratio={16 / 9} w="100%">
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vT85vAQNYyr4gNghC-wZ0dsvsnSsc5UKWWSNJ-kZosmwlXhSim-FBwjMcjJ8fxxd5cNmtEyktcfx31C/pubembed?start=true&loop=false&delayms=3000"
                    title="オープンキャンパス2025 発表スライド"
                    style={{ border: 'none' }}
                    width="960"
                    height="569"
                    allowFullScreen={true}
                />
            </AspectRatio>
        </Stack>
    );
};

export default OC2025;
