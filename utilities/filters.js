const filter = (bets, filters) => {
    return filters.reduce((filteredBets, filter) => filter(filteredBets), bets);
}

const filterStatus = (bets, status) => bets.filter(bet => bet.status === status);

const filterStartDate = (bets, startDate) => bets.filter(bet => new Date(bet.date) >= startDate);

const filterEndDate = (bets, endDate) => bets.filter(bet => new Date(bet.date) <= endDate);

const filterOdds = (bets, minOdds, maxOdds) => bets.filter(bet => bet.odds >= minOdds && bet.odds <= maxOdds);

const filterSum = (bets, minSum, maxSum) => bets.filter(bet => bet.sum >= minSum && bet.sum <= maxSum);

const filterTitle = (bets, title) => bets.filter(bet => bet.title.toLowerCase().includes(title.toLowerCase()));

const filterResult = (bets, minResult, maxResult) => bets.filter(bet => bet.result >= minResult && bet.result <= maxResult);

export default filter;
export { filterStatus, filterStartDate, filterEndDate, filterOdds, filterSum, filterTitle, filterResult };