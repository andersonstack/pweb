import MoviesRepository from "./MoviesRepository";

const moviesRepository = new MoviesRepository();

class MoviesController {
  async getMovies(req: any, res: any) {
    const { page = "1" } = req.query;
    const pageNumber = parseInt(page as string, 10);
    return await moviesRepository.getMovies(pageNumber);
  }

  async findyByName(req: any, res: any) {
    const title = req.params.title
    return await moviesRepository.findByName(title);
  }
}

export default MoviesController;
