import { AppShell, Burger, Stack, Container, Title, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

// コンポーネントのインポート
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Awards from './components/awards';
import Interns from './components/interns';
import Career from './components/career';
import Links from './components/links';

// CSSのインポート
import './styles.css';

function App() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
            styles={{
                main: {
                    backgroundColor: 'var(--pale-blue)',
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
                <Stack justify="space-between" h="100%">
                    <Header />
                    <Links />
                </Stack>
            </AppShell.Navbar>

            <AppShell.Main>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />

                <Container size="md" py="lg" className="main-content-styles">
                    <Stack gap="xl">
                        <Stack component="section" id="About">
                            <About />
                        </Stack>

                        <Stack component="section" id="career">
                            <Career />
                        </Stack>

                        <Stack component="section" id="skills">
                            <Skills />
                        </Stack>

                        <Stack component="section" id="projects">
                            <Title order={2}>プロジェクト</Title>
                            <Divider />
                            <Projects />
                        </Stack>

                        <Stack component="section" id="awards">
                            <Awards />
                        </Stack>

                        <Stack component="section" id="interns">
                            <Title order={2}>インターンシップ</Title>
                            <Divider />
                            <Interns />
                        </Stack>

                    </Stack>
                </Container>
            </AppShell.Main>
        </AppShell>
    );
}

export default App;