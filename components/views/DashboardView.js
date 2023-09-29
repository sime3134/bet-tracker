import DashboardStatisticCards from '@/components/DashboardStatisticCards';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FilterableList from '@/components/FilterableList';
import Link from 'next/link';

const DashboardView = ( { bets }) => {

    const latest10Bets = bets.slice(-10);

    return (
        <>
            <Typography pt={4} pb={4} variant='h4'>Hi, welcome back 👋</Typography>
            <DashboardStatisticCards bets={bets} />
            <Box sx={{mt: 2}}>
                <Typography pt={2} pb={2} variant='h5'>Your latest bets</Typography>
                <FilterableList bets={latest10Bets} />
                <Box display='flex' justifyContent="end">
                    <Button 
                    variant="contained" 
                    color="primary" 
                    href={"/bet-management"} 
                    passHref 
                    component={Link} 
                    sx={{mt: 2, mb: 2}}>
                        View all
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default DashboardView;