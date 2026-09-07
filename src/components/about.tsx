import { Stack, Group, Title, Text, Image, Button, ActionIcon, Anchor } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import icon from "../assets/icon.jpeg";
import { linksData } from '../data/links';

const AboutSection = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    // 年齢を自動計算する関数
    const calculateAge = () => {
        const birthDate = new Date('2005-04-13T00:00:00+09:00'); // 誕生日（JST）
        const today = new Date();

        // 現在の日付をJSTに変換
        const jstOffset = 9 * 60; // JSTはUTC+9
        const utcTime = today.getTime() + (today.getTimezoneOffset() * 60000);
        const jstTime = new Date(utcTime + (jstOffset * 60000));

        let age = jstTime.getFullYear() - birthDate.getFullYear();
        const monthDiff = jstTime.getMonth() - birthDate.getMonth();

        // 今年の誕生日がまだ来ていない場合は-1
        if (monthDiff < 0 || (monthDiff === 0 && jstTime.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    const age = calculateAge();

    return (
        <Stack
            component="section"
            align="flex-start"
            gap="xl"
            className="hero-section"
            style={{
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '2rem',
            }}
        >
            <Group align="flex-start" gap="xl" wrap="wrap">
                <Image
                    src={icon}
                    alt="柴田優太のプロフィール写真"
                    w={72}
                    h={72}
                    radius="100%"
                    style={{
                        border: '1px solid var(--color-border)',
                    }}
                />

                <Stack gap="xs">
                    <Text size="xs" c="var(--primary-color)" style={{ letterSpacing: '0.06em' }}>
                        バックエンドエンジニア志望
                    </Text>

                    <Title order={1} size="1.6rem" c="var(--color-text-primary)">
                        柴田 優太
                    </Title>

                    <Title order={2} size="1.5rem" c="var(--color-text-primary)" fw={500}>
                        少しでも多くの人が幸せに、また快適に過ごせる世界を
                    </Title>
                </Stack>
            </Group>

            <Stack component="section" gap="md" align="flex-start" w="100%" maw={600}>
                <Text size="xs" c="var(--color-text-label)" style={{ letterSpacing: '0.08em' }}>ABOUT</Text>
                <Group gap="md">
                    <Text fw="bold" size="sm">年齢:</Text>
                    <Text size="sm">{age}歳</Text>
                </Group>
                <Group gap="md">
                    <Text fw="bold" size="sm">所属:</Text>
                    <Text size="sm">武蔵野大学データサイエンス学部データサイエンス学科(28卒)</Text>
                </Group>

                <Text mt="md">
                    アニメとゲームと野球と開発が好きなエンジニア志望の学生です。
                </Text>
                <Text>
                    大学にてデータ分析やエンジニアリングの勉強をしながら、自分や世界の将来について考えています。
                </Text>
                <Text>
                    ユーザーのQOLを向上させることのできるシステムを開発することが目標です。
                </Text>
            </Stack>

            <Stack gap="md" align="flex-start" w="100%">
                <Button
                    size="sm"
                    variant="subtle"
                    rightSection={<IconChevronDown size={20} />}
                    onClick={scrollToProjects}
                >
                    プロジェクトを見る
                </Button>

                <Stack gap="xs" align="flex-start">
                    <Text size="sm" fw={600} c="dimmed">Connect</Text>
                    <Group gap="md">
                        {linksData.filter((link) => link.type !== 'email').map((link) => {
                            const LinkIcon = link.icon;
                            return (
                                <Anchor
                                    key={link.label}
                                    href={link.type === 'email' ? `mailto:${link.value}` : link.url}
                                    target={link.type === 'link' ? '_blank' : undefined}
                                    rel={link.type === 'link' ? 'noopener noreferrer' : undefined}
                                >
                                    <ActionIcon
                                        size="lg"
                                        radius="md"
                                        variant="light"
                                        color={link.color}
                                        style={{
                                            transition: 'transform 0.2s ease',
                                        }}
                                        className="connect-icon"
                                        aria-label={link.ariaLabel}
                                    >
                                        <LinkIcon size={20} />
                                    </ActionIcon>
                                </Anchor>
                            );
                        })}
                    </Group>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default AboutSection;
