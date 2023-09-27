import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const finalTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3d5a80',
        },
        secondary: {
            main: '#ee6c4d',
        },
        whiteText: {
            main: '#fff',
        },
        background: {
            default: '#fafafa',
            paper: '#fff',
        },
    },

    typography: {
        fontFamily: roboto.style.fontFamily,
    },

    components: {
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    boxShadow: 'none',
                    border: 0,
                }),
            }
        },
    }
});

export default finalTheme;