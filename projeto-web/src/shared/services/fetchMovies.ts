import typeResponse from "@/lib/utils/typeResponse";

export async function fetchMovies(query?: string) {
    let url = `/api`;
    if (query) url += query;

    const response = await fetch(url);
    const responseJson = await response.json();
    const moviesTyped = typeResponse(responseJson?.Search ?? responseJson);

    return moviesTyped;
}
