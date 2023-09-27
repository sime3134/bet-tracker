import { Typography } from '@mui/material';
import AddBetTextField from '@/components/AddBetTextField';

const AddBetView = () => {


    return(
        <>
            <Typography pt={4} pb={4} variant='h4'>Add bet</Typography>
            <AddBetTextField/>
        </>
        
    ); 
};

export default AddBetView;