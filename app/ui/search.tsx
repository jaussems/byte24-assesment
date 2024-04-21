'use client';

import { useState } from "react";
import { Button } from "./button";

export function Search() {
    const [search, setSearch]= useState("");

    return (
      <div className="flex gap-4 p-4">
        <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" onChange={(e: any) => setSearch(e.target.value) }  />
        <Button type="button">Search</Button>
      </div>
    );
  }

