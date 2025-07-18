import { VStack, HStack, Heading, Text, Icon } from "@Yamada-UI/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {faStar as  faStarRegular} from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }): {rating: number} => {
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
        description: "基本的なコーディングができる。Streamlitを用いたwebアプリケーションの開発が得意。",
    },
    {
        name: "SQL",
        rating: 2,
        description: "基本SQliteを使用(PostgreSQLも使用可能)。基本的なデータベースの操作ができる。",
    },
    {
        name: "HTML/CSS",
        rating: 3,
        description: "簡単なwebページをHTMLにて作成可能。CSSは使用可能だがまだ勉強中。",
    },
    {
        name: "React",
        rating: 2,
        description: "Webアプリケーションを作成しながら勉強中。",
    },
    {
        name: "JavaScript/TypeScript",
        rating: 2,
        description: "Reactに付随して学習中。",
    },
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