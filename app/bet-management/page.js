import BetManagementView from '@/components/views/BetManagementView.js';
import betsRepository from '@/repository/BetsRepository';

async function getAllBetsForUser(userId) {
  return await betsRepository.getAllBetsForUser(userId);
}

export default async function BetManagement() {
    const bets = await getAllBetsForUser(1);
    
    return (
        <BetManagementView bets={ bets } />
    );
}