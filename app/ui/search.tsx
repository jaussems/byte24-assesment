'use client';

import { Button } from "./button";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce";

interface Search {
    placeholder: string
}
export function Search(search: Search) {
    const {placeholder} = search;
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
      <div className="flex gap-4 p-4">
        <input className="peer block w-74 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
               placeholder={placeholder}
               onChange={(e) => handleSearch(e.target.value) }
               defaultValue={searchParams.get('query')?.toString()}
        />
      </div>
    );
  }

