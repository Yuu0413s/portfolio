import { Stack, Title, Text, Card, Badge, Group, ThemeIcon, Divider } from '@mantine/core';
import { IconBrandPython, IconDatabase, IconBrandHtml5, IconBrandJavascript, IconBrandTypescript, IconBrandNextjs, IconWand, IconServer, IconPlug, IconSearch, IconBrandSlack, IconBrandDocker, IconBrandGit, IconBrandAzure, IconBrandSupabase, IconBrandNodejs, IconFileText, IconBrandCloudflare, IconBrandGoogleMaps, IconShieldCheck, IconStack, IconBolt, IconRoute } from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type SkillUsage = 'team' | 'personal' | 'learning';

const usageLabels: Record<SkillUsage, string> = {
    team: 'チーム開発で使用',
    personal: '個人開発で使用',
    learning: '学習中',
};

const usageOrder: SkillUsage[] = ['team', 'personal', 'learning'];

const mainSkills: { name: string; usage: SkillUsage; description: string; icon: React.ReactNode }[] = [
    {
        name: "Cloudflare Workers",
        usage: "personal",
        description: "小説検索＆推薦システムのバックエンドをCloudflare Workers + D1 + Vectorizeで構築",
        icon: <IconServer size={28} />,
    },
    {
        name: "API設計・統合",
        usage: "personal",
        description: "5種類の外部APIを統合し、リトライ・指数バックオフによる堅牢な通信処理を実装",
        icon: <IconPlug size={28} />,
    },
    {
        name: "ベクトル検索",
        usage: "learning",
        description: "Gemini Embedding APIで768次元ベクトルを生成しCloudflare Vectorizeでセマンティック検索を実装",
        icon: <IconSearch size={28} />,
    },
    {
        name: "JavaScript/TypeScript",
        usage: "team",
        description: "React + Viteでのポートフォリオ・Webアプリ開発、React Nativeによるスマホ開発、Honoによるバックエンド開発（API作成・テスト作成と実行）の経験あり",
        icon: (
            <Group gap={4}>
                <IconBrandJavascript size={22} />
                <IconBrandTypescript size={22} />
            </Group>
        ),
    },
    {
        name: "Python",
        usage: "team",
        description: "pandasでのデータ分析・機械学習モデル構築経験あり",
        icon: <IconBrandPython size={28} />,
    },
    {
        name: "HTML/CSS",
        usage: "team",
        description: "Mantine UIを使ったレスポンシブWebアプリ開発経験あり",
        icon: <IconBrandHtml5 size={28} />,
    },
    {
        name: "Convex",
        usage: "learning",
        description: "MyFitCoachのバックエンドをConvexで実装（初めてのBaaS活用）",
        icon: <IconDatabase size={28} />,
    },
    {
        name: "Slack Bot開発",
        usage: "personal",
        description: "先輩後輩マッチングBotをTypeScript（Slack Bolt）で開発・運用",
        icon: <IconBrandSlack size={28} />,
    },
    {
        name: "Git / GitHub",
        usage: "team",
        description: "個人・チーム開発でのブランチ管理・PR・コードレビューを日常的に実施",
        icon: <IconBrandGit size={28} />,
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
                padding="lg"
                radius="sm"
                withBorder
                className="custom-card"
                style={{ height: '100%' }}
            >
                <Group gap="md" align="flex-start" wrap="nowrap">
                    <ThemeIcon
                        size={50}
                        radius="md"
                        variant="default"
                        style={{ flexShrink: 0 }}
                    >
                        {skill.icon}
                    </ThemeIcon>
                    <Title order={3} size="h4" style={{ flex: 1, minWidth: 0 }}>{skill.name}</Title>
                </Group>

                <Text c="dimmed" mt="md" size="sm">{skill.description}</Text>
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

            {usageOrder.map((usage) => {
                const skills = mainSkills.filter((skill) => skill.usage === usage);
                if (skills.length === 0) return null;

                return (
                    <Stack key={usage} gap="md" w="100%" align="flex-start">
                        <Text size="xs" c="var(--color-text-label)" style={{ letterSpacing: '0.08em' }}>
                            {usageLabels[usage]}
                        </Text>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1rem',
                            width: '100%',
                            listStyle: 'none',
                            padding: 0,
                            alignItems: 'stretch',
                        }}>
                            {skills.map((skill, index) => (
                                <SkillCard key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </Stack>
                );
            })}

            <Divider w="100%" label="学習中" labelPosition="center" />

            <Group gap="sm" justify="center">
                {learningSkills.map((skill) => (
                    <Badge
                        key={skill.name}
                        variant="outline"
                        size="lg"
                        radius="sm"
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
