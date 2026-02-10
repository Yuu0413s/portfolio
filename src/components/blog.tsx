import { Stack, Title, Text, Card, Group, Anchor, Button, Loader, Center } from '@mantine/core';
import { IconExternalLink, IconClock, IconNotebook } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

interface BlogPost {
    title: string;
    description: string;
    pubDate: string;
    link: string;
    thumbnail?: string;
}

const BlogSection = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNotePosts = async () => {
            try {
                // RSS to JSON APIを使用してnoteのRSSフィードを取得
                const response = await fetch(
                    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://note.com/yuu_0413/rss')}`
                );

                if (!response.ok) {
                    throw new Error('記事の取得に失敗しました');
                }

                const data = await response.json();

                if (data.status === 'ok') {
                    // 最新5件の記事を取得
                    const latestPosts = data.items.slice(0, 5).map((item: any) => ({
                        title: item.title,
                        description: item.description?.replace(/<[^>]*>/g, '').slice(0, 150) + '...' || '',
                        pubDate: new Date(item.pubDate).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }),
                        link: item.link,
                        thumbnail: item.thumbnail || item.enclosure?.link,
                    }));
                    setPosts(latestPosts);
                } else {
                    throw new Error('記事の取得に失敗しました');
                }
            } catch (err) {
                console.error('Error fetching note posts:', err);
                setError('記事の読み込みに失敗しました');
            } finally {
                setLoading(false);
            }
        };

        fetchNotePosts();
    }, []);

    return (
        <Stack component="section" id="blog" align="center" gap="lg">
            <Title order={2}>ブログ</Title>

            <Text c="dimmed" ta="center" maw={600}>
                技術的な学びや、ハッカソン・インターンでの経験をnoteで発信しています
            </Text>

            {loading ? (
                <Center p="xl">
                    <Loader size="lg" />
                </Center>
            ) : error ? (
                <Center p="xl">
                    <Text c="red">{error}</Text>
                </Center>
            ) : (
                <Stack gap="lg" w="100%" maw={700}>
                    {posts.map((post, index) => (
                        <Card
                            key={index}
                            shadow="md"
                            padding="lg"
                            radius="lg"
                            withBorder
                            className="custom-card"
                        >
                            <Stack gap="md">
                                <Stack gap="xs">
                                    <Title order={3} size="h4">{post.title}</Title>
                                    <Group gap="xs">
                                        <IconClock size={16} />
                                        <Text size="sm" c="dimmed">{post.pubDate}</Text>
                                    </Group>
                                </Stack>

                                <Text size="sm" lineClamp={3}>
                                    {post.description}
                                </Text>

                                <Anchor
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ alignSelf: 'flex-start' }}
                                >
                                    <Group gap="xs">
                                        <Text size="sm" fw={500}>記事を読む</Text>
                                        <IconExternalLink size={16} />
                                    </Group>
                                </Anchor>
                            </Stack>
                        </Card>
                    ))}
                </Stack>
            )}

            <Button
                component="a"
                href="https://note.com/yuu_0413"
                target="_blank"
                rel="noopener noreferrer"
                variant="gradient"
                gradient={{ from: 'violet', to: 'grape' }}
                size="lg"
                leftSection={<IconNotebook size={20} />}
                rightSection={<IconExternalLink size={20} />}
                mt="md"
            >
                noteで全ての記事を見る
            </Button>
        </Stack>
    );
};

export default BlogSection;
