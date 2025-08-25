import { Stack, Group, Title, Text, Center, Card } from '@mantine/core';

type Award = {
    awardName: string;
    eventName: string;
    date: string;
    description: string;
};

const awardsData: Award[] = [
    {
        awardName: "審査員賞",
        eventName: "MUDS 第1回学内ハッサン",
        date: "2025年7月5日",
        description: "開発したプロダクト「お財布平和条約」の企画と実装が評価されました。",
    },
];

const AwardSection = () => {
    if (awardsData.length === 0) {
        return (
            <Stack component="section" id="awards" w="100%" align="center" gap="lg">
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
        <Stack component="section" id="awards" w="100%" align="center" gap="lg">
        <Title order={2}>
            受賞経歴
        </Title>

            <Stack component="ul" gap="lg" w="100%" maw={600}>
                {awardsData.map((award, index) => (
                <Card
                    component="li"
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    key={index}
                >
                    <Group justify="space-between">
                    <Title order={3} size="h4">{award.awardName}</Title>
                    <Text size="sm" c="dimmed">{award.date}</Text>
                    </Group>
                    <Text fw="bold" mt="md">{award.eventName}</Text>
                    <Text c="dimmed" mt="sm">{award.description}</Text>
                </Card>
                ))}
            </Stack>
        </Stack>
    );
};

export default AwardSection;