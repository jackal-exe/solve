import { MAIN_COLOR } from '@/constant/color';
import { Box, CircularProgress } from '@mui/material';

export function LoadingScreen() {
  return (
    <Box
      sx={{
        my: 2,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress sx={{ color: MAIN_COLOR }} />
    </Box>
  );
}
