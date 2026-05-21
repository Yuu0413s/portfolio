import type { ComponentType } from 'react';
import { IconMail, IconBrandGithub, IconBrandX, IconNotebook, IconBook, IconPencil } from '@tabler/icons-react';

export type LinkItem = {
    type: 'email' | 'link';
    label: string;
    ariaLabel: string;
    value?: string;
    url?: string;
    icon: ComponentType<{ size?: number }>;
    color: string;
};

export const linksData: LinkItem[] = [
    {
        type: 'email',
        label: 'GMail',
        ariaLabel: 'メールを送る',
        value: 'y.shibata0820@gmail.com',
        icon: IconMail,
        color: '#EA4335',
    },
    {
        type: 'link',
        label: 'GitHub',
        ariaLabel: 'GitHubプロフィールを見る',
        url: 'https://github.com/Yuu0413s',
        icon: IconBrandGithub,
        color: 'gray',
    },
    {
        type: 'link',
        label: 'X (Twitter)',
        ariaLabel: 'X（Twitter）プロフィールを見る',
        url: 'https://x.com/Yuu0413_s',
        icon: IconBrandX,
        color: '#1DA1F2',
    },
    {
        type: 'link',
        label: 'note',
        ariaLabel: 'noteを見る',
        url: 'https://note.com/yuu_0413',
        icon: IconNotebook,
        color: '#41C9B4',
    },
    {
        type: 'link',
        label: 'Qiita',
        ariaLabel: 'Qiitaを見る',
        url: 'https://qiita.com/yuu_0413',
        icon: IconBook,
        color: '#55C500',
    },
    {
        type: 'link',
        label: 'Zenn',
        ariaLabel: 'Zennを見る',
        url: 'https://zenn.dev/yuu_0413',
        icon: IconPencil,
        color: '#3EA8FF',
    },
];
