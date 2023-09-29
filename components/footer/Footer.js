import { Box, Typography } from '@mui/material';
import { footerHeight } from '@/utilities/constants';

const Footer = () => {
    return (
        <Box height={footerHeight} sx={{ backgroundColor: "primary.main" }} component="footer" display='flex' alignItems="center" justifyContent="center">
            <Typography variant="body2" color="white">© 2023 Bet-Tracker</Typography>
        </Box>
    );
}

export default Footer;