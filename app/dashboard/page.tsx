import Link from "next/link";
import { Search } from "../ui/search";
import { Dropdown } from "../ui/dropdown";
import Events from "@/app/ui/events";
import {Suspense} from "react";

export default  async function Page({searchParams} : {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const dropDownOptions = [
      {value: "sortbyLocationASC", label: "Sort by Location ascending"},
      {value: "sortbyLocationDESC", label: "Sort by Location descending"},
      {value: "sortbyNameASC", label: "Sort by Name ascending"},
      {value: "sortbyNameDESC", label: "Sort by Name descending"},
    ]

    return (
      <main className="flex min-h-screen flex-col p-6">
          <Link href={"/dashboard/event/create"}>Create</Link>
        <Search placeholder={"Search for events "} />
        <Dropdown label="Filter events" options={dropDownOptions}  />
          <Suspense fallback={<div> Loading... </div>}>
            <Events query={query} currentPage={currentPage} />
            </Suspense>
      </main>
    );
  }
