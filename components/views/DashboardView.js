import DashboardStatisticCards from '@/components/DashboardStatisticCards';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FilterableList from '@/components/FilterableList';

const DashboardView = ( { bets }) => {

    return (
        <>
            <Typography pt={4} pb={2} variant='h4'>Hi, welcome back. 👋</Typography>
            <DashboardStatisticCards bets={bets} />
            <Box sx={{mt: 2}}>
                <Typography pt={2} pb={2} variant='h5'>Your latest bets</Typography>
                <FilterableList bets={bets} />
                <Box display='flex' justifyContent="end">
                    <Button variant="contained" color="primary" href="/bet-management" sx={{mt: 2, mb: 2}}>View all</Button>
                </Box>
            </Box>
        </>
    )
}

export default DashboardView;