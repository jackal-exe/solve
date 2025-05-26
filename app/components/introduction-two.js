import React from 'react';
import { MAIN_COLOR } from '@/constant/color';
import { Box, Typography } from '@mui/material';
import { useMobileHook } from '@/hooks/mobile';

const BENEFITS = [
  'Moisturizing',
  'Hydrating',
  'Brightening',
  'Plumpy',
  'Heal Chapped Lips',
  'Nourishing',
];

export const IntroductionTwo = () => {
  const showMobile = useMobileHook();
  return (
    <Box
      sx={{
        backgroundColor: MAIN_COLOR,
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '100px',
          transform: showMobile
            ? 'translateX(calc(-350% - 100px))'
            : 'translateX(-110%)',
          animation: 'benefits 30s linear infinite',
        }}
      >
        <React.Fragment>
          {BENEFITS.map((benefit, index) => (
            <Typography key={index} color="white" fontWeight={600}>
              {benefit}
            </Typography>
          ))}
        </React.Fragment>
      </Box>
    </Box>
  );
};
