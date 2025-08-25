import { Stack, Text, Title, Divider, AspectRatio } from '@mantine/core';

const GeekCamp = () => {
    return (
        <Stack align="flex-start" gap="md">
            <Text>
                2025/07/26,27に開催。ユーザーごとのトレーニング、ダイエットをサポートする「MyFitCoach」という名前のwebアプリケーションを作成
            </Text>

            <Divider w="100%" />

            <Stack align="flex-start" gap="sm">
                <Title order={3} size="h5">
                開発チーム
                </Title>
                <Text>チーム名:「チームいわし2.0」</Text>
            </Stack>

            <AspectRatio ratio={16 / 9} w="100%">
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSUSCuSpi9J3i8mAJAhVi3zYuWzawlmkby_GjCAe3KgoWSvRfLEpByGubbTBGTauA/pubembed?start=true&loop=false&delayms=3000" frameBorder="0" width="1280" height="749" allowFullScreen={true}></iframe>
            </AspectRatio>
        </Stack>
    );
};

export default GeekCamp;