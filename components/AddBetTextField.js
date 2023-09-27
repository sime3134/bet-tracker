'use client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

const AddBetTextField = ( { } ) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };

    return(
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
        noValidate autoComplete="off" 
        >
            <Grid container spacing={2}>
                <Grid xs={12} xl={4} sx={{ minWidth: 340 }} >
                    <TextField required id="Title" label="Title" variant="standard"/>
                </Grid>
                <Grid xs={12} xl={4} sx={{ minWidth: 340 }} >
                    <TextField required id="Sum" label="Sum"  variant="standard"/> 
                </Grid>    
                <Grid xs={12} xl={4} sx={{ minWidth: 340 }} >
                    <TextField required id="Date" label="YYYY-MM-DD"  variant="standard"/>
                </Grid>
                <Grid xs={12} xl={4} sx={{ minWidth: 340 }} >
                    <TextField required id="Odds" label="Odds" variant="standard"/>
                </Grid>
                <Grid xs={12} xl={4} sx={{ minWidth: 340 }} >
                    <TextField required select id="Outcome" label="Select Option" value={selectedOption} onChange={handleChange}>
                        <MenuItem value="Win">Win</MenuItem>
                        <MenuItem value="Loss">Loss</MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                    </TextField> 
                </Grid>
            </Grid>   
        </Box>     
    );
}

export default AddBetTextField;