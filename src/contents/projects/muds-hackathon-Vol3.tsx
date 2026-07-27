import { Stack, Text, Title, Divider, AspectRatio } from '@mantine/core';

const MudsHackathon_vol3 = () => {
    return (
        <Stack align="flex-start" gap="md">
            <Text>
                友人同士で気軽に美味しかったご飯を写真付きで共有できるSNS「know-your-meals」を作成
            </Text>

            <Divider w="100%" />

            <Stack align="flex-start" gap="sm">
                <Title order={3} size="h5">
                    開発チーム
                </Title>
                <Text>チーム名:「チーム元林Lab」</Text>
            </Stack>

            <AspectRatio ratio={16 / 9} w="100%">
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR6ODPJpnjfCIxUgfLVERxa027Da8WN5A-1XHQmbSe5JTtKde-fAFe_GiKv6DjdMgeUS02Po-QsE4mK/pubembed?start=true&loop=true&delayms=3000" title="MUDS Hackathon Vol.3 発表スライド" style={{ border: 'none' }} width="1868" height="1080" allowFullScreen={true}></iframe>
            </AspectRatio>
        </Stack>
    );
};

export default MudsHackathon_vol3;