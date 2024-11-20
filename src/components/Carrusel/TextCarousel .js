import { Box, Typography } from '@mui/material';
import React from 'react';

const TextCarousel = ({ text }) => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          animation: 'scrollTitle 35s linear infinite',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            whiteSpace: 'nowrap',
            paddingRight: '2em',
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
