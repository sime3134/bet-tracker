import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { drawerWidth } from '@/components/header/Header';


const MainContent = ({ children }) => {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, pl: 5, pr: 5, pt: 3 }}
        >
            <Toolbar />
            <Container>
                {children}
            </Container>
        </Box>
    );
};

export default MainContent;