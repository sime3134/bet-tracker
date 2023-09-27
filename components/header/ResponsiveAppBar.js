import { AppBar, IconButton, Typography, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { drawerWidth } from "@/utilities/constants";

const ResponsiveAppBar = ({ handleDrawerToggle }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <MenuIcon color="whiteText" />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;