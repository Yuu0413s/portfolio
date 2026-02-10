import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInSectionProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
}

const FadeInSection = ({ children, delay = 0, direction = 'up' }: FadeInSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const directionOffset = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directionOffset[direction]
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                y: 0
            } : {}}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
