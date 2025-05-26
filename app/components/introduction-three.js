import { Image } from './image';
import { MAIN_COLOR } from '@/constant/color';
import { useMobileHook } from '@/hooks/mobile';
import { Box, Typography } from '@mui/material';

export const IntroductionThree = () => {
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
      }}
    >
      <Box
        sx={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: showMobile ? 10 : 3,
          flexDirection: showMobile ? 'column' : 'row',
        }}
      >
        <Typography
          fontSize={30}
          fontWeight={600}
          color={MAIN_COLOR}
          sx={{ ...(!showMobile && { transform: 'rotate(-90deg)' }) }}
        >
          BEFORE
        </Typography>
        <Image
          src="/assets/before-after.png"
          alt="before after"
          height="300px"
          width="100%"
          maxWidth="900px"
          objectFit="cover"
        />
        <Typography
          fontSize={30}
          fontWeight={600}
          color={MAIN_COLOR}
          sx={{ ...(!showMobile && { transform: 'rotate(90deg)' }) }}
        >
          AFTER
        </Typography>
      </Box>
    </Box>
  );
};
