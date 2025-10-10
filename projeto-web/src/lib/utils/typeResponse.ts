import type { MovieType } from "@/shared/types/movie-type";

export default function typeResponse(responseJson: Array<unknown>) {
    if (!responseJson || !Array.isArray(responseJson)) return [];
    return responseJson.map((movie: unknown) => {
        const movieData = movie as MovieType;
        return {
            id: movieData.id, 
            title: movieData.title, 
            year: movieData.year, 
            type: movieData.type, 
            poster: movieData.poster, 
            imdbID: movieData.imdbID
        };
    });
}
