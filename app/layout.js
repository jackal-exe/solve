import './globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

export const metadata = {
  title: 'Solve Skin',
  description: 'solve',
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssBaseline />
          {props.children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
