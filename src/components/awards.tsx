import { Stack, Group, Title, Text, Center, Card, ThemeIcon, Badge } from '@mantine/core';
import { IconTrophy, IconAward } from '@tabler/icons-react';

type Award = {
    awardName: string;
    eventName: string;
    date: string;
    description: string;
};

const awardsData: Award[] = [
    {
        eventName: "MUDS 第1回学内ハッカソン",
        awardName: "審査員賞",
        date: "2025年7月5日",
        description: "開発したプロダクト「お財布平和条約」の企画と実用性、またデプロイまで行ったことが評価されました。",
    },
    {
        eventName: "MUDS 第2回学内ハッカソン",
        awardName: "審査員賞",
        date: "2025年12月13日",
        description: "開発したSlack Botの目的と実用性、管理・運営等の将来性が評価されました。",
    },
];

const AwardSection = () => {
    if (awardsData.length === 0) {
        return (
            <Stack component="section" w="100%" align="center" gap="lg">
                <Title order={2}>
                    受賞経歴
                </Title>
                <Center p="lg">
                    <Text c="dimmed">まだ受賞歴はありません。</Text>
                </Center>
            </Stack>
        );
    }

    return (
        <Stack component="section" w="100%" align="center" gap="lg">
            <Title order={2}>
                受賞経歴
            </Title>

            <Stack component="ul" gap="lg" w="100%" maw={700}>
                {awardsData.map((award, index) => (
                    <Card
                        key={index}
                        shadow="md"
                        padding="xl"
                        radius="lg"
                        withBorder
                        className="custom-card"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, var(--color-bg-surface) 100%)',
                        }}
                    >
                        <Stack gap="sm">
                            <Group gap="sm" align="center" wrap="nowrap">
                                <ThemeIcon
                                    size={44}
                                    radius="xl"
                                    variant="gradient"
                                    gradient={{ from: 'yellow', to: 'orange' }}
                                    style={{ flexShrink: 0 }}
                                >
                                    <IconTrophy size={24} />
                                </ThemeIcon>
                                <Title order={3} size="h3" style={{ flex: 1 }}>{award.awardName}</Title>
                                <Badge variant="light" color="yellow" style={{ flexShrink: 0 }}>
                                    <IconAward size={12} style={{ marginRight: 4 }} />
                                    受賞
                                </Badge>
                            </Group>

                            <Text fw={700} size="md">{award.eventName}</Text>
                            <Text size="sm" c="dimmed">{award.date}</Text>
                            <Text size="sm" mt="xs">{award.description}</Text>
                        </Stack>
                    </Card>
                ))}
            </Stack>
        </Stack>
    );
};

export default AwardSection;