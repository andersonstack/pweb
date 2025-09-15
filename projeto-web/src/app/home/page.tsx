// Configurações
'use client'
import { useEffect, useState } from "react";

// Componentes
import { Service } from "../service/service";
import { Card } from "@/components/card";
import { ButtonComponent } from "@/components/button";

// Serviços
import type { Movie } from "../interfaces/interfaces";

export default function Home() {
  const [dataSearch, setDataSearch] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (pageNumber: number) => {
    setLoading(true);
    const data = await Service({searchParams: {page: pageNumber.toString()}})
    setDataSearch(data?.Search || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies(page);
  }, [page])


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Carregando...
      </div>
    );
  }

  if (dataSearch.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Nenhum filme encontrado.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ButtonComponent
        disabled={page === 1}
        page={page}
        setPage={() => setPage(page - 1)}
        name="Página anterior"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataSearch.map((movie: Movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <ButtonComponent
        page={page}
        setPage={() => setPage(page + 1)}
        name="Próxima página"/>
    </div>
  );
}
