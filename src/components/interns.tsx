import { Stack, Title, Text, Divider, Center } from "@mantine/core";
import React from 'react';

type Internship = {
    slug: string;
    companyName: string;
    internshipTitle: string;
    period: string;
    description: string;
    component?: React.FC;
};

export const INTERNSHIP_LIST: Internship[] = [
    /*//インターン追加時のテンプレート
    {
        slug: "sample-company-intern-2025",
        companyName: "株式会社サンプル",
        internshipTitle: "ソフトウェアエンジニア インターン",
        period: "2025年8月 ~ 2025年9月",
        description: "Webサービスのフロントエンド開発を担当しました。",
        // component: SampleIntern,
    },
    */
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