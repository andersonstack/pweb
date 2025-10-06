import { Router } from "express";
import MoviesController from "./MovieController";

const moviesController = new MoviesController();
const MoviesRoutes = Router();

MoviesRoutes.get("/", async (req, res) => {
  try {
    const movies = await moviesController.getMovies(req, res);
    res.json(movies);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default MoviesRoutes;
