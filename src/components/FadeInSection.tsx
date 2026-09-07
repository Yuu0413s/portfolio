import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInSectionProps {
    children: ReactNode;
    delay?: number;
}

const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
                duration: 0.3,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
