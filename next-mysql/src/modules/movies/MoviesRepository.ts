import { PrismaClient } from "@prisma/client";
import { QueryType } from "../../types/query";

const prisma = new PrismaClient();

class MoviesRepository {

  public async getMovies(dataGet: QueryType) {
    const limit = 5;
    const page = dataGet.page!;
    const skip = (page - 1) * limit;
    console.log(skip);
  
    const data = await prisma.movie.findMany({
      include: { images: true },
      skip: skip,
      take: limit,
    });

    return data;
  }

}

export default MoviesRepository;
