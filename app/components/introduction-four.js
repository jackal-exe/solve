import React from 'react';
import Link from 'next/link';
import { Image } from './image';
import { MAIN_COLOR } from '@/constant/color';
import { useMobileHook } from '@/hooks/mobile';
import { Box, Button, Typography } from '@mui/material';

export const IntroductionFour = () => {
  const showMobile = useMobileHook();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '70px 30px',
        flexWrap: 'wrap',
        gap: 30,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Typography
          fontWeight={600}
          fontSize={20}
          width={showMobile ? 150 : '100%'}
          sx={{ textAlign: 'center' }}
        >
          The Best Lip Care for Your Lips.
        </Typography>
        <Image
          src="/assets/commerce.png"
          alt="solve product"
          height="300px"
          width="100%"
          objectFit="cover"
        />
        <Typography fontWeight={600}>Lip Repairing Serum</Typography>
        <Typography>IDR 99.000</Typography>
        <Link href="https://shopee.co.id/Solv%C3%A9-Skin-Lip-Repairing-Serum-Mencerahkan-Melembabkan-dan-Plumpy-(Free-Sticker)-i.1183107132.24913241433?sp_atk=89850dee-24a5-4dd6-b7c0-1391d0277917">
          <Button
            id="shop-now"
            variant="contained"
            sx={{
              backgroundColor: MAIN_COLOR,
              '&:hover': { backgroundColor: 'white', color: 'black' },
            }}
          >
            shop now
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          padding: 1,
          height: 500,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: MAIN_COLOR,
        }}
      >
        <Image
          src="/assets/model3.jpeg"
          alt="model 3"
          height="100%"
          width="100%"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};
