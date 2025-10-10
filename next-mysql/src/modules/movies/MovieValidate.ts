import { z } from "zod";

export const MovieSchema = z.object({
  title: z.string(),
  year: z.string(),
  type: z.enum(["movie", "series"]),
  poster: z.string().url(),
  imdbID: z.string(),
});

export type MoviesCreateInput = z.infer<typeof MovieSchema>;
