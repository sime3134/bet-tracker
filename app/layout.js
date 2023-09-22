import './globals.css'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import { Box, Toolbar } from '@mui/material'
import Header from '@/components/Header'
import { drawerWidth } from '@/constants'

export const metadata = {
  title: 'Bet-Tracker',
  description: 'Track your bets and see how you\'re doing!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
        <Box sx={{ display: 'flex' }}>
          <Header />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            {children}
          </Box>
        </Box>
        </body>
      </ThemeRegistry>
    </html>
  )
}
