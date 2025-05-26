import { Sidebar } from './sidebar';
import { SolveSvg } from './logo/solve';
import { AppBar, Box } from '@mui/material';

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box
          sx={{
            zIndex: 1,
            height: '70px',
            width: '100%',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(45deg, #DE5F82, #DD6A7C, #B78EB3)',
          }}
        >
          <Box sx={{ top: 15, left: 10, position: 'absolute' }}>
            <Sidebar />
          </Box>
          <SolveSvg height={60} />
        </Box>
      </AppBar>
    </Box>
  );
}
