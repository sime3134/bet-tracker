import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Box from '@mui/material/Box';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import MainContent from '@/components/main_content/MainContent';
import { drawerWidth } from '@/utilities/constants';

export const metadata = {
  title: 'Bet-Tracker',
  description: 'Track your bets and see how you\'re doing!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Header />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
              <MainContent children={children} />
              <Footer />
            </Box>
          </Box>
        </body>
      </ThemeRegistry>
    </html>
  )
}
