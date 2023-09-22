import Image from 'next/image';
import styles from './page.module.css';
import betsRepository from '@/repository/BetsRepository';

async function getBetsForUser(userId) {
  return await betsRepository.getAllBetsForUser(userId);
}

export default async function MainContent() {
  const bets = await getBetsForUser(1);

  return (
    <h1>Main content</h1>
  );
}