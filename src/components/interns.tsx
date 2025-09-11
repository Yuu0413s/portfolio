import { Stack, Title, Text, Divider, Center } from "@mantine/core";
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
        <Stack component="section" w="100%" align="flex-start" gap="xl">
            {INTERNSHIP_LIST.map((internship, index) => {
                const InternComponent = internship.component;

                return (
                    <Stack
                        key={internship.slug}
                        align="flex-start"
                        gap="md"
                        w="100%"
                    >
                        <Title order={4} size="h4">{internship.internshipTitle}</Title>
                        <Text fw="bold">{internship.companyName}</Text>
                        <Text c="dimmed">{internship.period}</Text>
                        <Text>{internship.description}</Text>

                        {InternComponent && <InternComponent />}

                        {index < INTERNSHIP_LIST.length - 1 && <Divider mt="lg" />}
                    </Stack>
                );
            })}
        </Stack>
    );
};

export default Interns;