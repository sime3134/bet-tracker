'use client';

import StatisticCard from '@/components/StatisticCard';
import Grid from '@mui/material/Unstable_Grid2';
import { getDateFromString } from '@/utilities/dateUtilities';
import { TrendingFlat, TrendingUp, TrendingDown } from '@mui/icons-material';

const DashboardStatisticCards = ( { bets } ) => {

    const calculateTotalResult = (betData) => {
        return betData.reduce((totalResult, bet) => totalResult + bet.result, 0);
    }
    
    const calculateResultThisYear = (betData) => {
        const today = new Date();
        return betData.reduce((resultThisYear, bet) => {
            const betDate = getDateFromString(bet.date);
            if (betDate.getFullYear() === today.getFullYear()) {
                return resultThisYear + bet.result;
            }
            return resultThisYear;
    }, 0);
    }

    const calculateResultThisMonth = (betData) => {
        const today = new Date();
        return betData.reduce((resultThisMonth, bet) => {
            const betDate = getDateFromString(bet.date);
            if (
                betDate.getMonth() === today.getMonth() &&
                betDate.getFullYear() === today.getFullYear()
            ) {
                return resultThisMonth + bet.result;
            }
            return resultThisMonth;
        }, 0);
    }

    const totalResult = calculateTotalResult(bets);

    const resultThisMonth = calculateResultThisMonth(bets);

    const resultThisYear = calculateResultThisYear(bets);

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
            <Grid xs={12} xl={4} >
                <StatisticCard value={totalResult} title="Total" icon={getIcon(totalResult)} currency="SEK" />
            </Grid>
            <Grid xs={12} xl={4}>
                <StatisticCard value={resultThisYear} title="This Year" icon={getIcon(resultThisYear)} currency="SEK" />
            </Grid>
            <Grid xs={12} xl={4}>
                <StatisticCard value={resultThisMonth} title="This Month" icon={getIcon(resultThisMonth)} currency="SEK" />
            </Grid >
        </Grid>
    );
};

export default DashboardStatisticCards;