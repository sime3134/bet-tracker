import BetManagementView from '@/components/views/BetManagementView.js';
import betsRepository from '@/repository/BetsRepository';

async function getBetsForUser(userId, page, limit, query, status) {
    const bets = await betsRepository.getBetsForUser(userId, page, limit, query, status);
    return bets;
}

export default async function BetManagement({ searchParams }) {
    const page = searchParams.page;
    const limit = searchParams.limit;
    const query = searchParams.query;
    const status = searchParams.status;

    const bets = await getBetsForUser(1, page, limit, query, status);
    
    return (
        <BetManagementView bets={ bets } />
    );
}