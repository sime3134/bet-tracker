'use client';

import React, { useEffect, useState } from 'react';
import StatisticCard from '@/components/StatisticCard';
import Grid from '@mui/material/Unstable_Grid2';
import { getDateFromString } from '@/utilities/DateUtilities';
import { TrendingFlat, TrendingUp, TrendingDown } from '@mui/icons-material';

const DashboardStatisticCards = ( { initialBetData, dataChanged } ) => {

    const calculateTotalResult = (betData, setData) => {
        let totalResult = 0;
        betData.forEach(bet => {
            totalResult += bet.result;
        });
        if(setData) {
            setTotalResult(totalResult);
        }
        return totalResult;
    }
    
    const calculateResultThisYear = (betData, setData) => {
        let resultThisYear = 0;
        const today = new Date();
        betData.forEach(bet => {
            const betDate = getDateFromString(bet.date);
            if(betDate.getYear() === today.getYear()) {
                resultThisYear += bet.result;
            }
        });
        if(setData) {
            setResultThisYear(resultThisYear);
        }
        return resultThisYear;
    }

    const calculateResultThisMonth = (betData, setData) => {
        let resultThisMonth = 0;
        const today = new Date();
        betData.forEach(bet => {
            const betDate = getDateFromString(bet.date);
            if (betDate.getMonth() === today.getMonth() &&
                betDate.getYear() === today.getYear()) {
                resultThisMonth += bet.result;
            }
        });
        if(setData) {
            setResultThisMonth(resultThisMonth);
        }
        return resultThisMonth;
    }

    const [totalResult, setTotalResult] = useState(calculateTotalResult(initialBetData, false));

    const [resultThisMonth, setResultThisMonth] = useState(calculateResultThisMonth(initialBetData, false));

    const [resultThisYear, setResultThisYear] = useState(calculateResultThisYear(initialBetData, false));

    useEffect(() => {
        console.log('Data changed');
        calculateResultThisMonth(initialBetData, true);
        calculateResultThisYear(initialBetData, true);
        calculateTotalResult(initialBetData, true);
    }, [dataChanged]);

    const getIcon = (value) => {
        if(value > 0) {
            return <TrendingUp />;
        } else if(value < 0) {
            return <TrendingDown />;
        }
        return <TrendingFlat />;
    }

    return (
        <Grid container spacing={2} >
            <Grid xs={12} lg={4} >
                <StatisticCard value={totalResult} title="Total Result" icon={getIcon(totalResult)} currency="SEK" />
            </Grid>
            <Grid xs={12} lg={4}>
                <StatisticCard value={resultThisMonth} title="Result This Month" icon={getIcon(resultThisMonth)} currency="SEK" />
            </Grid >
            <Grid xs={12} lg={4}>
                <StatisticCard value={resultThisYear} title="Result This Year" icon={getIcon(resultThisYear)} currency="SEK" />
            </Grid>
        </Grid>
    );
};

export default DashboardStatisticCards;