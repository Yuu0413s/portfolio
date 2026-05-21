import { Stack, Title, Text, Timeline, ThemeIcon } from '@mantine/core';
import { IconSchool, IconBriefcase } from '@tabler/icons-react';

const careerData = [
    {
        date: '2021/04 ~ 2024/03',
        title: '都立翔陽高校',
        type: 'education',
        active: false,
    },
    {
        date: '2024/04 ~ 現在',
        title: '武蔵野大学',
        description: 'データサイエンス学部データサイエンス学科',
        type: 'education',
        active: true,
    },
    {
        date: '2025/09 ~ 現在',
        title: 'LITALICOワンダー新宿教室',
        description: '講師（インターン）',
        type: 'work',
        active: true,
    },
    {
        date: '2025/12 ~ 2026/04',
        title: '株式会社A.I Consulting',
        description: 'フルスタックエンジニア（バックエンド中心・インターン）',
        type: 'work',
        active: false,
    },
];

const CareerSection = () => {
    return (
        <Stack component="section" align="center" gap="lg">
            <Title order={2}>
                学歴・職歴
            </Title>

            <Timeline active={careerData.length} bulletSize={32} lineWidth={2} color="blue">
                {careerData.map((item, index) => (
                    <Timeline.Item
                        key={index}
                        bullet={
                            <ThemeIcon
                                size={32}
                                variant="filled"
                                radius="xl"
                                color={item.type === 'education' ? 'blue' : 'teal'}
                            >
                                {item.type === 'education' ? (
                                    <IconSchool size={18} />
                                ) : (
                                    <IconBriefcase size={18} />
                                )}
                            </ThemeIcon>
                        }
                        title={
                            <Text fw={700} size="lg">
                                {item.title}
                            </Text>
                        }
                    >
                        <Text c="dimmed" size="sm" mt={4}>
                            {item.date}
                        </Text>
                        {item.description && (
                            <Text size="sm" mt="xs">
                                {item.description}
                            </Text>
                        )}
                    </Timeline.Item>
                ))}
            </Timeline>
        </Stack>
    );
};

export default CareerSection;