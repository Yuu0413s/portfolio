import { Stack, Title, List, Text } from '@mantine/core';

const CareerSection = () => {
    return (
        <Stack component="section" id="career" align="center" gap="lg">
            <Title order={2}>
                学歴・職歴
            </Title>

            <List listStyleType="none" spacing="md">
                <List.Item>
                    <Text>2021/04~2024/03 都立翔陽高校</Text>
                </List.Item>
                <List.Item>
                    <Text>2024/04~ 武蔵野大学データサイエンス学部データサイエンス学科</Text>
                </List.Item>
                <List.Item>
                    <Text>2025/09~ LITALICOワンダー新宿教室 講師(インターン)</Text>
                </List.Item>
                <List.Item>
                    <Text>2025/12~ 株式会社A.I Consulting フルスタックエンジニア(インターン)</Text>
                </List.Item>
            </List>
        </Stack>
    );
};

export default CareerSection;