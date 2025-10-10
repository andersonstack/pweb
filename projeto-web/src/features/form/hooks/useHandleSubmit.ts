import React, { useState } from "react";
import { createMovieInput } from "../types/inputMovie";
import { useApp } from "@/shared/context/AppContext";
import { MovieType } from "@/shared/types/movie-type";

export default function useHandleSubmit({
  title = "",
  year = "",
  series = false,
  movie = false,
  poster = "",
}: createMovieInput) {
  const [values, setValues] = useState({ title, year, series, movie, poster });
  const [posterPreview, setposterPreview] = useState<string | undefined>(
    undefined
  );
  const {setMovies, movies} = useApp();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });

    if (name === "poster") {
      if (value.trim().length > 1) {
        console.log(value);
        setposterPreview(value)
      }
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!values.title || !values.year || !values.poster)
      throw new Error("Campos obrigatórios faltantes!");

    if (values.series && values.movie)
        throw new Error("Só um tipo deve ser selecionado");

    await sendMovie();
  };

  const sendMovie = async () => {
    const data = {
      title: values.title,
      year: values.year,
      type: values.series ? "series" : "movie",
      poster: values.poster
    }
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro ao salvar filme");
      const result = await res.json();
      setMovies([...movies, result.data.movie])
    } catch (err) {
      console.error(err);
    }
  };

  return { values, handleChange, handleSubmit, posterPreview };
}
