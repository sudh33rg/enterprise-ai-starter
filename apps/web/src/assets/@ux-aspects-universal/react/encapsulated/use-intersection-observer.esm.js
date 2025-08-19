import { useState, useEffect } from "react";
function useIntersectionObserver(ref) {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const elementRef = ref.current;
        if (!elementRef) {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            return () => { };
        }
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, {
            threshold: 1
        });
        observer.observe(elementRef);
        return () => observer.unobserve(elementRef);
    }, [ref]);
    return isVisible;
}
export { useIntersectionObserver as u };
