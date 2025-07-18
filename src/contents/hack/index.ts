import MudsHackathon from "./muds-hackathon"
import SmbcChallenge from "./smbc-challenge"

// 各ハッカソンの情報を定義
export const HACKATHON_LIST = [
    {
    slug: "smbc-gdc-2025",
    title: "SMBC Group GREEN×DATA Challenge 2025",
    date: "2025/06/02 ~ 06/30",
    description: "機械学習を用いて電力価格予測を行い、その精度を競うコンペティション。",
    component: SmbcChallenge,
    },
    {
    slug: "muds-hackathon-2025",
    title: "MUDS 学内ハッカソン",
    date: "2025/07/05",
    description: "学内で開催されたハッカソン。",
    component: MudsHackathon,
    },
]