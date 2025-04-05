import { useInView } from 'react-intersection-observer';
import '../styles/RevealOnScroll.css';

function RevealOnScroll({ children, threshold = 0.1, delay = 0, className = '' }) {
    const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true
    });

    return (
    <div 
        ref={ref}
        className={`reveal-element ${inView ? 'revealed' : ''} ${className}`}
        style={{ transitionDelay: `${delay}s` }}
    >
        {children}
    </div>
    );
}

export default RevealOnScroll;