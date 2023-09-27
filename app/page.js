import styles from './page.module.css';
import betsRepository from '@/repository/BetsRepository';
import DashboardView from '@/components/views/DashboardView';

async function getRecentBetsForUser(userId) {
  return await betsRepository.getRecentBetsForUser(userId, 10);
}

export default async function Dashboard() {
  const bets = await getRecentBetsForUser(1);

  return (
    <DashboardView bets={ bets } />
  );
}