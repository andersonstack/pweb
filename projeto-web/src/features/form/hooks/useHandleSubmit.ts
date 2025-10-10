import React, { useState } from "react";
import { createMovieInput } from "../types/inputMovie";

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
  };


  return { values, handleChange, handleSubmit, posterPreview };
}
