import { Stack, Group, Title, Text, Image } from '@mantine/core';
import icon from "../assets/icon.jpg";

const AboutSection = () => {
    return (
        <Stack component="section" id="About" align="center" gap="lg">
        <Title order={2}>
            自己紹介
        </Title>

        <Group component="ul" gap="lg" align="flex-start">
        <Image
            src={icon}
            alt="Portfolio Icon"
            w={100}
            h={100}
            radius="50%" // 円形にするには "50%" を指定
            />

            <Stack component="blockquote" gap="md" align="flex-start">
                <Text fw="bold">
                    大学にてデータサイエンスの勉強をしながら、時系列データを用いたシステムの作成や研究を行っています。
                </Text>
                <Text fw="bold">
                    ユーザーのQOLを向上させることのできるシステムを開発することが目標です。
                </Text>
                <Text>名前: 柴田 優太(シバタ ユウタ)</Text>
                <Text>年齢: 20</Text>
                <Text>所属: 武蔵野大学データサイエンス学部データサイエンス学科(28卒)</Text>
            </Stack>
        </Group>
    </Stack>
    );
};

export default AboutSection;