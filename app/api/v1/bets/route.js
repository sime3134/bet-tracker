import betsRepository from "@/repository/BetsRepository";

const GET = async (request) => {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const status = searchParams.get("status");
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");
    let response = { status: 200, body: {} };
    try {
        response = await betsRepository.getBetsForUser(1, page, limit, query, status);
    } catch (error) {
        response = {
            status: 500,
            body: error.message,
        };
    }

    return Response.json(response);
};

export { GET };