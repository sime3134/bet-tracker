import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#443677',
        },
        secondary: {
            main: '#E4022D',
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;