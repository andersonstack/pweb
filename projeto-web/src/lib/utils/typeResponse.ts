export default function typeResponse(responseJson: any) {
    return responseJson.map((movie: any) => ({
        id: movie.imdbID, 
        title: movie.Title, 
        year: movie.Year, 
        type: movie.Type, 
        poster: movie.Poster, 
        imdbID: movie.imdbID
    }));
}
