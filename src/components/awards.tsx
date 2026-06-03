import { Stack, Group, Title, Text, Center, Card, ThemeIcon, Badge, Image } from '@mantine/core';
import { IconTrophy, IconAward } from '@tabler/icons-react';

type Award = {
    awardName: string;
    eventName: string;
    date: string;
    description: string;
    image?: string;
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
    {
        eventName: "2025年度 DSアワード",
        awardName: "Advanced Data Science Research Award 2025",
        date: "2026年3月6日",
        description: "保持者が当該年度における優れたデータサイエンスの研究を行ったことを証明するものである。課題設定の独創性と妥当性、データサイエンスに基づく分析・実装の完成度、プレゼンテーションの質と説得力において卓越し、社会課題の解決と未来志向の価値創造に貢献する、学部を代表する優れた研究成果を挙げた者に授与される。",
        image: "/DS.png",
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
                                <Badge variant="light" color="yellow" size="sm" style={{ flexShrink: 0 }}>
                                    <IconAward size={10} style={{ marginRight: 4 }} />
                                    受賞
                                </Badge>
                            </Group>

                            <Text fw={700} size="md">{award.eventName}</Text>
                            <Text size="sm" c="dimmed">{award.date}</Text>
                            <Text size="sm" mt="xs">{award.description}</Text>
                            {award.image && (
                                <Image src={award.image} alt={award.awardName} radius="md" mt="xs" />
                            )}
                        </Stack>
                    </Card>
                ))}
            </Stack>
        </Stack>
    );
};

export default AwardSection;