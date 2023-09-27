import StatisticsView from "@/components/views/StatisticsView";
import betsRepository from "@/repository/BetsRepository";

export default async function Statistics() {

    const bets = await betsRepository.getAllBetsForUser(1);

    return (
        <StatisticsView bets={bets} />
    );
};