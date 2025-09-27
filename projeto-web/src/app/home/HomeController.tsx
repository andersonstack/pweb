"use client"
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { HomeService } from "./HomeService";
import { useSearch } from "../context/SearchContext";

export function HomeController(searchForm: string) {
    const [loading, setLoading] = useState<boolean>(false);
    const {setMovies, movies} = useSearch();
    const searchParams = useSearchParams();
    const router = useRouter();
    const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
    const [page, setPage] = useState(pageFromUrl);

    useEffect(() => {
        setLoading(true);
        HomeService(page, searchForm)
            .then((movies) => setMovies(movies))
            .finally(() => {
                setLoading(false)
            });
    }, [searchForm, page]);

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        params.set("titleSearchKey", searchForm);
        router.replace(`?${params.toString()}`);
    }, [page, searchForm])

    return {page, setPage, movies, loading};
}
