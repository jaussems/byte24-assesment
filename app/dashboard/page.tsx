import Link from "next/link";
import dummyEvents from "../lib/dummy-data";
import { EventCard } from "../ui/event-card";
import { Search } from "../ui/search";
import { Dropdown } from "../ui/dropdown";
import { fetchEvents } from "@/app/lib/data";

export default  async function Home() {
    //const data = dummyEvents;
    const data = await fetchEvents();
    const dropDownOptions = [
      {value: "sortbyLocationASC", label: "Sort by Location ascending"},
      {value: "sortbyLocationDESC", label: "Sort by Location descending"},
      {value: "sortbyNameASC", label: "Sort by Name ascending"},
      {value: "sortbyNameDESC", label: "Sort by Name descending"},
    ]

    return (
      <main className="flex min-h-screen flex-col p-6">
        <Search />
        <Dropdown label="Filter events" options={dropDownOptions}  />
     {data.map((eventInfo, index) => {
    return (
     <EventCard key={index} eventInfo={eventInfo} />
    )
    })}
    <Link href={"/dashboard/event/create"}>Create</Link>
      </main>
    );
  }

  function sort(value: string) {
    return value;
  }


