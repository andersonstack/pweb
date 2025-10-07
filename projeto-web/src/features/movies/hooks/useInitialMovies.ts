"use client";

import { MovieType } from "@/shared/types/movie-type";
import { useEffect, useState } from "react";

export default function useInitialsMovies(): MovieType[] {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    fetch("/api?titleSearchKey=bagdad&page=1")
      .then((res) => res.json())
      .then((data) => setMovies(data.Search || []));
  }, []);

  return movies;
}
