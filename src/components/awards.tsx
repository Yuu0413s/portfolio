import { VStack, HStack, Heading, Text, Center } from "@yamada-ui/react";

type AwardSection = {
    awardName: string;
    eventName: string;
    date: string;
    description: string;
};

const awardsData: AwardSection[] = [
    {
        awardName: "審査員賞",
        eventName: "MUDS 第1回学内ハッカソン",
        date: "2025年7月5日",
        description: "開発したプロダクト「お財布平和条約」の企画と実装が評価されました。",
    },
];

const AwardSection = () => {
    if (awardsData.length === 0) {
        return (
        <VStack as="section" id="awards" w="full" alignItems="center" gap="lg">
            <Heading as="h2" size="xl">
                受賞経歴
            </Heading>
            <Center p="lg">
            <Text color="muted">まだ受賞歴はありません。</Text>
            </Center>
        </VStack>
        );
    }

    return (
    <VStack as="section" id="awards" w="full" alignItems="center" gap="lg">
        <Heading as="h2" size="xl">
            受賞経歴
        </Heading>

        <VStack as="ul" listStyleType="none" gap="lg" w="full" maxW="lg">
            {awardsData.map((award, index) => (
            <VStack
                as="li"
                key={index}
                alignItems="flex-start"
                gap="sm"
                p="md"
                borderWidth="1px"
                rounded="md"
                w="full"
                >
                <HStack w="full" justifyContent="space-between">
                <Heading as="h3" size="md">
                    {award.awardName}
                </Heading>
                <Text color="muted" fontSize="sm">{award.date}</Text>
                </HStack>
                <HStack>
                <Text fontWeight="bold">{award.eventName}</Text>
                </HStack>

                <Text pt="sm" color="muted">{award.description}</Text>
            </VStack>
            ))}
        </VStack>
        </VStack>
    );
};

export default AwardSection;