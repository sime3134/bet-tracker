'use client';

import { Typography } from '@mui/material';
import AddBetForm from '@/components/AddBetForm';

const AddBetView = () => {

    return(
        <>
            <Typography pt={4} pb={4} variant='h4'>Add bet</Typography>
            <AddBetForm _title="" _sum ="" _date="" _odds="" outcome="Pending" />
        </>
        
    ); 
};

export default AddBetView;