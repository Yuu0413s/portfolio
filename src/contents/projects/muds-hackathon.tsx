import { VStack, Text, Heading, Divider } from "@yamada-ui/react"

const MudsHackathon = () => {

    return (
        <VStack alignItems="flex-start" gap="md">
            <Text>2025/07/05に開催。精算・割り勘時のトラブルを解決するため、「お財布平和条約」という名前のwebアプリケーションを作成</Text>

            <Divider />

            <VStack alignItems="flex-start" gap="sm">
                <Heading as="h3" size="md">
                    開発チーム
                </Heading>
                <Text>チーム名:「チーム林Lab」</Text>

            </VStack>

            <VStack>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vSxpn-VlB6r6i8TZ5tAEOjTESY6BHdtbxiK9zxr1_KxwXWpK_L8wFI67VVPiNRew56bHWIhm22rxIuI/pub?start=true&loop=false&delayms=3000"
                    frameBorder="0"
                    allowFullScreen={true}
                />
            </VStack>
        </VStack>
    )
}

export default MudsHackathon;