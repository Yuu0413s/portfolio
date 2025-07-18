import { VStack, Text, Link } from "@yamada-ui/react"

const SmbcChallenge = () => {
    return (
        <VStack alignItems="flex-start" gap="md">
        <Text>
            2025/06/02~06/30に開催。「電力の価格予測にチャレンジしよう！」をテーマに機械学習を用いて電力価格予測を行い、その精度を競うコンペティション。
            最終順位:933/1071位
        </Text>
        <Link href="https://user.competition.signate.jp/ja/competition/detail/?competition=b1e6e5ab9a834cde924f7f46bae5b5e1" isExternal>
            イベントページへのリンク →
        </Link>
        </VStack>
    )
}

export default SmbcChallenge