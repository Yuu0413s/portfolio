import { Stack, Text, Title, Divider, AspectRatio } from '@mantine/core';

const MudsHackathon_vol2 = () => {
    return (
        <Stack align="flex-start" gap="md">
            <Text>
                某要因で激減してしまった先輩後輩間のか変わりを増やし、大学コミュニティを活発にするためのSlack Botを制作
            </Text>

            <Divider w="100%" />

            <Stack align="flex-start" gap="sm">
                <Title order={3} size="h5">
                開発チーム
                </Title>
                <Text>チーム名:「✌️しば×いち✌️」</Text>
            </Stack>

            <AspectRatio ratio={16 / 9} w="100%">
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ3cDbC8zF-XOiULpZ1rlIDqTDR8NcBVDazmhMGUZonacCiONe_UAO27grvHYZ_td0DukOrUQ1dbli8/pubembed?start=false&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </AspectRatio>
        </Stack>
    );
};

export default MudsHackathon_vol2;