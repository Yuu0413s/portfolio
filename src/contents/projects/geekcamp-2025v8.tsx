import { VStack, Text, Heading, Divider } from "@yamada-ui/react"

const MudsHackathon = () => {

    return (
        <VStack alignItems="flex-start" gap="md">
            <Text>2025/07/26,27に開催。ユーザーごとのトレーニング、ダイエットをサポートする「MyFitCoach」という名前のwebアプリケーションを作成</Text>

            <Divider />

            <VStack alignItems="flex-start" gap="sm">
                <Heading as="h3" size="md">
                    開発チーム
                </Heading>
                <Text>チーム名:「チームいわし2.0」</Text>

            </VStack>

            <VStack>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vSUSCuSpi9J3i8mAJAhVi3zYuWzawlmkby_GjCAe3KgoWSvRfLEpByGubbTBGTauA/pub?start=true&loop=false&delayms=3000"
                    frameBorder="0"
                    allowFullScreen={true}
                />
            </VStack>
        </VStack>
    )
}

export default MudsHackathon