import { Stack, Container, Title, Divider } from '@mantine/core';

import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Awards from './components/awards';
import Interns from './components/interns';
import Career from './components/career';
import Links from './components/links';

function App() {
    return (
        <Container size="lg" py="lg">
            <Header />

            <Stack component="main" gap="xl" mt="xl">
                <Stack component="section" id="About" w="100%">
                <About />
                </Stack>

                <Stack component="section" id="career" w="100%">
                <Career />
                </Stack>

                <Stack component="section" id="skills" w="100%">
                <Skills />
                </Stack>

                <Stack component="section" align="flex-start" gap="lg">
                <Title order={2}>
                    プロジェクト・受賞経歴
                </Title>
                <Divider w="100%" />
                <Stack id="projects" w="100%"><Projects /></Stack>
                <Stack id="awards" w="100%"><Awards /></Stack>
                <Stack id="interns" w="100%"><Interns /></Stack>
                </Stack>

                <Stack component="section" id="links" w="100%">
                <Links />
                </Stack>
            </Stack>
        </Container>
    );
}

export default App;