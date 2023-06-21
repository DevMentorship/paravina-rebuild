import { useEffect, useRef, useState } from 'react';

const useElementOnScreen = (endAnimation?: string) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const triggerAnimation = () => {
    if (ref.current) {
      ref.current.querySelectorAll<HTMLElement>('[data-child]').forEach((block) => {
        block.classList.add(endAnimation ?? 'end-animation-move', 'fade-in');
      });
    }
  };

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        {
          rootMargin: '-50px',
          threshold: 0.05,
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
        block.classList.add(endAnimation ?? 'end-animation-move', 'fade-in');
      });
    }
  }, [isIntersecting, endAnimation]);

  return { ref, triggerAnimation };
};

export default useElementOnScreen;
