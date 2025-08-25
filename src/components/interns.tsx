import { VStack, Heading, Text, Divider, Center } from "@yamada-ui/react";
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
            <Center as="section" w="full" p="lg">
                <Text color="muted">
                    インターンシップ経験はありません。
                </Text>
            </Center>
        );
    }

    return (
        <VStack as="section" w="full" alignItems="flex-start" gap="xl">
            {INTERNSHIP_LIST.map((internship, index) => {
                const InternComponent = internship.component;

                    return (
                        <VStack
                            key={internship.slug}
                            alignItems="flex-start"
                            gap="md"
                            w="full"
                        >
                            <Heading as="h4" size="md">{internship.internshipTitle}</Heading>
                            <Text fontWeight="bold">{internship.companyName}</Text>
                            <Text color="muted">{internship.period}</Text>
                            <Text>{internship.description}</Text>
                            {InternComponent && <InternComponent />}
                            {index < INTERNSHIP_LIST.length - 1 && <Divider mt="lg" />}
                        </VStack>
                    );
                })}
        </VStack>
    );
};

export default Interns;