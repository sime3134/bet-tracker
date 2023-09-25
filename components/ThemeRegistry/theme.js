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
            main: '#443677',
        },
        secondary: {
            main: '#E4022D',
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
                    backgroundColor: theme.palette.background.default,
                    boxShadow: 'none',
                    border: 0,
                }),
            }
        },
    }
});

export default finalTheme;