import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { HomeService } from "./HomeService";
import { useSearch } from "../context/SearchContext";
import type { Movie } from "../interfaces/interfaces";

export function HomeController(query: string) {
    const {setDisabled} = useSearch();
    const [dataSearch, setDataSearch] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
    const [page, setPage] = useState(pageFromUrl);

    useEffect(() => {
        setLoading(true);
        HomeService(page, query)
            .then((movies) => setDataSearch(movies))
            .finally(() => {
                setLoading(false)
                setDisabled(false);
            });
    }, [query, page]);

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        params.set("titleSearchKey", query);
        router.replace(`?${params.toString()}`);
    }, [page, query])

    return {page, setPage, dataSearch, loading};
}
