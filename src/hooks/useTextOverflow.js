import { useEffect, useState } from 'react';

const useTextOverflow = (textElement) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (textElement.current) {
      const isTitleOverflowing = textElement.current.scrollWidth > textElement.current.clientWidth;
      setIsOverflowing(isTitleOverflowing);

      if (isTitleOverflowing) {
        const timer = setTimeout(() => {
          setStartAnimation(true);
        }, 500);

        return () => clearTimeout(timer);
      }
    }
  }, [textElement]);

  return { isOverflowing, startAnimation };
};

export default useTextOverflow;
