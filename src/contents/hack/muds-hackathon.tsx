import { VStack, Text, List, ListItem, Heading, Divider } from "@yamada-ui/react"

const MudsHackathon = () => {
    const teamMembers = ["小柳津 海来(バックエンド、全体フォロー)","坂野 心咲(フロントエンド)", "柴田 優太(フロントエンド)", "鶴谷 奏(デザイナー)"]

    return (
        <VStack alignItems="flex-start" gap="md">
        <Text>2025/07/05に開催。精算・割り勘時のトラブルを解決するため、「お財布平和条約」という名前のwebアプリケーションを作成</Text>
        <Text>審査員賞を受賞</Text>

        <Divider />

        {/* チーム情報を追記 */}
        <VStack alignItems="flex-start" gap="sm">
            <Heading as="h3" size="md">
            開発チーム
            </Heading>
            <Text>チーム名:「チーム林Lab」</Text>

            <VStack alignItems="flex-start" gap="0">
                <Text fontWeight="bold">メンバー:</Text>
                <List>
                {teamMembers.map((member) => (
                    <ListItem key={member}>・{member}</ListItem>
                ))}
                </List>
            </VStack>
        </VStack>
        </VStack>
    )
}

export default MudsHackathon