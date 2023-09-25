const { Toolbar, Divider, ListItemText, List, ListItem, ListItemButton, ListItemIcon, Typography } = require("@mui/material");
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import Image from 'next/image';

const ResponsiveDrawerContent = () => {
    return (
        <div>
            <Toolbar sx={{ pt: 2 }}>
                <Image src="/vercel.svg" alt="Bet-Tracker Logo" width={150} height={50} />
            </Toolbar>
            <List sx={{ pt: 6, }} >
                {['Dashboard', 'Statistics', 'Bet Management'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 ? <DashboardIcon /> : index === 1 ? <BarChartIcon /> : <AttachMoneyIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default ResponsiveDrawerContent;