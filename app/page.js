import styles from './page.module.css';
import betsRepository from '@/repository/BetsRepository';
import DashboardStatisticCards from '@/components/DashboardStatisticCards';
import { Container } from '@mui/material';

async function getBetsForUser(userId) {
  return await betsRepository.getAllBetsForUser(userId);
}

export default async function MainContent() {
  const bets = await getBetsForUser(1);
  let dataChanged = false;

  return (
    <Container>
      <h1>Hi, welcome back.</h1>
      <DashboardStatisticCards initialBetData={bets} dataChanged={dataChanged} />
    </Container>
  );
}