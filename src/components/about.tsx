import { Stack, Group, Title, Text, Image } from '@mantine/core';
import icon from "../assets/icon.jpeg";

const AboutSection = () => {
    return (
        <Stack component="section" id="About" align="center" gap="lg">
        <Title order={3}>
            少しでも多くの人が幸せに、また快適に過ごせる世界を
        </Title>

        <Group component="ul" gap="lg" align="flex-start">
        <Image
            src={icon}
            alt="Portfolio Icon"
            w={100}
            h={100}
            radius="100%"
            />

            <Stack component="blockquote" gap="md" align="flex-start">
                <Title>About Me</Title>
                <Text fw="bold">名前: 柴田 優太(シバタ ユウタ)</Text>
                <Text fw="bold">年齢: 20</Text>
                <Text fw="bold">所属: 武蔵野大学データサイエンス学部データサイエンス学科(28卒)</Text>

                <Text>
                    大学にてデータ分析やエンジニアリングの勉強をしながら、自分や世界の将来について考えています。
                </Text>
                <Text>
                    ユーザーのQOLを向上させることのできるシステムを開発することが目標です。
                </Text>
            </Stack>
        </Group>
    </Stack>
    );
};

export default AboutSection;