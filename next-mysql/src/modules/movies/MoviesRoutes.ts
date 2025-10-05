import { Router } from "express";
import MoviesRepository from "./MoviesRepository";

const moviesRepository = new MoviesRepository();
const MoviesRoutes = Router();

MoviesRoutes.get("/", async (req, res) => {
  try {
    const movies = await moviesRepository.getMovies();
    res.json(movies);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default MoviesRoutes;
