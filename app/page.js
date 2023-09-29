import styles from './page.module.css';
import betsRepository from '@/repository/BetsRepository';
import DashboardView from '@/components/views/DashboardView';

async function getAllBetsForUser(userId) {
  return await betsRepository.getAllBetsForUser(userId);
}

export default async function Dashboard() {
  const bets = await getAllBetsForUser(1);

  return (
    <DashboardView bets={ bets } />
  );
}