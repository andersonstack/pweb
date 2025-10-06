import MoviesRepository from "./MoviesRepository";
import { QueryType } from "../../types/query";

const moviesRepository = new MoviesRepository();

class MoviesController {
  async getMovies(req: any, res: any) {
    const { page = "1" } = req.query;
    const pageNumber = parseInt(page as string, 10);
    const data: QueryType = {
      page: pageNumber,
    };
    return await moviesRepository.getMovies(data);
  }
}

export default MoviesController;
