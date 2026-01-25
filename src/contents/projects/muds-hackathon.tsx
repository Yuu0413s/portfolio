import { Stack, Text, Title, Divider, AspectRatio } from '@mantine/core';

const MudsHackathon = () => {
    return (
        <Stack align="flex-start" gap="md">
            <Text>
                精算・割り勘時のトラブルを解決するため、「お財布平和条約」という名前のwebアプリケーションを作成
            </Text>

            <Divider w="100%" />

            <Stack align="flex-start" gap="sm">
                <Title order={3} size="h5">
                    開発チーム
                </Title>
                <Text>チーム名:「チーム林Lab」</Text>
            </Stack>

            <AspectRatio ratio={16 / 9} w="100%">
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSxpn-VlB6r6i8TZ5tAEOjTESY6BHdtbxiK9zxr1_KxwXWpK_L8wFI67VVPiNRew56bHWIhm22rxIuI/pubembed?start=true&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true}></iframe>
            </AspectRatio>
        </Stack>
    );
};

export default MudsHackathon;