"use server";
import { MovieType } from "@/shared/types/movie-type";

export async function searchMovies(searchKey: string): Promise<MovieType> {
  const response = await fetch(`http://localhost:3000/api?titleSearchKey=${searchKey}`)
  const data = await response.json();
  const movies: MovieType = data?.Search ?? {}; 
  return movies;
}
