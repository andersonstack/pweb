import express from "express";
import MoviesRoutes from "./movies/MoviesRoutes";

const app = express();
app.use(express.json());

app.use("/movies", MoviesRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
