import type { MovieType } from "@/shared/types/movie-type";

export default function typeResponse(responseJson: Array<any>) {
    return responseJson.map((movie: MovieType) => ({
        id: movie.id, 
        title: movie.title, 
        year: movie.year, 
        type: movie.type, 
        poster: movie.poster, 
        imdbID: movie.imdbID
    }));
}
