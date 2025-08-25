import { Stack, Title, List, Text, Anchor, ThemeIcon } from '@mantine/core';
import { IconMail, IconBrandGithub, IconNotebook, IconBook } from '@tabler/icons-react';

const linksData = [
    {
        type: 'email',
        label: 'GMail',
        value: 'y.shibata0820@gmail.com',
        icon: <IconMail size={20} />
    },
    {
        type: 'link',
        label: 'Github',
        url: 'https://github.com/Yuu0413',
        icon: <IconBrandGithub size={20} />
    },
    {
        type: 'link',
        label: 'note',
        url: 'https://note.com/yuu_0413',
        icon: <IconNotebook size={20} />
    },
    {
        type: 'link',
        label: 'Qiita',
        url: 'https://qiita.com/yuu_0413',
        icon: <IconBook size={20} />
    },
    ];

    const Links = () => {
    return (
        <Stack component="section" id="links" align="center" gap="lg">
        <Title order={2}>リンク</Title>
        <List spacing="md">
            {linksData.map((link) => (
            <List.Item
                key={link.label}
                icon={
                <ThemeIcon color="gray" size={32} radius="xl">
                    {link.icon}
                </ThemeIcon>
                }
            >
                {link.type === 'email' ? (
                <Text mt={5}>{link.label} : {link.value}</Text>
                ) : (
                <Anchor href={link.url} target="_blank" size="lg">
                    {link.label}
                </Anchor>
                )}
            </List.Item>
            ))}
        </List>
        </Stack>
    );
};

export default Links;