import { useEffect, useState } from 'react';

export const useMobileHook = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleWindowSize = () => {
      setSize({ height: window.innerHeight, width: window.innerWidth });
    };

    window.addEventListener('resize', handleWindowSize);
    handleWindowSize();

    return () => window.removeEventListener('resize', handleWindowSize);
  }, []);

  return size.width <= 600 ? true : false;
};
