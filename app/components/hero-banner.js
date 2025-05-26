import { Image } from './image';
import { Box } from '@mui/material';
import { useMobileHook } from '@/hooks/mobile';

export function HeroBanner() {
  const mobileScreen = useMobileHook();

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        flexDirection: mobileScreen ? 'column' : 'row',
      }}
    >
      <Image
        height={mobileScreen ? '50%' : '100%'}
        width={mobileScreen ? '100%' : '50%'}
        objectFit="cover"
        src="/assets/model1.jpg"
        alt="Model 1"
      />
      <Image
        height={mobileScreen ? '50%' : '100%'}
        width={mobileScreen ? '100%' : '50%'}
        objectFit="cover"
        src="/assets/solve1.jpg"
        alt="Model 1"
      />
    </Box>
  );
}
