"use client";

import { MovieType } from "@/shared/types/movie-type";
import { useEffect, useState } from "react";
import { fetchMovies } from "@/shared/services/fetchMovies";

export default function useInitialsMovies(): MovieType[] {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchInitialMovies = async () => {
      const movies = await fetchMovies("");
      setMovies(movies);
    }
    fetchInitialMovies();
  }, []);

  return movies;
}
