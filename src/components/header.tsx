import { Stack, Title, Text, Group, Anchor, Divider } from '@mantine/core';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
    return (
        <Stack component="header" align="center" gap="md">
            <Title order={1} size="h1">
                Portfolio
            </Title>

            <Text>ユーザーの希望に応えるエンジニア</Text>

            <DarkModeToggle />

            <Divider w="100%" />

            <Stack component="nav" gap="xs" align="stretch" w="100%">
                <Anchor href="#About" size="sm">自己紹介</Anchor>
                <Anchor href="#career" size="sm">経歴</Anchor>
                <Anchor href="#skills" size="sm">スキル</Anchor>
                <Anchor href="#projects" size="sm">プロジェクト</Anchor>
                <Anchor href="#awards" size="sm">受賞経歴</Anchor>
                <Anchor href="#interns" size="sm">インターンシップ</Anchor>
                <Anchor href="#blog" size="sm">ブログ</Anchor>
            </Stack>
        </Stack>
    );
};

export default Header;