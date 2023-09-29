import betsRepository from "@/repository/BetsRepository";

const GET = async () => {
    try {
        const response = await betsRepository.getAllBetsForUser(1);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { GET };