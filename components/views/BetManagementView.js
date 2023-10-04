'use client';

import BetTable from '@/components/BetTable';
import AddBetButton from '@/components/AddBetButton';
import { Typography, Box } from '@mui/material';

const BetManagementView = ( { bets } ) => {

    return(
        <>
            <Typography pt={4} pb={4} variant='h4'>Your bets</Typography>
            <BetTable originalBets={bets} />
            <Box mt={2} mb={2} display="flex" justifyContent="end">
                <AddBetButton />
            </Box>
        </>
    );
};

export default BetManagementView;