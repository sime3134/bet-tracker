'use client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { z } from 'zod';

const AddBetTextField = ({ _title, _sum, _date, _odds, outcome }) => {
    const [selectedOption, setSelectedOption] = useState(outcome || "Pending");
    const [title, setTitle] = useState(_title || "");
    const [sum, setSum] = useState(_sum || "");
    const [date, setDate] = useState(_date || "");
    const [odds, setOdds] = useState(_odds || "");
    const [titleError, setTitleError] = useState(null);
    const [sumError, setSumError] = useState(null);
    const [dateError, setDateError] = useState(null);
    const [oddsError, setOddsError] = useState(null);
    const [outcomeError, setOutcomeError] = useState(null);

    const betSchema = z.object({
        title: z.string().min(1, "Title is required").max(50, "Title cannot be longer than 50 characters"),
        sum: z.number().min(1, "Sum must be greater than 0"),
        date: z.coerce.date().refine(date => date <= new Date(), "Date cannot be in the future"),
        odds: z.number().min(1, "Odds must be greater than or equal to 1"),
        outcome: z.enum(["Win", "Loss", "Pending", "CashOut"], { message: "Outcome must be selected" }),
    });

    const handleTitleChange = (event) => {
        const value = event.target.value;
        setTitle(value);

        try {
            betSchema.pick({ title: true }).parse({ title: value });
            setTitleError(null);
        } catch (err) {
            setTitleError(err.errors[0].message);
        }
    }

    const handleSumChange = (event) => {
        const value = event.target.value;
        setSum(value);

        const num = parseFloat(value);
        if(isNaN(num)) {
            setSumError("Sum must be a number");
            return;
        }

        try {
            betSchema.pick({ sum: true }).parse({ sum: num });
            setSumError(null);
        } catch (err) {
            setSumError(err.errors[0].message);
        }
    }

    const handleDateChange = (event) => {
        const value = event.target.value;
        setDate(value);

        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        if (!datePattern.test(value)) {
            setDateError("Date must be in the format YYYY-MM-DD");
            return;
        }

        // Safely convert the date string to a JavaScript Date object
        const parsedDate = new Date(value);

        // Check if the date is valid. Date object's getTime() will return NaN if the date is invalid
        if (isNaN(parsedDate.getTime())) {
            setDateError("Date must be a valid date");
            return;
        }

        try {
            betSchema.pick({ date: true }).parse({ date: parsedDate });
            setDateError(null);
        } catch (err) {
            setDateError(err.errors[0].message);
        }
    }

    const handleOddsChange = (event) => {
        const value = event.target.value;
        setOdds(value);

        const num = parseFloat(value);
        if(isNaN(num)) {
            setSumError("Odds must be a number");
            return;
        }

        try {
            betSchema.pick({ odds: true }).parse({ odds: num });
            setOddsError(null);
        } catch (err) {
            setOddsError(err.errors[0].message);
        }
    }

    const handleSelectedOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);

        try {
            betSchema.pick({ outcome: true }).parse({ outcome: value });
            setOutcomeError(null);
        } catch (err) {
            setOutcomeError(err.errors[0].message);
        }
    };

    const handleSubmission = () => {
        //Calculate result? 
    };

    return(
        <Box component="form" sx={{ '& .MuiTextField-root': { width: '100%', mt: 2 } }}
        noValidate autoComplete="off"
        >
            <Grid container>
                <Grid xs={12} >
                    <TextField required id="Title" label="Title" variant="outlined"
                     value={title} onChange={handleTitleChange}
                     error={titleError != null} helperText={titleError ?? ""}/>
                </Grid>
                <Grid xs={12} >
                    <TextField required id="Sum" label="Sum"  variant="outlined"
                    value={sum} onChange={handleSumChange}
                    error={sumError != null} helperText={sumError ?? ""} /> 
                </Grid>    
                <Grid xs={12} >
                    <TextField required id="Date" label="YYYY-MM-DD"  variant="outlined"
                    value={date} onChange={handleDateChange}
                    error={dateError != null} helperText={dateError ?? ""} />
                </Grid>
                <Grid xs={12} >
                    <TextField required id="Odds" label="Odds" variant="outlined"
                    value={odds} onChange={handleOddsChange} 
                    error={oddsError != null} helperText={oddsError ?? ""} />
                </Grid>
                <Grid xs={12} >
                    <TextField required select id="Outcome" label="Outcome" variant='outlined' value={selectedOption}
                    onChange={handleSelectedOptionChange} error={outcomeError != null} helperText={outcomeError ?? ""}>
                        <MenuItem value="Win">Win</MenuItem>
                        <MenuItem value="Loss">Loss</MenuItem>
                        <MenuItem value="CashOut">Cash Out</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                    </TextField> 
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="end">
                <Button
                    variant="contained" 
                    color="primary" 
                    size="large"
                    onClick={handleSubmission}
                    sx={{mt: 2, mb: 2}}>
                    Submit  
                </Button>
            </Box>
        </Box>     
    );
}

export default AddBetTextField;