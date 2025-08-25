import { Stack, Title, Text, Group, Anchor } from '@mantine/core';

const Header = () => {
    return (
        <Stack component="header" align="center" gap="md">
            <Title order={1} size="h1">
                Portfolio
            </Title>

            <Text>ユーザーの希望に応えるエンジニア</Text>

            <Group component="nav" gap="md" mt="sm">
                <Anchor href="#About">自己紹介</Anchor>
                <Anchor href="#career">経歴</Anchor>
                <Anchor href="#skills">スキル</Anchor>
                <Anchor href="#projects">プロジェクト</Anchor>
                <Anchor href="#awards">受賞経歴</Anchor>
                <Anchor href="#interns">インターンシップ・職歴</Anchor>
                <Anchor href="#links">リンク</Anchor>
            </Group>
        </Stack>
    );
};

export default Header;