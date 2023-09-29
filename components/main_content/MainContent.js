import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';


const MainContent = ({ children }) => {
    return (
        <Box
            component="main"
            sx={{ 
                flexGrow: 1, 
                pt: 3,
                pl: { xs: 2, sm: 5 },
                pr: { xs: 2, sm: 5 }
            }}
        >
            <Toolbar />
            <Container>
                {children}
            </Container>
        </Box>
    );
};

export default MainContent;