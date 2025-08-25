import { Stack, Text, Anchor } from '@mantine/core';

const SmbcChallenge = () => {
    return (
        <Stack align="flex-start" gap="md">
            <Text>
                2025/06/02~06/30に開催。「電力の価格予測にチャレンジしよう！」をテーマに機械学習を用いて電力価格予測を行い、その精度を競うコンペティション。
                最終順位:933/1071位
            </Text>

            <Anchor
                href="https://user.competition.signate.jp/ja/competition/detail/?competition=b1e6e5ab9a834cde924f7f46bae5b5e1"
                target="_blank"
            >
                イベントページへのリンク →
            </Anchor>
        </Stack>
    );
};

export default SmbcChallenge;