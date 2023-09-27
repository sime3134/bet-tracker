'use client';

const { Toolbar, ListItemText, List, ListItem, ListItemButton, ListItemIcon } = require("@mui/material");
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import Image from 'next/image';
import { views } from '@/utilities/constants';

const ResponsiveDrawerContent = ({ handleDrawerToggle }) => {

    const renderIcon = (name) => {
        switch(name) {
            case '/':
                return <DashboardIcon color="primary" />;
            case '/statistics':
                return <BarChartIcon color="primary" />;
            case '/bet-management':
                return <AttachMoneyIcon color="primary" />;
        }
    }

    const hideDrawer = () => {
        if(handleDrawerToggle) {  
            handleDrawerToggle();
        }
    }

    return (
        <div>
            <Toolbar sx={{ pt: 2 }}>
                <Image src="/vercel.svg" alt="Bet-Tracker Logo" width={150} height={50} />
            </Toolbar>
            <List sx={{ pt: 6, }} >
                {views.map((view, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => hideDrawer()} href={view.name} passHref component={Link} selected={usePathname() == view.name} >
                            <ListItemIcon>
                                { renderIcon(view.name) }
                            </ListItemIcon>
                            <ListItemText primary={view.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default ResponsiveDrawerContent;