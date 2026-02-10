import { Stack, Title, Text, Card, Badge, Group, Button, Collapse, Divider } from '@mantine/core';
import { IconAward, IconCode, IconUsers, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';

import MudsHackathon from "../contents/projects/muds-hackathon";
import SmbcChallenge from "../contents/projects/smbc-challenge";
import GeekCamp from "../contents/projects/geekcamp-2025v8";
import OC2025 from "../contents/projects/oc-2025-08";
import MudsHackathon_vol2 from '../contents/projects/muds-hackathon-Vol2';

export const HACKATHON_LIST = [
    {
        slug: "smbc-gdc-2025",
        title: "SMBC Group GREEN×DATA Challenge 2025",
        description: "機械学習を用いて電力価格予測を行い、その精度を競うコンペティション。",
        date: "開催期間 2025/06/02 ~ 06/30",
        year: 2025,
        component: SmbcChallenge,
        tags: ["Python", "機械学習", "データ分析"],
        icon: <IconCode size={24} />,
    },
    {
        slug: "muds-hackathon-2025",
        title: "MUDS 学内ハッカソン",
        description: "学内で開催されたハッカソン。",
        date: "事前開発期間 2025/06/27~7/4, 発表 2025/07/05",
        year: 2025,
        component: MudsHackathon,
        tags: ["Next.js", "TypeScript", "Web開発"],
        icon: <IconAward size={24} />,
    },
    {
        slug: "geek-camp-2025-vol8",
        title: "技育CAMPハッカソン Vol.8",
        description: "サポーターズ主催のハッカソン",
        date: "事前開発期間 2025/07/18~7/26 発表 2025/07/27",
        year: 2025,
        component: GeekCamp,
        tags: ["React", "TypeScript", "チーム開発"],
        icon: <IconUsers size={24} />,
    },
    {
        slug: "muds-oc-0205-08",
        title: "武蔵野大学オープンキャンパス",
        description: "オープンキャンパスにて開発したwebアプリについて発表",
        date: "2025/08/23",
        year: 2025,
        component: OC2025,
        tags: ["Web開発", "プレゼンテーション"],
        icon: <IconCode size={24} />,
    },
    {
        slug: "muds-hackathon-2025-vol2",
        title: "第2回 MUDS 学内ハッカソン",
        description: "学内で開催されたハッカソン。",
        date: "事前開発期間 2025/12/5~12/12, 発表 2025/12/13",
        year: 2025,
        component: MudsHackathon_vol2,
        tags: ["Slack Bot", "TypeScript", "自動化"],
        icon: <IconAward size={24} />,
    },
];

const ProjectCard = ({ hackathon }: { hackathon: typeof HACKATHON_LIST[0] }) => {
    const [opened, setOpened] = useState(false);
    const ProjectComponent = hackathon.component;

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
                            {hackathon.icon}
                        </div>
                        <Stack gap="xs" style={{ flex: 1 }}>
                            <Title order={3} size="h4">{hackathon.title}</Title>
                            <Text size="sm" c="dimmed">{hackathon.date}</Text>
                        </Stack>
                    </Group>
                </Group>

                <Text size="sm">{hackathon.description}</Text>

                <Group gap="xs">
                    {hackathon.tags?.map((tag) => (
                        <Badge key={tag} variant="light" color="blue" size="sm">
                            {tag}
                        </Badge>
                    ))}
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
                        borderTop: '1px solid var(--light-gray)',
                        backgroundColor: 'rgba(52, 152, 219, 0.03)',
                        borderRadius: '8px',
                    }}>
                        <ProjectComponent />
                    </Stack>
                </Collapse>
            </Stack>
        </Card>
    );
};

const YearSection = ({ year, projects }: { year: number; projects: typeof HACKATHON_LIST }) => {
    const [opened, setOpened] = useState(false); // デフォルトで閉じた状態

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
                    {projects.map((hackathon) => (
                        <ProjectCard key={hackathon.slug} hackathon={hackathon} />
                    ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const Projects = () => {
    // 年ごとにプロジェクトをグループ化
    const groupByYear = () => {
        const grouped: { [year: number]: typeof HACKATHON_LIST } = {};
        HACKATHON_LIST.forEach((hackathon) => {
            if (!grouped[hackathon.year]) {
                grouped[hackathon.year] = [];
            }
            grouped[hackathon.year].push(hackathon);
        });
        return grouped;
    };

    const projectsByYear = groupByYear();
    const years = Object.keys(projectsByYear).map(Number).sort((a, b) => b - a); // 新しい年から順に

    return (
        <Stack component="section" w="100%" align="flex-start" gap="xl">
            {years.map((year) => (
                <YearSection key={year} year={year} projects={projectsByYear[year]} />
            ))}
        </Stack>
    );
};

export default Projects;