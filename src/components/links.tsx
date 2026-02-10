import { Stack, Title, Anchor, ThemeIcon, Group, Text, Divider } from '@mantine/core';
import { IconMail, IconBrandGithub, IconNotebook, IconBook, IconBrandX } from '@tabler/icons-react';

const linksData = [
    {
        type: 'email',
        label: 'GMail',
        value: 'y.shibata0820@gmail.com',
        icon: <IconMail size={20} />,
        color: '#EA4335',
    },
    {
        type: 'link',
        label: 'GitHub',
        url: 'https://github.com/Yuu0413s',
        icon: <IconBrandGithub size={20} />,
        color: '#ffffff',
    },
    {
        type: 'link',
        label: 'X (Twitter)',
        url: 'https://x.com/Yuu_s0413',
        icon: <IconBrandX size={20} />,
        color: '#1DA1F2',
    },
    {
        type: 'link',
        label: 'note',
        url: 'https://note.com/yuu_0413',
        icon: <IconNotebook size={20} />,
        color: '#41C9B4',
    },
    {
        type: 'link',
        label: 'Qiita',
        url: 'https://qiita.com/yuu_0413',
        icon: <IconBook size={20} />,
        color: '#55C500',
    },
];

const Links = () => {
    return (
        <Stack component="section" id="links" gap="md">
            <Divider label={<Title order={3} size="h5">Connect</Title>} labelPosition="center" />

            <Stack gap="xs">
                {linksData.map((link) => (
                    <Group
                        key={link.label}
                        gap="sm"
                        style={{
                            padding: '0.5rem',
                            borderRadius: '8px',
                            transition: 'background-color 0.2s ease',
                            cursor: link.type === 'link' ? 'pointer' : 'default',
                        }}
                        className="link-item"
                    >
                        <ThemeIcon
                            size={36}
                            radius="md"
                            variant="light"
                            color={link.color}
                            style={{
                                backgroundColor: `${link.color}15`,
                            }}
                        >
                            {link.icon}
                        </ThemeIcon>

                        {link.type === 'email' ? (
                            <Stack gap={0} style={{ flex: 1 }}>
                                <Text size="xs" c="dimmed">{link.label}</Text>
                                <Text size="sm" style={{ wordBreak: 'break-all' }}>
                                    {link.value}
                                </Text>
                            </Stack>
                        ) : (
                            <Anchor
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ flex: 1, textDecoration: 'none' }}
                            >
                                <Text size="sm" fw={500}>
                                    {link.label}
                                </Text>
                            </Anchor>
                        )}
                    </Group>
                ))}
            </Stack>
        </Stack>
    );
};

export default Links;