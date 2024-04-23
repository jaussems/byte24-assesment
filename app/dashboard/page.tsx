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
      <main className="flex  flex-col p-6">
        <div className="flex items-center align-middle flex-col md:flex-row ">
          <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 w-36" href={"/dashboard/event/create"}>Create Event</Link>
          <Search placeholder={"Search for events "} />
        <Dropdown options={dropDownOptions}  />
        </div>
          <Suspense fallback={<div> Loading... </div>}>
            <Events query={query} filter={filter} currentPage={currentPage} />
            </Suspense>
      </main>
    );
  }
