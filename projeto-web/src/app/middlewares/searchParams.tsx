'use client';
import { useSearchParams } from 'next/navigation';

interface SearchParamsType {
  titleSearchKey: string;
  page: number;
  id: string | null;
}

export function useSearchParamsValues(): SearchParamsType {
  const searchParams = useSearchParams();
  const titleSearchKey = searchParams.get('titleSearchKey') || 'bagdad';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const id = searchParams.get('id') || '';
  return { titleSearchKey, page, id };
}
