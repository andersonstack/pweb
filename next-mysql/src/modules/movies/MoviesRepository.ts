import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class MoviesRepository {
    public async getMovies() {
        const data = await prisma.movie.findMany({include: {images: true}});
        return data;
    }
}

export default MoviesRepository;
