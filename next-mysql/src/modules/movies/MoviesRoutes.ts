import { Router } from "express";
import MoviesController from "./MovieController";

const moviesController = new MoviesController();
const MoviesRoutes = Router();

MoviesRoutes.get("/", async (req, res) => {
  try {
    const movies = await moviesController.getMovies(req, res);
    res.json({Search: movies});
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

MoviesRoutes.get("/:title", async (req, res) => {
  try {
    const movie = await moviesController.findyByName(req, res);
    res.json({Search: movie});
  } catch (error: any) {
    res.status(500).json({error: error.message});
  }
})

export default MoviesRoutes;
