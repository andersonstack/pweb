"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export function useSyncUrl(page: number, search: string) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const currentPage = params.get("page");
    const currentSearch = params.get("titleSearchKey");

    if (currentPage !== page.toString() || currentSearch !== search) {
      params.set("page", page.toString());
      params.set("titleSearchKey", search);
      router.replace(`?${params.toString()}`);
    }
  }, [page, search, searchParams, router]);
}
