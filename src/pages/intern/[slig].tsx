import { useRouter } from "next/router"
import { INTERNSHIP_LIST } from "../../contents/intern"
import { Box, Heading, VStack, Text, Divider } from "@yamada-ui/react"

const InternshipDetailPage = () => {
    const router = useRouter()
    const { slug } = router.query

    const internship = INTERNSHIP_LIST.find((item) => item.slug === slug)

    if (!internship) {
        return <Text>ページが見つかりません。</Text>
    }

    const DetailComponent = internship.component

    return (
        <Box p="lg">
        <VStack maxW="4xl" mx="auto" gap="lg" alignItems="flex-start">
            <Text color="muted">{internship.period}</Text>
            <Heading as="h1" size="2xl">
            {internship.companyName}
            </Heading>
            <Heading as="h2" size="lg" color="muted">
            {internship.internshipTitle}
            </Heading>
            <Divider />
            <DetailComponent />
        </VStack>
        </Box>
    )
}

export default InternshipDetailPage