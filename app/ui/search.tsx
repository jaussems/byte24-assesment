'use client';

import { useState } from "react";
import { Button } from "./button";

export function Search({query, searchFn, performSearch}: {query: string, searchFn: (value: string) => void, performSearch: () => void }) {

    // TODO:  using URL search as nextJs recommends

    return (
      <div className="flex gap-4 p-4">
        <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" value={query} onChange={(e: any) => searchFn(e.target.value) }  />
        <Button type="button" onClick={performSearch}>Search</Button>
      </div>
    );
  }

