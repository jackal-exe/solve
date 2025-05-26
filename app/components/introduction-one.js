import { AlcoholSvg } from './logo/alcohol';
import { SulfateSvg } from './logo/sulfate';
import { ParabenSvg } from './logo/paraben';
import { MAIN_COLOR } from '@/constant/color';
import { useMobileHook } from '@/hooks/mobile';
import { Box, Typography } from '@mui/material';
import { FragranceSvg } from './logo/fragrance';
import { Image } from './image';

export const IntroductionOne = () => {
  const showMobile = useMobileHook();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '70px 30px',
        gap: 10,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 3,
          }}
        >
          <Typography fontWeight={600} fontSize={40} color={MAIN_COLOR}>
            ALL-IN-ONE LIP CARE
          </Typography>
          <Typography color={MAIN_COLOR}>
            With UV Filter and Cooling Sensation
          </Typography>
          <Typography>
            Acts as a lip serum, lip sunscreen, lip gloss, lip base, and gentle
            exfoliator
          </Typography>
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: showMobile ? 'center' : 'space-between',
              flexWrap: 'wrap',
              gap: 5,
            }}
          >
            <AlcoholSvg width={100} />
            <FragranceSvg width={100} />
            <ParabenSvg width={100} />
            <SulfateSvg width={100} />
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            height: '600px',
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: 'white',
          }}
        >
          <Image
            src="/assets/model2.jpg"
            alt="model2"
            height="100%"
            width="100%"
            objectFit="cover"
          />
        </Box>
      </Box>
    </Box>
  );
};
