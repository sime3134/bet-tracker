'use client';

import FilterableList from '@/components/FilterableList';
import AddBetButton from '@/components/AddBetButton';
import { Typography, Box } from '@mui/material';

const BetManagementView = ( { bets, setBets } ) => {

    return(
        <>
            <Typography pt={4} pb={2} variant='h4'>Manage bets</Typography>
            <FilterableList bets={bets} />
            <Box mt={2} display="flex" justifyContent="end">
                <AddBetButton />
            </Box>
        </>
    );
};

export default BetManagementView;