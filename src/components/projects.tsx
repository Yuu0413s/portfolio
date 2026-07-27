import { Stack, Title, Text, Card, Badge, Group, Button, Collapse, Divider, Tabs } from '@mantine/core';
import { IconAward, IconCode, IconUsers, IconChevronDown, IconChevronUp, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { useState, type ComponentType, type ReactNode } from 'react';

import MudsHackathon from "../contents/projects/muds-hackathon";
import SmbcChallenge from "../contents/projects/smbc-challenge";
import GeekCamp from "../contents/projects/geekcamp-2025v8";
import OC2025 from "../contents/projects/oc-2025-08";
import MudsHackathon_vol2 from '../contents/projects/muds-hackathon-Vol2';
import Deim2026 from '../contents/projects/deim2026';
import MicrosoftAgenticHackathon from '../contents/projects/microsoft-agentic-hackathon';
import MudsHackathon_vol3 from '../contents/projects/muds-hackathon-Vol3';

type ProjectData = {
    slug: string;
    title: string;
    description: string;
    date: string;
    year: number;
    component: ComponentType;
    icon: ReactNode;
    role: string;
    techStack: string[];
    challenge: string;
    outcome?: string;
    siteUrl?: string;
    siteLabel?: string;
    githubUrl?: string;
    type: 'team' | 'solo';
    category: 'ハッカソン' | 'コンペティション' | '研究発表' | '個人開発';
};

type Category = ProjectData['category'] | 'すべて';

export const PROJECT_LIST: ProjectData[] = [
    {
        slug: "smbc-gdc-2025",
        title: "SMBC Group GREEN×DATA Challenge 2025",
        description: "機械学習を用いて電力価格予測を行い、その精度を競うコンペティション。",
        date: "開催期間 2025/06/02 ~ 06/30",
        year: 2025,
        component: SmbcChallenge,
        icon: <IconCode size={24} />,
        role: "データ分析・モデル構築",
        techStack: ["Python", "pandas", "scikit-learn", "LightGBM"],
        challenge: "電力価格という複雑な時系列データに対して、特徴量エンジニアリングと複数モデルのアンサンブルで精度向上を図った",
        type: "solo",
        category: "コンペティション",
    },
    {
        slug: "muds-hackathon-2025",
        title: "MUDS 学内ハッカソン",
        description: "学内で開催されたハッカソン。",
        date: "事前開発期間 2025/06/27~7/4, 発表 2025/07/05",
        year: 2025,
        component: MudsHackathon,
        icon: <IconAward size={24} />,
        role: "バックエンド・API設計",
        techStack: ["Next.js", "TypeScript", "Supabase"],
        challenge: "短期間でチームメンバーと役割を分担しながら、要件定義から実装・発表まで完遂させた",
        type: "team",
        category: "ハッカソン",
    },
    {
        slug: "geek-camp-2025-vol8",
        title: "技育CAMPハッカソン Vol.8",
        description: "サポーターズ主催のハッカソン",
        date: "事前開発期間 2025/07/18~7/26 発表 2025/07/27",
        year: 2025,
        component: GeekCamp,
        icon: <IconUsers size={24} />,
        role: "フロントエンド・UI実装",
        techStack: ["React", "TypeScript", "Vite", "Mantine UI"],
        challenge: "初対面のチームメンバーと短期間でコミュニケーションを取りながら、統一感のあるUIを実装した",
        type: "team",
        category: "ハッカソン",
    },
    {
        slug: "muds-oc-0205-08",
        title: "小説検索＆推薦システム",
        description: "ユーザーが入力したキーワードをもとに小説を検索・推薦するWebアプリケーション",
        date: "2025/08/23",
        year: 2025,
        component: OC2025,
        icon: <IconCode size={24} />,
        role: "個人開発（全工程担当：API統合設計・DB設計・ベクトル検索実装）",
        techStack: ["Cloudflare Workers", "Cloudflare D1（SQLite）", "Cloudflare Vectorize", "Gemini Embedding API", "Next.js"],
        challenge: "5種類の外部API（なろう・Google Books・Open Library・CiNii）の統合設計と取得粒度の調整、Gemini Embedding APIを用いたセマンティック検索の実装、cosine類似度スコアを0〜1にスケール変換、リトライ・指数バックオフによる堅牢な通信処理の設計に取り組んだ",
        siteUrl: "https://bookrecom.y-shibata0820.workers.dev",
        githubUrl: "https://github.com/Yuu0413s/book_recom_web",
        type: "solo",
        category: "個人開発",
    },
    {
        slug: "muds-hackathon-2025-vol2",
        title: "第2回 MUDS 学内ハッカソン",
        description: "先輩後輩間の関わりを増やすSlack Botを制作。",
        date: "事前開発期間 2025/12/5~12/12, 発表 2025/12/13",
        year: 2025,
        component: MudsHackathon_vol2,
        icon: <IconAward size={24} />,
        role: "開発全般",
        techStack: ["TypeScript", "Slack Bolt", "Node.js"],
        challenge: "Slack APIの学習から実装まで短期間でこなし、実際のコミュニティ課題を解決するBotを設計した",
        type: "team",
        category: "ハッカソン",
    },
    {
        slug: "deim2026",
        title: "DEIM2026 研究発表",
        description: "第18回データ工学と情報マネジメントに関するフォーラム（DEIM2026）にて研究発表。",
        date: "2026年2月28日",
        year: 2026,
        component: Deim2026,
        icon: <IconAward size={24} />,
        role: "論文執筆・発表（筆頭著者・共著3名）",
        techStack: ["Python", "pandas", "scikit-learn", "LaTeX"],
        challenge: "初めての研究・論文執筆で、先行研究の調査から実験設計・執筆まで試行錯誤を重ねた",
        outcome: "第18回データ工学と情報マネジメントに関するフォーラム（DEIM2026）にて発表",
        siteUrl: "https://pub.confit.atlas.jp/ja/event/deim2026/presentation/3F-05",
        siteLabel: "発表ページを見る",
        type: "solo",
        category: "研究発表",
    },
    {
        slug: "microsoft-agentic-hackathon-2026",
        title: "Microsoft Agentic Hackathon",
        description: "Microsoft主催のハッカソン。実務で即使用可能な業務改善・効率化AIエージェントシステムを作成",
        date: "事前開発期間 2026/04/17~06/01",
        year: 2026,
        component: MicrosoftAgenticHackathon,
        icon: <IconAward size={24} />,
        role: "バックエンド（APIエンドポイント作成・テスト実行）",
        techStack: ["Azure OpenAI", "Azure AI Search", "PostgreSQL", "React", "Next.js"],
        challenge: "初めての大型ハッカソンということで、今まで参加したことのないタイプのハッカソン、かつすごいメンバーだったため、とにかく参加して色々なことを学びたい、また知見を増やして就活の幅を広げたいという思いで取り組んだ",
        outcome: "書類選考の結果、本戦（発表予定日 2026/06/17）には進出できず出場なし",
        siteUrl: "https://decision-loop-web.azurewebsites.net",
        type: "team",
        category: "ハッカソン",
    },
    {
        slug: "muds-hackathon-2026-vol3",
        title: "第3回 MUDS 学内ハッカソン",
        description: "友人同士で気軽に美味しかったご飯を写真付きで共有できるSNS「know-your-meals」を制作",
        date: "事前開発期間 2026/07/03~07/10, 発表 2026/07/11",
        year: 2026,
        component: MudsHackathon_vol3,
        icon: <IconAward size={24} />,
        role: "バックエンド・API設計",
        techStack: ["React Native", "Expo Router", "TypeScript", "Hono", "Drizzle ORM", "Neon", "Better Auth", "Cloudflare R2", "Google Maps API", "Turborepo", "Bun"],
        challenge: "短期間でチームメンバーと役割を分担しながら、要件定義から実装・発表まで完遂させた。また1年前と同じチームメンバーで出場することで、自分がどれだけ成長したかを測りたかった。",
        siteUrl: "https://know-your-meals.com",
        type: "team",
        category: "ハッカソン",
    },
];

const ProjectCard = ({ project }: { project: ProjectData }) => {
    const [opened, setOpened] = useState(false);
    const ProjectComponent = project.component;

    return (
        <Card
            shadow="md"
            padding="lg"
            radius="lg"
            withBorder
            className="custom-card"
            w="100%"
        >
            <Stack gap="md">
                <Group justify="space-between" align="flex-start" wrap="nowrap">
                    <Group gap="md" style={{ flex: 1 }}>
                        <div style={{
                            background: 'var(--gradient-primary)',
                            padding: '12px',
                            borderRadius: '8px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '48px',
                        }}>
                            {project.icon}
                        </div>
                        <Stack gap="xs" style={{ flex: 1 }}>
                            <Title order={3} size="h4">{project.title}</Title>
                            <Text size="sm" c="dimmed">{project.date}</Text>
                        </Stack>
                    </Group>
                </Group>

                <Text size="sm">{project.description}</Text>

                <Group gap="xs" wrap="wrap">
                    <Badge variant="light" color="blue" size="sm">
                        {project.role}
                    </Badge>
                    <Badge variant="outline" color={project.type === 'team' ? 'teal' : 'grape'} size="sm">
                        {project.type === 'team' ? 'チーム' : '個人'}
                    </Badge>
                </Group>

                <Group gap="xs" wrap="wrap">
                    {project.techStack.map((tech) => (
                        <Badge key={tech} variant="dot" color="gray" size="sm">
                            {tech}
                        </Badge>
                    ))}
                </Group>

                {project.outcome && (
                    <Badge variant="filled" color="yellow" size="sm" leftSection="🏆" style={{ alignSelf: 'flex-start' }}>
                        {project.outcome}
                    </Badge>
                )}

                <Group gap="xs" wrap="wrap">
                    {project.siteUrl && (
                        <Button
                            component="a"
                            href={project.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="light"
                            color="blue"
                            size="xs"
                            leftSection={<IconExternalLink size={14} />}
                        >
                            {project.siteLabel ?? 'サイトを見る'}
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button
                            component="a"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="light"
                            color="gray"
                            size="xs"
                            leftSection={<IconBrandGithub size={14} />}
                        >
                            GitHub
                        </Button>
                    )}
                </Group>

                <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    onClick={() => setOpened(!opened)}
                    rightSection={opened ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
                    mt="xs"
                >
                    {opened ? '詳細を閉じる' : '詳細を見る'}
                </Button>

                <Collapse in={opened}>
                    <Stack gap="md" mt="md" p="md" style={{
                        borderTop: '1px solid var(--color-border)',
                        backgroundColor: 'rgba(52, 152, 219, 0.03)',
                        borderRadius: '8px',
                    }}>
                        <Text size="sm">💡 {project.challenge}</Text>
                        <Divider />
                        <ProjectComponent />
                    </Stack>
                </Collapse>
            </Stack>
        </Card>
    );
};

const YearSection = ({ year, projects, isLatest }: { year: number; projects: ProjectData[]; isLatest: boolean }) => {
    const [opened, setOpened] = useState(isLatest);

    return (
        <Stack w="100%" gap="lg">
            <Group
                justify="space-between"
                align="center"
                style={{
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    transition: 'background-color 0.2s ease',
                }}
                onClick={() => setOpened(!opened)}
                className="custom-card"
            >
                <Title order={3} size="h3" c="var(--primary-color)">
                    {year}年
                </Title>
                <Group gap="xs">
                    <Badge variant="light" color="blue" size="lg">
                        {projects.length}件
                    </Badge>
                    {opened ? <IconChevronUp size={24} /> : <IconChevronDown size={24} />}
                </Group>
            </Group>

            <Collapse in={opened}>
                <Stack gap="lg">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const CATEGORIES: Category[] = ['すべて', 'ハッカソン', 'コンペティション', '研究発表', '個人開発'];

function isCategory(value: string | null): value is Category {
    return value !== null && (CATEGORIES as string[]).includes(value);
}

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('すべて');

    const filteredProjects = activeCategory === 'すべて'
        ? PROJECT_LIST
        : PROJECT_LIST.filter((p) => p.category === activeCategory);

    const groupByYear = (list: ProjectData[]) => {
        const grouped: { [year: number]: ProjectData[] } = {};
        list.forEach((project) => {
            if (!grouped[project.year]) {
                grouped[project.year] = [];
            }
            grouped[project.year].push(project);
        });
        return grouped;
    };

    const projectsByYear = groupByYear(filteredProjects);
    const years = Object.keys(projectsByYear).map(Number).sort((a, b) => b - a);

    return (
        <Stack component="section" w="100%" align="flex-start" gap="xl">
            <Tabs
                value={activeCategory}
                onChange={(v) => setActiveCategory(isCategory(v) ? v : 'すべて')}
                w="100%"
            >
                <Tabs.List style={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
                    {CATEGORIES.map((cat) => (
                        <Tabs.Tab key={cat} value={cat}>
                            {cat}（{cat === 'すべて'
                                ? PROJECT_LIST.length
                                : PROJECT_LIST.filter((p) => p.category === cat).length}）
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
            </Tabs>

            {years.map((year, idx) => (
                <YearSection
                    key={`${activeCategory}-${year}`}
                    year={year}
                    projects={projectsByYear[year]}
                    isLatest={idx === 0}
                />
            ))}
        </Stack>
    );
};

export default Projects;
