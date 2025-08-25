import { Stack, Title, Text, Divider } from '@mantine/core';

import MudsHackathon from "../contents/projects/muds-hackathon";
import SmbcChallenge from "../contents/projects/smbc-challenge";
import GeekCamp from "../contents/projects/geekcamp-2025v8";
import OC2025 from "../contents/projects/oc-2025-08";

export const HACKATHON_LIST = [
    {
        slug: "smbc-gdc-2025",
        title: "SMBC Group GREEN×DATA Challenge 2025",
        date: "2025/06/02 ~ 06/30",
        description: "機械学習を用いて電力価格予測を行い、その精度を競うコンペティション。",
        component: SmbcChallenge,
    },
    {
        slug: "muds-hackathon-2025",
        title: "MUDS 学内ハッカソン",
        date: "2025/07/05",
        description: "学内で開催されたハッカソン。",
        component: MudsHackathon,
    },
    {
        slug: "geek-camp-2025-vol8",
        title: "技育CAMPハッカソン Vol.8",
        date: "2025/07/26, 27",
        description: "サポーターズ主催のハッカソン",
        component: GeekCamp,
    },
    {
        slug: "muds-oc-0205-08",
        title: "武蔵野大学オープンキャンパス",
        date: "2025/08/23",
        description: "オープンキャンパスにて開発したwebアプリについて発表",
        component: OC2025,
    }
];

const Projects = () => {
    return (
        <Stack component="section" w="100%" align="flex-start" gap="xl">
            {HACKATHON_LIST.map((hackathon, index) => {
                const ProjectComponent = hackathon.component;

                return (
                    <Stack
                        key={hackathon.slug}
                        align="flex-start"
                        gap="md"
                        w="100%"
                    >
                        <Title order={4} size="h4">{hackathon.title}</Title>
                        <Text c="dimmed">{hackathon.date}</Text>

                        <ProjectComponent />

                        {index < HACKATHON_LIST.length - 1 && <Divider mt="lg" />}
                    </Stack>
                );
            })}
        </Stack>
    );
};

export default Projects;