import MoviesRepository from "./MoviesRepository";

const moviesRepository = new MoviesRepository();

class MoviesController {
  async getMovies(req: any, res: any) {
    const { page = "1", title, id } = req.query;
    if (title) return await this.findByTitle(title);
    else if (id) return await this.findByID(id);
    else return await this.nextPage(page);
  }

  private async findByTitle(title: string) {
    return await moviesRepository.findByTitle(title);
  }

  private async findByID(id: string) {
    return await moviesRepository.findByID(id);
  }

  private async nextPage(page: string) {
    const pageNumber = parseInt(page as string, 10);
    return await moviesRepository.getMovies(pageNumber);
  }
}

export default MoviesController;
