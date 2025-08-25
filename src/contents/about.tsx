import { VStack, HStack, Heading, Text, Image } from "@yamada-ui/react"
import icon from "./assets/icon.jpg"

const AboutSection = () => {
    return(
        <VStack as="section" id="About" alignItems="center" gap="lg">
            <Heading as="h2" size="xl">
                自己紹介
            </Heading>
            <HStack as="ul" listStyleType="none" gap="ng" alignItems="flex-start">
                <Image src={icon}
                alt="Portfolio Icon"
                boxSize="100px"
                borderRadius="full"
                />
                <VStack as="blockquote" gap="md" alignItems="flex-start">
                    <Text fontWeight="bold">
                        大学にてデータサイエンスの勉強をしながら、時系列データを用いたシステムの作成や研究を行っています。
                        <br />
                        ユーザーのQOLを向上させることのできるシステムを開発することが目標です。
                        </Text>
                    <Text>名前: 柴田 優太(シバタ ユウタ)</Text>
                    <Text>年齢: 20</Text>
                    <Text>所属: 武蔵野大学データサイエンス学部データサイエンス学科(28卒)</Text>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default AboutSection