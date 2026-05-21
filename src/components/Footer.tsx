import { Stack, Group, Text, ActionIcon, Anchor, Divider, Title, ThemeIcon } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import { linksData } from '../data/links';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <Stack
            component="footer"
            gap="lg"
            p="xl"
            style={{
                background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
                color: 'var(--white)',
                marginTop: '4rem',
            }}
        >
            <Stack align="center" gap="md">
                <Stack gap="md" w="100%" maw={360}>
                    <Divider
                        label={<Title order={3} size="h5" c="var(--color-text-on-dark)">Connect</Title>}
                        labelPosition="center"
                        color="rgba(255, 255, 255, 0.2)"
                    />

                    <Stack gap="xs">
                        {linksData.map((link) => {
                            const LinkIcon = link.icon;
                            return (
                                <Group
                                    key={link.label}
                                    gap="sm"
                                    style={{
                                        padding: '0.5rem',
                                        borderRadius: '8px',
                                        backgroundColor: 'var(--color-bg-surface)',
                                        border: '1px solid var(--color-border)',
                                        transition: 'background-color 0.2s ease',
                                    }}
                                >
                                    <ThemeIcon
                                        size={36}
                                        radius="md"
                                        variant="light"
                                        color={link.color}
                                    >
                                        <LinkIcon size={20} />
                                    </ThemeIcon>

                                    {link.type === 'email' ? (
                                        <Stack gap={0} style={{ flex: 1 }}>
                                            <Text size="xs" c="dimmed">{link.label}</Text>
                                            <Text size="sm" c="var(--color-text-primary)" style={{ wordBreak: 'break-all' }}>
                                                {link.value}
                                            </Text>
                                        </Stack>
                                    ) : (
                                        <Anchor
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.ariaLabel}
                                            style={{
                                                flex: 1,
                                                color: 'var(--color-text-primary)',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <Text size="sm" fw={500}>
                                                {link.label}
                                            </Text>
                                        </Anchor>
                                    )}
                                </Group>
                            );
                        })}
                    </Stack>
                </Stack>

                <Text size="sm" c="dimmed" ta="center">
                    © {currentYear} 柴田 優太. All rights reserved.
                </Text>

                <Text size="xs" c="dimmed" ta="center">
                    Built with React, TypeScript, and Mantine UI
                </Text>

                <ActionIcon
                    size="xl"
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan' }}
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        zIndex: 1000,
                    }}
                    aria-label="トップへ戻る"
                >
                    <IconArrowUp size={24} />
                </ActionIcon>
            </Stack>
        </Stack>
    );
};

export default Footer;
