// src/app/home/SearchActions.ts
"use server";
import { HomeService } from "../home/HomeService";
import { MovieType } from "../../shared/types/movie-type";

export async function searchMovies(searchKey: string): Promise<MovieType[]> {
  const movies = await HomeService(1, searchKey);
  return movies;
}
