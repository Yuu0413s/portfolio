import { VStack, Heading, Text, Divider } from "@yamada-ui/react";

import MudsHackathon from "../contents/projects/muds-hackathon";
import SmbcChallenge from "../contents/projects/smbc-challenge";
import GeekCamp from "../contents/projects/geekcamp-2025v8";

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
    }
];

const Projects = () => {
    return (
    <VStack as="section" w="full" alignItems="flex-start" gap="xl">
        {HACKATHON_LIST.map((hackathon, index) => {
            const ProjectComponent = hackathon.component;

            return (
                <VStack
                    key={hackathon.slug}
                    alignItems="flex-start"
                    gap="md"
                    w="full"
                >
                    <Heading as="h4" size="md">{hackathon.title}</Heading>
                    <Text color="muted">{hackathon.date}</Text>

                    <ProjectComponent />

                    {index < HACKATHON_LIST.length - 1 && <Divider mt="lg" />}
                </VStack>
            );
        })}
    </VStack>
    );
};

export default Projects;