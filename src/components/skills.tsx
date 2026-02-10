import { Stack, Title, Text, Card, Rating, Group, ThemeIcon, Progress, Tooltip } from '@mantine/core';
import { IconBrandPython, IconDatabase, IconBrandHtml5, IconBrandJavascript, IconBrandTypescript, IconBrandNextjs, IconWand } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
    {
        name: "Python",
        rating: 3,
        level: 60,
        description: "データ分析・web開発。pandas, numpy, streamlitを使用",
        icon: <IconBrandPython size={28} />,
        color: "#3776AB",
    },
    {
        name: "SQL",
        rating: 1,
        level: 20,
        description: "データベース設計・データ抽出。postgreSQL, SQLiteを使用",
        icon: <IconDatabase size={28} />,
        color: "#336791",
    },
    {
        name: "HTML/CSS",
        rating: 3,
        level: 60,
        description: "webサイト作成",
        icon: <IconBrandHtml5 size={28} />,
        color: "#E34F26",
    },
    {
        name: "JavaScript/TypeScript",
        rating: 3,
        level: 60,
        description: "フロントエンド開発。Vanilla JS/TSからReactまで経験",
        icon: (
            <Group gap={4}>
                <IconBrandJavascript size={24} />
                <IconBrandTypescript size={24} />
            </Group>
        ),
        color: "#3178C6",
    },
    {
        name: "Next.js",
        rating: 2,
        level: 40,
        description: "Vercelを用いたdeployが可能。",
        icon: <IconBrandNextjs size={28} />,
        color: "#000000",
    },
    {
        name: "ローコード/ノーコード",
        rating: 2,
        level: 20,
        description: "ローコード/ノーコードツールを使用したwebサイト開発",
        icon: <IconWand size={28} />,
        color: "#7B68EE",
    }
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
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
                <Group justify="space-between" align="flex-start" wrap="nowrap">
                    <Group gap="md">
                        <ThemeIcon
                            size={50}
                            radius="md"
                            variant="light"
                            color={skill.color}
                        >
                            {skill.icon}
                        </ThemeIcon>
                        <Stack gap="xs" style={{ flex: 1 }}>
                            <Title order={3} size="h4">{skill.name}</Title>
                            <Rating value={skill.rating} readOnly size="sm" />
                        </Stack>
                    </Group>
                </Group>

                <Text c="dimmed" mt="md" size="sm">{skill.description}</Text>

                <Stack gap="xs" mt="md">
                    <Group justify="space-between">
                        <Text size="xs" fw={500}>習熟度</Text>
                        <Tooltip label={`${skill.level}%`} position="top">
                            <Text size="xs" c="dimmed">{skill.level}%</Text>
                        </Tooltip>
                    </Group>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : {}}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    >
                        <Progress
                            value={skill.level}
                            color={skill.color}
                            size="md"
                            radius="xl"
                            animated
                        />
                    </motion.div>
                </Stack>
            </Card>
        </motion.div>
    );
};

const SkillsSection = () => {
    return (
        <Stack component="section" id="skills" align="center" gap="lg">
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
                {skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </Stack>
    );
};

export default SkillsSection;