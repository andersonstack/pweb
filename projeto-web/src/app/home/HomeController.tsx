import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { HomeService } from "./HomeService";
import type { Movie } from "../interfaces/interfaces";

export function HomeController(search: string) {
    const [dataSearch, setDataSearch] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
    const [page, setPage] = useState(pageFromUrl);

    useEffect(() => {
        setLoading(true);
        HomeService(page, search)
            .then((movies) => setDataSearch(movies))
            .finally(() => setLoading(false));
    }, [search, page]);

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        params.set("titleSearchKey", search);
        router.replace(`?${params.toString()}`);
    }, [page, search])

    return {page, setPage, dataSearch, loading};
}
