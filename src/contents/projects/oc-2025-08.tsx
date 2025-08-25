import { Stack, Text, Title, Divider, AspectRatio } from '@mantine/core';

const OC2025 = () => {
    return (
        <Stack align="flex-start" gap="md">
            <Text>
                2025/08/23に開催。オープンキャンパスにて開発したwebアプリについて発表
            </Text>

            <Divider w="100%" />

            <Stack align="flex-start" gap="sm">
                <Title order={3} size="h5">
                作成したwebアプリ: 小説検索&推薦アプリ
                </Title>
                <Text>
                概要: ユーザーが入力した生ワードを元に、小説を検索・推薦するアプリケーション。小説情報は「小説家になろう」のAPIから取得
                </Text>
            </Stack>

            <AspectRatio ratio={16 / 9} w="100%">
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT85vAQNYyr4gNghC-wZ0dsvsnSsc5UKWWSNJ-kZosmwlXhSim-FBwjMcjJ8fxxd5cNmtEyktcfx31C/pubembed?start=true&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true}>
                </iframe>
            </AspectRatio>
        </Stack>
    );
};

export default OC2025;