import { useRouter } from "next/router"
import { HACKATHON_LIST } from "../../contents/hack"
import { Box, Heading, VStack, Text, Divider } from "@yamada-ui/react"

const HackathonDetailPage = () => {
    const router = useRouter()
    const { slug } = router.query

    // URLのslugに一致するハッカソン情報を検索
    const hackathon = HACKATHON_LIST.find((item) => item.slug === slug)

    if (!hackathon) {
        return <Text>ページが見つかりません。</Text>
    }

    // 見つかった情報のcomponentを動的に表示
    const DetailComponent = hackathon.component

    return (
        <Box p="lg">
        <VStack maxW="4xl" mx="auto" gap="lg" alignItems="flex-start">
            <Text color="muted">{hackathon.date}</Text>
            <Heading as="h1" size="2xl">
            {hackathon.title}
            </Heading>
            <Divider />
            <DetailComponent />
        </VStack>
        </Box>
    )
}

export default HackathonDetailPage