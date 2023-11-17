import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ display: 'flex', alignItems: 'center', zIndex: 2000, backgroundColor: 'background.paper' }}>
            <Toolbar sx={{ width: '100%', maxWidth: 1200 }}>
              <Box display="flex" alignItems="center" component={Link} href="/" sx={{ textDecoration: 'none' }}>
                <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
                <Typography variant="h6" color="text.primary">
                  FitnessCenter
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              mt: ['48px', '56px', '64px'],
              py: [2, 3, 3],
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
