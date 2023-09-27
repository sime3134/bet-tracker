'use client';

import StatisticCard from '@/components/StatisticCard';
import Grid from '@mui/material/Unstable_Grid2';
import { getDateFromString } from '@/utilities/dateUtilities';
import { TrendingFlat, TrendingUp, TrendingDown } from '@mui/icons-material';

const DashboardStatisticCards = ( { bets } ) => {

    const calculateTotalResult = (betData) => {
        let totalResult = 0;
        betData.forEach(bet => {
            totalResult += bet.result;
        });
        return totalResult;
    }
    
    const calculateResultThisYear = (betData) => {
        let resultThisYear = 0;
        const today = new Date();
        betData.forEach(bet => {
            const betDate = getDateFromString(bet.date);
            if(betDate.getYear() === today.getYear()) {
                resultThisYear += bet.result;
            }
        });
        return resultThisYear;
    }

    const calculateResultThisMonth = (betData) => {
        let resultThisMonth = 0;
        const today = new Date();
        betData.forEach(bet => {
            const betDate = getDateFromString(bet.date);
            if (betDate.getMonth() === today.getMonth() &&
                betDate.getYear() === today.getYear()) {
                resultThisMonth += bet.result;
            }
        });
        return resultThisMonth;
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
            <Grid xs={12} xl={4} sx={{ minWidth: 340 }} >
                <StatisticCard value={totalResult} title="Total" icon={getIcon(totalResult)} currency="SEK" />
            </Grid>
            <Grid xs={12} xl={4} sx={{ minWidth: 340 }}>
                <StatisticCard value={resultThisYear} title="This Year" icon={getIcon(resultThisYear)} currency="SEK" />
            </Grid>
            <Grid xs={12} xl={4} sx={{ minWidth: 340 }}>
                <StatisticCard value={resultThisMonth} title="This Month" icon={getIcon(resultThisMonth)} currency="SEK" />
            </Grid >
        </Grid>
    );
};

export default DashboardStatisticCards;