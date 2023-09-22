'use client';

import { useState } from 'react';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import ResponsiveDrawer from './ResponsiveDrawer';
import { Box } from '@mui/material';
import { drawerWidth } from '@/constants';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    return (
        <>
            <ResponsiveAppBar handleDrawerToggle={handleDrawerToggle} />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="drawer menu"
            >
            <ResponsiveDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
            </Box>
        </>
    );
};

export default Header;