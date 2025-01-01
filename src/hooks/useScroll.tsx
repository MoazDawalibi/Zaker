import { useState, useEffect } from 'react';

function useScroll(threshold = 100): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isVisible;
}

export default useScroll;
