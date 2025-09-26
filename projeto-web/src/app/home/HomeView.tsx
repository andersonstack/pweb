import { useSearch } from "../context/SearchContext";
import { HomeController } from "./HomeController";
import { Card } from "@/components/card";
import { ButtonComponent } from "@/components/button";
import type { Movie } from "../interfaces/interfaces";

export default function HomeView() {
    const { search } = useSearch();
    const {page, setPage, dataSearch, loading} = HomeController(search);

    if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
    }

    if (dataSearch.length === 0) {
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
            {dataSearch.map((movie: Movie) => (
                <div key={movie.imdbID} className="bg-[#fff8f0] border rounded-xl shadow-md">
                <Card movie={movie} />
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}