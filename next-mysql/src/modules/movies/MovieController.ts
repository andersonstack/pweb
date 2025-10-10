import MoviesRepository from "./MoviesRepository";
import { MovieSchema } from "./MovieValidate";

const moviesRepository = new MoviesRepository();

class MoviesController {
  async create(req: any, res: any) {
    try {
      const imdbID = 'tt' + Date.now().toString().slice(-7);
      req.body.imdbID = imdbID;

      const parsed = MovieSchema.safeParse(req.body);
      if (!parsed.success) return res.status(400).json({error: "O formato do filme é inválido."})

      const data = await moviesRepository.create(parsed.data);
      return res.status(200).json({movie: data})
    } catch (error) {
      return res.status(500).json({error: "Erro ao criar uma novo filme!"})
    }
  }

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
