import { Stack, Text, Accordion, Badge, Group } from '@mantine/core';
import type { SimpleIcon } from 'simple-icons';
import {
    siJavascript, siTypescript, siPython, siCloudflare, siGithub, siPostgresql, siDocker,
    siReact, siNextdotjs, siHono, siNodedotjs, siBun, siExpo, siVite,
    siMantine, siTurborepo, siDrizzle, siBetterauth, siHtml5,
    siFlask, siPandas, siNumpy, siScikitlearn,
    siCloudflareworkers,
    siGit,
    siSqlite, siNeon, siSupabase, siConvex,
    siLatex, siGooglegemini, siGooglemaps,
} from 'simple-icons';
import BrandIcon from './BrandIcon';

type Keyword =
    | "React" | "Next.js" | "Hono" | "Node.js" | "Bun" | "React Native" | "Expo Router" | "Vite"
    | "Mantine UI" | "Turborepo" | "Drizzle ORM" | "Better Auth" | "Slack Bolt" | "HTML/CSS"
    | "Flask" | "pandas" | "numpy" | "scikit-learn" | "LightGBM"
    | "Workers" | "D1" | "R2" | "Vectorize"
    | "Git" | "GitHub" | "Pull Request" | "コードレビュー"
    | "PostgreSQL" | "SQLite" | "Neon" | "Supabase" | "Convex"
    | "ノーコード/ローコード" | "LaTeX" | "Docker" | "Azure OpenAI" | "Azure AI Search" | "Gemini Embedding API" | "Google Maps API";

const keywordIcons: Partial<Record<Keyword, SimpleIcon>> = {
    'React': siReact,
    'React Native': siReact,
    'Next.js': siNextdotjs,
    'Hono': siHono,
    'Node.js': siNodedotjs,
    'Bun': siBun,
    'Expo Router': siExpo,
    'Vite': siVite,
    'Mantine UI': siMantine,
    'Turborepo': siTurborepo,
    'Drizzle ORM': siDrizzle,
    'Better Auth': siBetterauth,
    'HTML/CSS': siHtml5,
    'Flask': siFlask,
    'pandas': siPandas,
    'numpy': siNumpy,
    'scikit-learn': siScikitlearn,
    'Workers': siCloudflareworkers,
    'D1': siCloudflare,
    'R2': siCloudflare,
    'Vectorize': siCloudflare,
    'Git': siGit,
    'GitHub': siGithub,
    'Pull Request': siGithub,
    'コードレビュー': siGithub,
    'PostgreSQL': siPostgresql,
    'SQLite': siSqlite,
    'Neon': siNeon,
    'Supabase': siSupabase,
    'Convex': siConvex,
    'Docker': siDocker,
    'LaTeX': siLatex,
    'Gemini Embedding API': siGooglegemini,
    'Google Maps API': siGooglemaps,
};

type Skill = {
    name: string;
    description: string;
    icon: React.ReactNode;
    keywords: Keyword[];
};

const skills: Skill[] = [
    {
        name: "JavaScript / TypeScript",
        description: "Reactを使用したフロントエンド開発からNext.js, Honoを使用したバックエンド開発まで幅広く経験し、学習中",
        icon: (
            <Group gap={4}>
                <BrandIcon icon={siJavascript} size={16} />
                <BrandIcon icon={siTypescript} size={16} />
            </Group>
        ),
        keywords: ["React", "Next.js", "Hono", "Node.js", "Bun", "React Native", "Expo Router", "Vite", "Mantine UI", "Turborepo", "Drizzle ORM", "Better Auth", "Slack Bolt", "HTML/CSS"],
    },
    {
        name: "Python",
        description: "Flaskを使用したweb開発から、sklearnやnumpy, pandasを使用したデータ分析の基礎を学習中",
        icon: <BrandIcon icon={siPython} size={20} />,
        keywords: ["Flask", "pandas", "numpy", "scikit-learn", "LightGBM"],
    },
    {
        name: "Cloudflare",
        description: "workersを使用したwebサイトのdeployや、D1を用いたデータベース管理を行っている。",
        icon: <BrandIcon icon={siCloudflare} size={20} />,
        keywords: ["Workers", "D1", "R2", "Vectorize"],
    },
    {
        name: "Git / GitHub",
        description: "個人・チーム開発でのブランチ管理、Pull Request、コードレビューを日常的に実施",
        icon: <BrandIcon icon={siGithub} size={20} />,
        keywords: ["Git", "GitHub", "Pull Request", "コードレビュー"],
    },
    {
        name: "SQL",
        description: "D1やPostgreSQLを用いたテーブル設計・クエリ作成を行っており、学習中",
        icon: <BrandIcon icon={siPostgresql} size={20} />,
        keywords: ["PostgreSQL", "SQLite", "D1", "Neon", "Supabase", "Convex"],
    },
    {
        name: "その他",
        description: "ノーコード/ローコードツールを使用したwebサイトのプロトタイプ作成やLaTeXを使用した論文作成など、下記の技術について触れたことがあるまたは学習中です",
        icon: <BrandIcon icon={siDocker} size={20} />,
        keywords: ["ノーコード/ローコード", "LaTeX", "Docker", "Azure OpenAI", "Azure AI Search", "Gemini Embedding API", "Google Maps API"],
    },
];

const SkillsSection = () => {
    return (
        <Stack component="section" gap="lg">
            <Text component="h2" size="xs" c="var(--color-text-label)" style={{ letterSpacing: '0.08em' }}>
                SKILLS
            </Text>

            <Accordion
                multiple
                variant="separated"
                radius="sm"
                chevronPosition="right"
                w="100%"
                styles={{
                    item: {
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg-surface)',
                    },
                }}
            >
                {skills.map((skill) => (
                    <Accordion.Item key={skill.name} value={skill.name}>
                        <Accordion.Control icon={skill.icon}>
                            <Text fw={500} size="sm">{skill.name}</Text>
                        </Accordion.Control>

                        <Accordion.Panel>
                            <Text size="sm" c="var(--color-text-secondary)" mb="md">
                                {skill.description}
                            </Text>

                            <Text size="xs" fw={500} mb="xs">Keywords</Text>

                            <Group gap="xs">
                                {skill.keywords.map((keyword) => (
                                    <Badge
                                        key={keyword}
                                        variant="outline"
                                        size="sm"
                                        radius="sm"
                                        leftSection={
                                            keywordIcons[keyword]
                                                ? <BrandIcon icon={keywordIcons[keyword]} size={12} />
                                                : <span aria-hidden="true">・</span>
                                        }
                                    >
                                        {keyword}
                                    </Badge>
                                ))}
                            </Group>
                        </Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Stack>
    );
};

export default SkillsSection;
