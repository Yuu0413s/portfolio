import { Stack, Title, Text, Center, Card, Badge, Group, ThemeIcon } from "@mantine/core";
import { IconBriefcase } from '@tabler/icons-react';
import React from 'react';

import LITALICOWonder from "../contents/interns/litalico-wonder";

type Internship = {
    slug: string;
    companyName: string;
    internshipTitle: string;
    period: string;
    description: string;
    component?: React.FC;
};

export const INTERNSHIP_LIST: Internship[] = [
    {
        slug: "litalico-wonder",
        companyName: "株式会社LITALICO",
        internshipTitle: "LITALICOワンダー 新宿教室講師",
        period: "2025年9月 ~",
        description: "子供向けプログラミング教育の講師。",
        component: LITALICOWonder,
    },
    {
        slug: "ai-consulting",
        companyName: "株式会社A.I Consulting",
        internshipTitle: "株式会社A.I Consulting",
        period: "2025年12月 ~",
        description: "フルスタックエンジニア（バックエンド中心）として、様々な開発を行っている。",
    },
];

const Interns = () => {
    if (INTERNSHIP_LIST.length === 0) {
        return (
            <Center component="section" w="100%" p="lg">
                <Text c="dimmed">
                    インターンシップ経験はありません。
                </Text>
            </Center>
        );
    }

    return (
        <Stack component="section" w="100%" align="flex-start" gap="lg">
            {INTERNSHIP_LIST.map((internship) => {
                const InternComponent = internship.component;

                return (
                    <Card
                        key={internship.slug}
                        shadow="md"
                        padding="xl"
                        radius="lg"
                        withBorder
                        className="custom-card"
                        w="100%"
                    >
                        <Stack gap="md">
                            <Group gap="md" align="flex-start">
                                <ThemeIcon
                                    size={50}
                                    radius="md"
                                    variant="gradient"
                                    gradient={{ from: 'teal', to: 'cyan' }}
                                >
                                    <IconBriefcase size={28} />
                                </ThemeIcon>

                                <Stack gap="xs" style={{ flex: 1 }}>
                                    <Title order={3} size="h4">{internship.internshipTitle}</Title>
                                    <Text fw={700} c="blue">{internship.companyName}</Text>
                                    <Group gap="xs">
                                        <Badge variant="light" color="teal">
                                            {internship.period}
                                        </Badge>
                                    </Group>
                                </Stack>
                            </Group>

                            <Text>{internship.description}</Text>

                            {InternComponent && <InternComponent />}
                        </Stack>
                    </Card>
                );
            })}
        </Stack>
    );
};

export default Interns;