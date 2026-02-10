import { Stack, Group, Text, ActionIcon, Anchor, Divider } from '@mantine/core';
import { IconBrandGithub, IconBrandX, IconMail, IconArrowUp } from '@tabler/icons-react';

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
                <Group gap="md">
                    <Anchor href="mailto:y.shibata0820@gmail.com">
                        <ActionIcon
                            size="lg"
                            radius="md"
                            variant="light"
                            color="red"
                            style={{ transition: 'transform 0.2s ease' }}
                            className="footer-icon"
                        >
                            <IconMail size={20} />
                        </ActionIcon>
                    </Anchor>

                    <Anchor href="https://github.com/Yuu0413s" target="_blank" rel="noopener noreferrer">
                        <ActionIcon
                            size="lg"
                            radius="md"
                            variant="light"
                            color="gray"
                            style={{ transition: 'transform 0.2s ease' }}
                            className="footer-icon"
                        >
                            <IconBrandGithub size={20} />
                        </ActionIcon>
                    </Anchor>

                    <Anchor href="https://x.com/Yuu_s0413" target="_blank" rel="noopener noreferrer">
                        <ActionIcon
                            size="lg"
                            radius="md"
                            variant="light"
                            color="blue"
                            style={{ transition: 'transform 0.2s ease' }}
                            className="footer-icon"
                        >
                            <IconBrandX size={20} />
                        </ActionIcon>
                    </Anchor>
                </Group>

                <Divider w="100%" maw={300} color="rgba(255, 255, 255, 0.2)" />

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
