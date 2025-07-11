import { VStack, Heading, Text, HStack, Link, List, ListItem } from "@yamada-ui/react"

const PortfolioHeader = () => {
    return (
        <VStack as="header" alignItems="center" gap="md">
        <Heading as="h1" size="2xl">
            Portfolio
        </Heading>

        <Text>Learning data science and programming in university...</Text>

        <HStack as="nav">
            <List display="flex" gap="md">
            <ListItem>
                <Link href="#About">自己紹介</Link>
            </ListItem>
            <ListItem>
                <Link href="#career">経歴</Link>
            </ListItem>
            <ListItem>
                <Link href="#skills">スキル</Link>
            </ListItem>
            <ListItem>
                <Link href="#hack">ハッカソン・コンペティション</Link>
            </ListItem>
            <ListItem>
                <Link href="#interns">インターンシップ</Link>
            </ListItem>
            <ListItem>
                <Link href="#links">リンク</Link>
            </ListItem>
            </List>
        </HStack>
        </VStack>
    )
    }

    export default PortfolioHeader