import Header from './components/header'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Awards from './components/awards'
import Interns from './components/interns'
import Career from './components/career'
import Links from './components/links'

import { VStack, Container, Heading, Divider } from '@yamada-ui/react'

function App() {
    return (
    <Container maxW="container.lg" py="lg">
        <Header />
            <VStack as="main" gap="5xl" mt="xl">
                <VStack as="section" id="About" w="full">
                    <About />
                </VStack>

                <VStack id="career" w="full"><Career /></VStack>

                <VStack as="section" id="skills" w="full">
                    <Skills />
                </VStack>

                <VStack as="section" w="full" alignItems="flex-start" gap="2xl">
                    <Heading as="h2" size="xl">
                        プロジェクト・受賞経歴
                    </Heading>
                    <Divider />
                    <VStack id="projects" w="full"><Projects /></VStack>
                    <VStack id="awards" w="full"><Awards /></VStack>
                    <VStack id="interns" w="full"><Interns /></VStack>
                </VStack>

                <VStack as="section" id="links" w="full">
                    <Links />
                </VStack>
            </VStack>
    </Container>
    )
}

export default App