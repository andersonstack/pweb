import React, { useState } from "react";
import { MovieInputType } from "../../../shared/types/movieinput-type";
import { useApp } from "@/shared/context/AppContext";
import { useRouter } from "next/navigation";

export default function useHandleSubmit({
  title = "",
  year = "",
  series = false,
  movie = false,
  poster = "",
}: MovieInputType) {
  const [values, setValues] = useState({ title, year, series, movie, poster });
  const [posterPreview, setposterPreview] = useState<string | undefined>(
    undefined
  );
  const { setMovies, movies } = useApp();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });

    if (name === "poster") {
      if (value.trim().length > 1) {
        setposterPreview(value);
      }
    }
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
      poster: values.poster,
    };
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro ao salvar filme");
      const result = await res.json();
      setMovies([...movies, result.data.movie]);
      setValues({
        title: "",
        year: "",
        series: false,
        movie: false,
        poster: "",
      });
      setposterPreview(undefined);

      // Redireciona para a home
      router.push("/home");
    } catch {
      // Error handling could be improved here
    }
  };

  return { values, handleChange, handleSubmit, posterPreview };
}
