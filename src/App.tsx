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
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    return (
        <AppShell
            header={{ height: 56 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
            styles={{
                main: {
                    background: 'var(--color-bg-page)',
                },
            }}
        >
            <AppShell.Header
                style={{
                    background: 'var(--color-bg-surface)',
                    borderBottom: '1px solid var(--color-border)',
                }}
            >
                <Group justify="space-between" align="center" h="100%" px="md">
                    <Group gap="md">
                        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" aria-label="メニューを開閉" />
                        <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" aria-label="メニューを開閉" />
                        <Title order={4} c="var(--color-text-primary)" style={{ fontWeight: 500 }}>
                            Yuta Shibata
                        </Title>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar
                p="md"
                className="sidebar-styles"
                style={{
                    backgroundColor: 'var(--sidebar-bg)',
                    borderRight: 'none',
                }}
            >
                <Stack gap="md">
                    <Group justify="flex-end" hiddenFrom="sm">
                        <CloseButton
                            onClick={toggleMobile}
                            size="lg"
                            style={{
                                color: 'var(--white)',
                            }}
                            aria-label="メニューを閉じる"
                        />
                    </Group>
                    <Header />
                </Stack>
            </AppShell.Navbar>

            <AppShell.Main>
                <Container size="md" py="lg" className="main-content-styles">
                    <Stack gap="xl">
                        <FadeInSection delay={0.1}>
                            <Stack component="section" id="about">
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