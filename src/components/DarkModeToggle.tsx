import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

const DarkModeToggle = () => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
        >
            {computedColorScheme === 'dark' ? (
                <IconSun size={20} stroke={1.5} />
            ) : (
                <IconMoon size={20} stroke={1.5} />
            )}
        </ActionIcon>
    );
};

export default DarkModeToggle;
