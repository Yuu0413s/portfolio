import { VStack, Heading, Card, CardBody, Text, Link, Center } from "@yamada-ui/react"
import NextLink from "next/link"
import { INTERNSHIP_LIST } from "./intern"

const InternshipSection = () => {
    return (
        <VStack as="section" id="interns" alignItems="center" gap="lg">
        <Heading as="h2" size="xl">
            インターンシップ経歴
        </Heading>

        <VStack gap="md" w="full" maxW="2xl">
            {INTERNSHIP_LIST.length > 0 ? (
            INTERNSHIP_LIST.map(
                ({ slug, companyName, internshipTitle, period }) => (
                <Link as={NextLink} href={`/intern/${slug}`} key={slug} w="full">
                    <Card variant="outline" w="full" isHoverable>
                    <CardBody>
                        <VStack alignItems="flex-start">
                        <Heading size="md">{companyName}</Heading>
                        <Text fontWeight="bold">{internshipTitle}</Text>
                        <Text color="muted">{period}</Text>
                        </VStack>
                    </CardBody>
                    </Card>
                </Link>
                ),
            )
            ) : (
            <Center p="lg" borderWidth="2px" borderStyle="dashed" rounded="md" w="full">
                <Text color="muted">現在、掲載できるインターンシップ経歴はありません。</Text>
            </Center>
            )}
        </VStack>
        </VStack>
    )
}

export default InternshipSection