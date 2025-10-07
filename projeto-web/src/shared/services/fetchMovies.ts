import typeResponse from "@/lib/utils/typeResponse";

export async function fetchMovies(query: string) {
    const response = await fetch(`/api?${query}`);
    const responseJson = await response.json();
    console.log(responseJson.Search);
    const moviesTyped = typeResponse(responseJson.Search);
    console.log(moviesTyped);
    return moviesTyped;
}
