const { Toolbar, Divider, ListItemText, List, ListItem, ListItemButton, ListItemIcon, Typography } = require("@mui/material");
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import Image from 'next/image';

const ResponsiveDrawerContent = () => {
    return (
        <div>
            <Toolbar>
                <Image src="/vercel.svg" alt="Bet-Tracker Logo" width={100} height={50} />
            </Toolbar>
            <Divider />
            <List>
                {['Dashboard', 'Statistics'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 ? <DashboardIcon /> : <BarChartIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
<Image src="/next.svg" alt="Bet-Tracker Logo" width={50} height={50} />

export default ResponsiveDrawerContent;