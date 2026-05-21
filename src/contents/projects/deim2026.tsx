import { Stack, Text, Anchor } from '@mantine/core';

const Deim2026 = () => {
    return (
        <Stack align="flex-start" gap="md">
            <Text>
                大学の研究活動として、データ工学に関する論文を執筆・投稿し、第18回データ工学と情報マネジメントに関するフォーラム（DEIM2026）にて発表。
                先行研究の調査から実験設計・執筆まで、筆頭著者（共著3名）として初めての研究に取り組んだ。
            </Text>
            <Anchor
                href="https://pub.confit.atlas.jp/ja/event/deim2026/presentation/3F-05"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
            >
                発表ページを見る
            </Anchor>
        </Stack>
    );
};

export default Deim2026;
