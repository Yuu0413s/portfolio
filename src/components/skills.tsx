import { Stack, Title, Text, Card, Rating } from '@mantine/core';

const skills = [
    {
        name: "Python",
        rating: 3,
        description: "データ分析・web開発。pandas, numpy, streamlitを使用",
    },
    {
        name: "SQL",
        rating: 2,
        description: "データベース設計・データ抽出。postgreSQL, SQLiteを使用",
    },
    {
        name: "HTML/CSS",
        rating: 4,
        description: "webサイト作成",
    },
    {
        name: "JavaScript/TypeScript",
        rating: 4,
        description: "フロントエンド開発。Vanilla JS/TSからReactまで経験",
    },
    {
        name: "Convex",
        rating: 2,
        description: "バックエンド開発。Clerkを併用したReact Nativeアプリの開発経験あり",
    }
];

const SkillsSection = () => {
    return (
        <Stack component="section" id="skills" align="center" gap="lg">
            <Title order={2}>
                スキル
            </Title>

            <Stack component="ul" gap="lg" w="100%" maw={600}>
                {skills.map((skill) => (
                    <Card
                        component="li"
                        shadow="sm"
                        padding="lg"
                        radius="md"
                        withBorder
                        key={skill.name}
                    >
                        <Title order={3} size="h4">{skill.name}</Title>

                        <Rating value={skill.rating} readOnly mt="sm" />

                        <Text c="dimmed" mt="sm">{skill.description}</Text>
                    </Card>
                ))}
            </Stack>
        </Stack>
    );
};

export default SkillsSection;