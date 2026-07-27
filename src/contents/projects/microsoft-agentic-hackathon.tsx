import { Stack, Text, Title, Divider, Anchor } from '@mantine/core';

const MicrosoftAgenticHackathon = () => {
    return (
        <Stack align="flex-start" gap="md">
            <Text>
                議事録を自動で作成、次回会議へのタスクや未決内容などの引き継ぎを自動で行う「Decision Loop」を作成
            </Text>

            <Divider w="100%" />

            <Stack align="flex-start" gap="sm">
                <Title order={3} size="h5">
                    開発チーム
                </Title>
                <Text>チーム名:「チームMUDS」</Text>
                <Anchor
                    href="https://zenn.dev/ichigoe/articles/39ed922d19c9bb"
                    target="_blank"
                >
                    Zenn記事
                </Anchor>
            </Stack>
        </Stack>
    );
};

export default MicrosoftAgenticHackathon;