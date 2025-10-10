import { PrismaClient } from "@prisma/client";
import { MoviesCreateInput } from "./MovieValidate";

const prisma = new PrismaClient();

class MoviesRepository {
  public async getMovies(page: number) {
    const limit = 5;
    const skip = (page - 1) * limit;

    const data = await prisma.movie.findMany({
      skip: skip,
      take: limit,
    });

    return data;
  }

  public async create(data: MoviesCreateInput) {
    return await prisma.movie.create({data});
  } 

  public async findByTitle(title: string) {
    return await prisma.movie.findFirst({
      where: { title: {
        contains: title,
      } },
    });
  }

  public async findByID(id: string) {
    return await prisma.movie.findUnique({
      where: { id: id }
    })
  }
}

export default MoviesRepository;
