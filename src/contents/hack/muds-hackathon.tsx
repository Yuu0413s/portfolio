import { VStack, Text, HStack } from "@yamada-ui/react"

const MudsHackathon = () => {
    return (
        <VStack alignItems="flex-start" gap="md">
        <Text>2025/07/05に開催。精算・割り勘時のトラブルを解決するため、「お財布平和条約」という名前のwebアプリケーションを作成</Text>
        <Text>審査員賞を受賞</Text>

        <VStack
            alignItems="flex-start"
            gap="sm"
            p="md"
            borderWidth="1px"
            rounded="md"
            w="full"
        >
            <HStack>
            <Text fontWeight="bold">チーム名:</Text>
            <Text>「チーム林Lab」</Text>
            </HStack>
            <HStack>
            <Text fontWeight="bold">メンバー:</Text>
            <Text>小柳津海来、柴田優太、鶴谷奏、坂野実咲</Text>
            </HStack>
        </VStack>
        </VStack>
    )
}

export default MudsHackathon