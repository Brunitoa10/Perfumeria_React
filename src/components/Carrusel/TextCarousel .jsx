import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const TextCarousel = ({ text }) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (textRef.current && containerRef.current) {
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setIsOverflowing(textWidth > containerWidth);
    }
  }, [text]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        overflow: 'hidden',
        textAlign: isOverflowing ? 'left' : 'center', // Centrado si no hay desbordamiento
        display: 'flex',
      }}
    >
      <Box
        ref={textRef}
        sx={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: isOverflowing ? 'scrollTitle 10s linear infinite' : 'none',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
          }}
        >
          {text}
        </Typography>
      </Box>

      <style>
        {`
          @keyframes scrollTitle {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default TextCarousel;
