import { PrismaClient } from "@prisma/client";
import { QueryType } from "../../types/query";

const prisma = new PrismaClient();

class MoviesRepository {
  public async getMovies(page: number) {
    const limit = 5;
    const skip = (page - 1) * limit;

    const data = await prisma.movie.findMany({
      include: { images: true },
      skip: skip,
      take: limit,
    });

    return data;
  }

  public async findByTitle(title: string) {
    return await prisma.movie.findFirst({
      where: { title: title },
      include: { images: true },
    });
  }

  public async findByID(id: string) {
    return await prisma.movie.findUnique({
      where: { id: id }
    })
  }
}

export default MoviesRepository;
