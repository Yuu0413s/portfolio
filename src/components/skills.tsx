import { Stack, Title, Text, Card, Badge, Group, ThemeIcon, Progress, Divider } from '@mantine/core';
import { IconBrandPython, IconDatabase, IconBrandHtml5, IconBrandJavascript, IconBrandTypescript, IconBrandNextjs, IconWand, IconServer, IconPlug, IconSearch, IconBrandSlack, IconBrandDocker, IconBrandGit, IconBrandAzure, IconBrandSupabase, IconBrandNodejs, IconFileText, IconBrandCloudflare, IconBrandGoogleMaps, IconShieldCheck, IconStack, IconBolt, IconRoute } from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const mainSkills = [
    {
        name: "Cloudflare Workers",
        level: 45,
        description: "小説検索＆推薦システムのバックエンドをCloudflare Workers + D1 + Vectorizeで構築",
        icon: <IconServer size={28} />,
        color: "#F6821F",
    },
    {
        name: "API設計・統合",
        level: 50,
        description: "5種類の外部APIを統合し、リトライ・指数バックオフによる堅牢な通信処理を実装",
        icon: <IconPlug size={28} />,
        color: "#5C6BC0",
    },
    {
        name: "ベクトル検索",
        level: 35,
        description: "Gemini Embedding APIで768次元ベクトルを生成しCloudflare Vectorizeでセマンティック検索を実装",
        icon: <IconSearch size={28} />,
        color: "#9C27B0",
    },
    {
        name: "JavaScript/TypeScript",
        level: 60,
        description: "React + Viteでのポートフォリオ・Webアプリ開発、React Nativeによるスマホ開発、Honoによるバックエンド開発（API作成・テスト作成と実行）の経験あり",
        icon: (
            <Group gap={4}>
                <IconBrandJavascript size={22} />
                <IconBrandTypescript size={22} />
            </Group>
        ),
        color: "#3178C6",
    },
    {
        name: "Python",
        level: 60,
        description: "pandasでのデータ分析・機械学習モデル構築経験あり",
        icon: <IconBrandPython size={28} />,
        color: "#3776AB",
    },
    {
        name: "HTML/CSS",
        level: 60,
        description: "Mantine UIを使ったレスポンシブWebアプリ開発経験あり",
        icon: <IconBrandHtml5 size={28} />,
        color: "#E34F26",
    },
    {
        name: "Convex",
        level: 35,
        description: "MyFitCoachのバックエンドをConvexで実装（初めてのBaaS活用）",
        icon: <IconDatabase size={28} />,
        color: "#FF6154",
    },
    {
        name: "Slack Bot開発",
        level: 40,
        description: "先輩後輩マッチングBotをTypeScript（Slack Bolt）で開発・運用",
        icon: <IconBrandSlack size={28} />,
        color: "#36C5F0",
    },
    {
        name: "Git / GitHub",
        level: 65,
        description: "個人・チーム開発でのブランチ管理・PR・コードレビューを日常的に実施",
        icon: <IconBrandGit size={28} />,
        color: "#F05032",
    },
];

const learningSkills = [
    { name: "SQL", icon: <IconDatabase size={14} /> },
    { name: "Next.js", icon: <IconBrandNextjs size={14} /> },
    { name: "ローコード/ノーコード", icon: <IconWand size={14} /> },
    { name: "PostgreSQL", icon: <IconDatabase size={14} /> },
    { name: "Docker", icon: <IconBrandDocker size={14} /> },
    { name: "Azure OpenAI", icon: <IconBrandAzure size={14} /> },
    { name: "Azure AI Search", icon: <IconBrandAzure size={14} /> },
    { name: "Expo Router", icon: <IconRoute size={14} /> },
    { name: "pandas", icon: <IconBrandPython size={14} /> },
    { name: "scikit-learn", icon: <IconBrandPython size={14} /> },
    { name: "LightGBM", icon: <IconBrandPython size={14} /> },
    { name: "Supabase", icon: <IconBrandSupabase size={14} /> },
    { name: "Node.js", icon: <IconBrandNodejs size={14} /> },
    { name: "LaTeX", icon: <IconFileText size={14} /> },
    { name: "Drizzle ORM", icon: <IconDatabase size={14} /> },
    { name: "Neon", icon: <IconDatabase size={14} /> },
    { name: "Better Auth", icon: <IconShieldCheck size={14} /> },
    { name: "Cloudflare R2", icon: <IconBrandCloudflare size={14} /> },
    { name: "Google Maps API", icon: <IconBrandGoogleMaps size={14} /> },
    { name: "Turborepo", icon: <IconStack size={14} /> },
    { name: "Bun", icon: <IconBolt size={14} /> },
];

const SkillCard = ({ skill, index }: { skill: typeof mainSkills[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card
                component="li"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                className="custom-card"
                style={{ height: '100%' }}
            >
                <Group gap="md" align="center">
                    <ThemeIcon
                        size={50}
                        radius="md"
                        variant="light"
                        color={skill.color}
                    >
                        {skill.icon}
                    </ThemeIcon>
                    <Title order={3} size="h4">{skill.name}</Title>
                </Group>

                <Text c="dimmed" mt="md" size="sm">{skill.description}</Text>

                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    style={{ marginTop: '1rem' }}
                >
                    <Progress
                        value={skill.level}
                        color={skill.color}
                        size="md"
                        radius="xl"
                        animated
                    />
                </motion.div>
            </Card>
        </motion.div>
    );
};

const SkillsSection = () => {
    return (
        <Stack component="section" align="center" gap="lg">
            <Title order={2}>
                スキル
            </Title>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
                width: '100%',
                listStyle: 'none',
                padding: 0,
                alignItems: 'stretch',
            }}>
                {mainSkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
            </div>

            <Divider w="100%" label="学習中" labelPosition="center" />

            <Group gap="sm" justify="center">
                {learningSkills.map((skill) => (
                    <Badge
                        key={skill.name}
                        variant="outline"
                        size="lg"
                        leftSection={skill.icon}
                    >
                        {skill.name}
                    </Badge>
                ))}
            </Group>
        </Stack>
    );
};

export default SkillsSection;
