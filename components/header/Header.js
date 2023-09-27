'use client';

import { useState } from 'react';
import ResponsiveAppBar from '@/components/header/ResponsiveAppBar';
import ResponsiveDrawer from '@/components/header/ResponsiveDrawer';
import { Box } from '@mui/material';
import { drawerWidth } from '@/utilities/constants';
import React from 'react';

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
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="drawer menu"
            >
                <ResponsiveDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
            </Box>
        </>
    );
};

export default Header;