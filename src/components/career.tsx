import { VStack, Heading, Text } from "@yamada-ui/react";

const CareerSection = () => {
    return(
        <VStack as="section" id="career" alignItems="center" gap="lg">
            <Heading as="h2" size="xl">
                学歴
            </Heading>
            <VStack as="ul" listStyleType="none" gap="md" alignItems="flex-start">
                <Text>2021/04~2024/03 都立翔陽高校</Text>
                <Text>2024/04~ 武蔵野大学データサイエンス学部データサイエンス学科</Text>
            </VStack>
        </VStack>
    )
}

export default CareerSection;