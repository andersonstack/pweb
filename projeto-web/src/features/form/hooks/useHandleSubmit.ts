import React, { useState } from "react";
import { createMovieInput } from "../types/inputMovie";

export default function useHandleSubmit({title = "", year = "", type = "", poster = ""}: createMovieInput) {
  const [values, setValues] = useState({title, year, type, poster});
  const [posterPreview, setposterPreview] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value})

    if (name === "poster")
      setposterPreview(values.poster)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!values.title || !values.year || !values.type || !values.poster)
      throw new Error("Campos obrigatórios faltantes!");
  
    console.log(values);
  }

  return {values, handleChange, handleSubmit, posterPreview}
} 
