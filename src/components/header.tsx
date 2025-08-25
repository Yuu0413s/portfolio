import { VStack, Heading, Text, HStack, Link, List, ListItem } from "@yamada-ui/react"

const Header = () => {
    return (
        <VStack as="header" alignItems="center" gap="md">
        <Heading as="h1" size="2xl">
            Portfolio
        </Heading>

        <Text>ユーザーの希望に応えるエンジニア</Text>

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
                <Link href="#projects">プロジェクト</Link>
            </ListItem>
            <ListItem>
                <Link href="#awards">受賞経歴</Link>
            </ListItem>
            <ListItem>
                <Link href="#interns">インターンシップ・職歴</Link>
            </ListItem>
            <ListItem>
                <Link href="#links">リンク</Link>
            </ListItem>
            </List>
        </HStack>
        </VStack>
    )
    }

    export default Header;