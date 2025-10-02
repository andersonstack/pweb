"use client"
import { useHomeController } from "./useHomeController";
import { CardComponent } from "@/shared/ui/Card";
import { ButtonComponent } from "@/shared/ui/Button";
import type { MovieType } from "../../shared/types/movie-type";

export default function HomeView() {
    const {page, setPage, movies, loading} = useHomeController();

    if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
    }

    if (movies.length === 0) {
        return <div className="flex justify-center items-center h-screen">Nenhum filme encontrado.</div>;
    }

    return (
        <div className="min-h-screen bg-[#f8f6f1] text-[#5c4a3f]">
        <div className="container mx-auto px-6 py-10">
            <div className="flex justify-between mb-8">
                <ButtonComponent
                    disabled={page === 1}
                    page={page}
                    setPage={() => setPage(page - 1)}
                    name="⬅ Página anterior"
                    className="bg-[#ffd8b5] text-[#5c4a3f] px-4 py-2 rounded-lg hover:bg-[#ffc999] transition-colors disabled:opacity-50"
                />
                <ButtonComponent
                page={page}
                    setPage={() => setPage(page + 1)}
                    name="Próxima página ➡"
                    className="bg-[#ffd8b5] text-[#5c4a3f] px-4 py-2 rounded-lg hover:bg-[#ffc999] transition-colors"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie: MovieType) => (
                <div key={movie.imdbID} className="bg-[#fff8f0] border rounded-xl shadow-md">
                <CardComponent href={`/movie/${movie.imdbID}`} movie={movie} />
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}