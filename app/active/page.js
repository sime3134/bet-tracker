import ActiveBetsView from "@/components/views/ActiveBetsView";
import betsRepository from "@/repository/BetsRepository";

export default async function ActiveBets() {

    const bets = await betsRepository.getAllBetsForUser(1);

    return (
        <ActiveBetsView />
    );
};