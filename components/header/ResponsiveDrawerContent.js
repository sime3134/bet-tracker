'use client';

const { Toolbar, ListItemText, List, ListItem, ListItemButton, ListItemIcon } = require("@mui/material");
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { views } from '@/utilities/constants';

const ResponsiveDrawerContent = ({ handleDrawerToggle }) => {

    const renderIcon = (name) => {
        switch(name) {
            case '/':
                return <DashboardIcon color="primary" />;
            case '/statistics':
                return <BarChartIcon color="primary" />;
            case '/your-bets':
                return <ListIcon color="primary" />;
            case '/add':
                return <AddIcon color="primary" />;
            case '/active':
                return <HourglassBottomIcon color="primary" />;
        }
    }

    const hideDrawer = () => {
        if(handleDrawerToggle) {  
            handleDrawerToggle();
        }
    }

    const DrawerList = () => {
        return (
            <List sx={{ pt: 6, }} >
                {views.map((view, index) => (
                        <ListItemButton 
                        key={index} 
                        onClick={() => hideDrawer()} 
                        href={view.name} 
                        passHref 
                        component={Link} 
                        selected={usePathname() == view.name}
                        sx={view.nested ? { pl: 6 } : {}}
                        >
                            <ListItemIcon>
                                { renderIcon(view.name) }
                            </ListItemIcon>
                            <ListItemText primary={view.label} />
                        </ListItemButton>
                ))}
            </List>
        );
    }

    return (
        <div>
            <Toolbar sx={{ pt: 2 }}>
                <Image src="/vercel.svg" alt="Bet-Tracker Logo" width={150} height={50} />
            </Toolbar>
            <DrawerList />
        </div>
    );
}

export default ResponsiveDrawerContent;