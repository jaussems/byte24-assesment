import Link from "next/link";
import { Search } from "../ui/search";
import { Dropdown } from "../ui/dropdown";
import Events from "@/app/ui/events";
import { Suspense } from "react";
import { dropDownOptions } from "@/app/lib/data";

export default  async function Page({searchParams} : {
    searchParams?: {
        query?: string;
        filter?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const filter = searchParams?.filter || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
      <main className="flex min-h-screen flex-col p-6">
          <Link href={"/dashboard/event/create"}>Create</Link>
        <Search placeholder={"Search for events "} />
        <Dropdown label="Filter events" options={dropDownOptions}  />
          <Suspense fallback={<div> Loading... </div>}>
            <Events query={query} filter={filter} currentPage={currentPage} />
            </Suspense>
      </main>
    );
  }
