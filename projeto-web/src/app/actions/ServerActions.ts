// src/app/home/SearchActions.ts
"use server";
import { HomeService } from "../home/HomeService";
import { Movie } from "../types/movie";

export async function searchMovies(searchKey: string): Promise<Movie[]> {
  const movies = await HomeService(1, searchKey);
  return movies;
}
