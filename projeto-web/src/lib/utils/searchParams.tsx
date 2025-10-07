'use client';
import { useSearch } from '@/features/search/context/SearchContext';
import { useSearchParams } from 'next/navigation';

interface SearchParamsType {
  titleSearchKey: string;
  page: number;
  id: string | null;
}

export function useSearchParamsValues(): SearchParamsType {
  const searchParams = useSearchParams();
  const {search} = useSearch();
  const titleSearchKey = searchParams.get('titleSearchKey') || 'bagdad';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const id = searchParams.get('id') || '';
  if (search.length != null) {
    
  }
  return { titleSearchKey, page, id };
}
