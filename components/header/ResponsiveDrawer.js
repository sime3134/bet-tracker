import { Drawer } from "@mui/material";
import { drawerWidth } from "@/utilities/constants";
import ResponsiveDrawerContent from "./ResponsiveDrawerContent";

const ResponsiveDrawer = ({ handleDrawerToggle, mobileOpen }) => {
    
    const container = () => window.document.body;

    return (
        <>
            <Drawer
                container = {container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                <ResponsiveDrawerContent handleDrawerToggle={handleDrawerToggle} />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                <ResponsiveDrawerContent />
            </Drawer>
        </>
    );
}

export default ResponsiveDrawer;