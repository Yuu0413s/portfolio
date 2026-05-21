import { Stack, Group, Title, Text, Image, Card, Badge, Button, ActionIcon, Anchor } from '@mantine/core';
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
        <Stack component="section" align="center" gap="xl" className="hero-section">
            <Card
                shadow="lg"
                padding="xl"
                radius="lg"
                withBorder
                style={{
                    background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, var(--color-bg-surface) 100%)',
                    borderColor: 'var(--primary-color)',
                    borderWidth: 2,
                }}
                w="100%"
            >
                <Stack align="center" gap="xl">
                    <Image
                        src={icon}
                        alt="柴田優太のプロフィール写真"
                        w={120}
                        h={120}
                        radius="100%"
                        style={{
                            border: '4px solid var(--primary-color)',
                            boxShadow: '0 8px 16px rgba(52, 152, 219, 0.3)',
                        }}
                    />

                    <Stack align="center" gap="md">
                        <Title order={1} size="2.5rem" ta="center" c="var(--primary-color)">
                            柴田 優太
                        </Title>

                        <Badge size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime' }}>
                            バックエンドエンジニア志望
                        </Badge>

                        <Title order={2} size="1.5rem" ta="center" c="var(--color-text-primary)" fw={500} style={{ fontStyle: 'italic' }}>
                            少しでも多くの人が幸せに、また快適に過ごせる世界を
                        </Title>
                    </Stack>

                    <Stack component="section" gap="md" align="flex-start" w="100%" maw={600}>
                        <Title order={3} size="h4" c="var(--primary-color)">About Me</Title>
                        <Group gap="md">
                            <Text fw="bold" size="sm">年齢:</Text>
                            <Text size="sm">{age}歳</Text>
                        </Group>
                        <Group gap="md">
                            <Text fw="bold" size="sm">所属:</Text>
                            <Text size="sm">武蔵野大学データサイエンス学部データサイエンス学科(28卒)</Text>
                        </Group>

                        <Text mt="md">
                            大学にてデータ分析やエンジニアリングの勉強をしながら、自分や世界の将来について考えています。
                        </Text>
                        <Text>
                            アニメとゲームと野球と開発が好きなエンジニア志望の学生です。
                        </Text>
                        <Text>
                            ユーザーのQOLを向上させることのできるシステムを開発することが目標です。
                        </Text>
                    </Stack>

                    <Stack gap="md" align="center" w="100%">
                        <Button
                            size="lg"
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan' }}
                            rightSection={<IconChevronDown size={20} />}
                            onClick={scrollToProjects}
                        >
                            プロジェクトを見る
                        </Button>

                        <Stack gap="xs" align="center">
                            <Text size="sm" fw={600} c="dimmed">Connect</Text>
                            <Group gap="md">
                                {linksData.map((link) => {
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
            </Card>
        </Stack>
    );
};

export default AboutSection;
