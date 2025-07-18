import { VStack, Heading, Card, CardBody, Text, Link } from "@yamada-ui/react"
import NextLink from "next/link"
import { HACKATHON_LIST } from "./hack"

const HackathonSection = () => {
    return (
        <VStack as="section" id="hack" alignItems="center" gap="lg">
        <Heading as="h2" size="xl">
            ハッカソン・コンペティション参加経歴
        </Heading>

        <VStack gap="md" w="full" maxW="2xl">
            {HACKATHON_LIST.map(({ slug, title, date, description }) => (
            <Link as={NextLink} href={`/hack/${slug}`} key={slug} w="full">
                <Card variant="outline" w="full" isHoverable>
                <CardBody>
                    <VStack alignItems="flex-start">
                    <Heading size="md">{title}</Heading>
                    <Text color="muted">{date}</Text>
                    <Text fontSize="sm">{description}</Text>
                    </VStack>
                </CardBody>
                </Card>
            </Link>
            ))}
        </VStack>
        </VStack>
    )
}

export default HackathonSection