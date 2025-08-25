import { VStack, HStack, Heading, Text, Icon } from "@yamada-ui/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {faStar as  faStarRegular} from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }: {rating: number}) => {
    const maxStars = 5
        return (
            <HStack gap="xs">
                {Array.from({ length: maxStars }).map((_, index) => (
                    <Icon
                        key={index}
                        icon={index < rating ? faStar : faStarRegular}
                        color={index < rating ? "yellow.400" : "gray.300"}
                        fontSize="lg"
                    />
                ))}
            </HStack>
    )
}

const skills = [
    {
        name: "Python",
        rating: 3,
        description: "データ分析・web開発。pandas, numpy, streamlitを使用",
    },
    {
        name: "SQL",
        rating: 2,
        description: "データベース設計・データ抽出。postgreSQL, SQLiteを使用",
    },
    {
        name: "HTML/CSS",
        rating: 4,
        description: "webサイト作成",
    },
    {
        name: "JavaScript/TypeScript",
        rating: 4,
        description: "フロントエンド開発。Vanilla JS/TSからReactまで経験",
    },
    {
        name: "Convex",
        rating: 2,
        description: "バックエンド開発。Clerkを併用したReact Nativeアプリの開発経験あり",
    }
]

const SkillsSection = () => {
    return (
    <VStack as="section" id="skills" alignItems="center" gap="lg">
        <Heading as="h2" size="xl">
            スキル
        </Heading>

        <VStack as="ul" listStyleType="none" gap="lg" w="full" maxW="lg">
        {skills.map((skill) => (
            <VStack
                as="li"
                key={skill.name}
                alignItems="flex-start"
                gap="sm"
                p="md"
                borderWidth="1px"
                rounded="md"
                w="full"
            >
            <Heading as="h3" size="md">
                {skill.name}
            </Heading>
            <StarRating rating={skill.rating} />
            <Text color="muted">{skill.description}</Text>
            </VStack>
        ))}
        </VStack>
    </VStack>
    )
}

export default SkillsSection