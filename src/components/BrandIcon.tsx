import type { SimpleIcon } from 'simple-icons';

type BrandIconProps = {
    icon: SimpleIcon;
    size?: number;
};

const BrandIcon = ({ icon, size = 16 }: BrandIconProps) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        aria-label={icon.title}
        style={{ flexShrink: 0 }}
    >
        <path d={icon.path} />
    </svg>
);

export default BrandIcon;
