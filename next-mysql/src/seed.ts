import { PrismaClient } from "@prisma/client";
import { moviesData } from "./modules/movies/MovieValidate";

const prisma = new PrismaClient();

async function main() {
  for (const movie of moviesData) {
    const media = await prisma.movie.create({
      data: {
        title: movie.Title,
        year: movie.Year,
        rated: movie.Rated,
        released: movie.Released || null,
        runtime: movie.Runtime,
        genre: movie.Genre,
        director: movie.Director,
        writer: movie.Writer,
        actors: movie.Actors,
        plot: movie.Plot,
        language: movie.Language,
        country: movie.Country,
        awards: movie.Awards,
        poster: movie.Poster,
        metascore: movie.Metascore || null,
        imdbRating: movie.imdbRating || null,
        imdbVotes: movie.imdbVotes || null,
        imdbID: movie.imdbID,
        type: movie.Type,
        totalSeasons: movie.totalSeasons ? parseInt(movie.totalSeasons) : null,
        comingSoon: movie.ComingSoon || false,
        response: movie.Response.toLowerCase() === "true",
        images: {
          create: (movie.Images || []).map((url) => ({ url })),
        },
      },
    });

    console.log(`Inserido: ${media.title}`);
  }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
}

main();
