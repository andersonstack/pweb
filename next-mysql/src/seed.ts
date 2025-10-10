import { PrismaClient } from "@prisma/client";
import { MoviesCreateInput } from "./modules/movies/MovieValidate";
import MoviesRepository from "./modules/movies/MoviesRepository";

const movies: MoviesCreateInput[] = [
  {
    title: "Avatar",
    year: "2009",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    imdbID: "tt0499549",
    type: "movie",
  },
  {
    title: "I Am Legend",
    year: "2007",
    poster: "https://m.media-amazon.com/images/I/51FKuxHtYnL._UF894,1000_QL80_.jpg",
    imdbID: "tt0480249",
    type: "movie",
  },
  {
    title: "300",
    year: "2006",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
    imdbID: "tt0416449",
    type: "movie",
  },
  {
    title: "The Avengers",
    year: "2012",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
    imdbID: "tt0848228",
    type: "movie",
  },
  {
    title: "The Wolf of Wall Street",
    year: "2013",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
    imdbID: "tt0993846",
    type: "movie",
  },
  {
    title: "Interstellar",
    year: "2014",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    imdbID: "tt0816692",
    type: "movie",
  },
  {
    title: "Game of Thrones",
    year: "2011",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
    imdbID: "tt0944947",
    type: "series",
  },
  {
    title: "Vikings",
    year: "2013",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
    imdbID: "tt2306299",
    type: "series",
  },
  {
    title: "Gotham",
    year: "2014",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
    imdbID: "tt3749900",
    type: "series",
  },
  {
    title: "Power",
    year: "2014",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
    imdbID: "tt3281796",
    type: "series",
  },
  {
    title: "Narcos",
    year: "2015",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
    imdbID: "tt2707408",
    type: "series",
  },
  {
    title: "Breaking Bad",
    year: "2008",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
    imdbID: "tt0903747",
    type: "series",
  },
  {
    title: "Doctor Strange",
    year: "2016",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    imdbID: "tt1211837",
    type: "movie",
  },
  {
    title: "Rogue One: A Star Wars Story",
    year: "2016",
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    imdbID: "tt3748528",
    type: "movie",
  },
  {
    title: "Assassin's Creed",
    year: "2016",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
    imdbID: "tt2094766",
    type: "movie",
  },
  {
    title: "Luke Cage",
    year: "2016",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
    imdbID: "tt3322314",
    type: "series",
  },
]

const prisma = new PrismaClient();
const moviesRepository = new MoviesRepository();

async function main() {
  for (let i = 0; i < movies.length; i++) {
    await moviesRepository.create(movies[i]);
  }
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
