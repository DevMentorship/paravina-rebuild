import { useEffect, useRef, useState } from 'react';

const useElementOnScreen = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        {
          rootMargin: '-100px',
          threshold: 0.1,
        },
      );

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, []);

  useEffect(() => {
    if (isIntersecting && ref.current) {
      ref.current.querySelectorAll<HTMLElement>('[data-child]').forEach((block) => {
        block.classList.add('end-animation-top-down', 'fade-in');
      });
    }
  }, [isIntersecting]);

  return { ref };
};

export default useElementOnScreen;
