import type { SimpleIcon } from 'simple-icons';

type BrandIconProps = {
    icon: SimpleIcon;
    size?: number;
};

const BrandIcon = ({ icon, size = 16 }: BrandIconProps) => (
    <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        style={{ flexShrink: 0 }}
    >
        <path d={icon.path} />
    </svg>
);

export default BrandIcon;
