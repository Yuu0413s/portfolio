import { AppShell, Burger, Stack, Container, Title, Divider, CloseButton, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

// コンポーネントのインポート
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Awards from './components/awards';
import Interns from './components/interns';
import Career from './components/career';
import Blog from './components/blog';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';

// CSSのインポート
import './styles.css';

function App() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { desktop: !opened, mobile: !opened },
            }}
            padding="md"
            styles={{
                main: {
                    background: 'var(--gradient-bg)',
                },
            }}
        >
            <AppShell.Navbar
                p="md"
                className="sidebar-styles"
                style={{
                    backgroundColor: 'var(--sidebar-bg)',
                    borderRight: 'none',
                }}
            >
                <Stack gap="md">
                    {opened && (
                        <Group justify="flex-end">
                            <CloseButton
                                onClick={toggle}
                                size="lg"
                                style={{
                                    color: 'var(--white)',
                                }}
                                aria-label="メニューを閉じる"
                            />
                        </Group>
                    )}
                    <Header />
                </Stack>
            </AppShell.Navbar>

            <AppShell.Main>
                <Group
                    justify="space-between"
                    align="center"
                    p="md"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 100,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        borderBottom: '1px solid var(--light-gray)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    <Group gap="md">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            size="md"
                        />
                        <Title order={4} c="var(--primary-color)" style={{ fontWeight: 700 }}>
                            Yuta Shibata
                        </Title>
                    </Group>
                </Group>

                <div style={{ paddingTop: '4rem' }}></div>

                <Container size="md" py="lg" className="main-content-styles">
                    <Stack gap="xl">
                        <FadeInSection delay={0.1}>
                            <Stack component="section" id="About">
                                <About />
                            </Stack>
                        </FadeInSection>

                        <FadeInSection delay={0.2}>
                            <Stack component="section" id="career">
                                <Career />
                            </Stack>
                        </FadeInSection>

                        <FadeInSection delay={0.1}>
                            <Stack component="section" id="skills">
                                <Skills />
                            </Stack>
                        </FadeInSection>

                        <FadeInSection delay={0.1}>
                            <Stack component="section" id="projects">
                                <Title order={2}>プロジェクト</Title>
                                <Divider />
                                <Projects />
                            </Stack>
                        </FadeInSection>

                        <FadeInSection delay={0.1}>
                            <Stack component="section" id="awards">
                                <Awards />
                            </Stack>
                        </FadeInSection>

                        <FadeInSection delay={0.1}>
                            <Stack component="section" id="interns">
                                <Title order={2}>インターンシップ</Title>
                                <Divider />
                                <Interns />
                            </Stack>
                        </FadeInSection>

                        <FadeInSection delay={0.1}>
                            <Stack component="section" id="blog">
                                <Blog />
                            </Stack>
                        </FadeInSection>

                    </Stack>
                </Container>

                <Footer />
            </AppShell.Main>
        </AppShell>
    );
}

export default App;