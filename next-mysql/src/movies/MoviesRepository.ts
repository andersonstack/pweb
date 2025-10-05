import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class MoviesRepository {
    async getMovies() {
        const data = await prisma.movie.findMany();
        return data;
    }
}

export default MoviesRepository;
