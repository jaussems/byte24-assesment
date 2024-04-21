'use client';

import Link from "next/link";
import dummyEvents from "../lib/dummy-data";
import { EventCard } from "../ui/event-card";
import { Search } from "../ui/search";
import { Dropdown } from "../ui/dropdown";
import { useState } from "react";

export default function Home() {
  let data = dummyEvents;
  const [query, setQuery] = useState('');
  const [events, setEvent] = useState(data);

  const handleSearch = (value: string) => {
    setQuery(value); 
  };

  const performSearch = () => {
   // setTimeout(() => {
    const search = [...events].filter((foundEvents) => {
      return foundEvents.eventName.toLowerCase().includes(query.toLowerCase());
    } )
    console.log(`Search : ${search}`)
    setEvent(search);
 //   }, 3000)
    console.log('Performing search with query:', query);
  };
    const dropDownOptions = [
      {value: "sortbyLocationASC", label: "Sort by Location ascending"},
      {value: "sortbyLocationDESC", label: "Sort by Location descending"},
      {value: "sortbyNameASC", label: "Sort by Name ascending"},
      {value: "sortbyNameDESC", label: "Sort by Name descending"},
    ];

    return (
      <main className="flex min-h-screen flex-col p-6">
        <Search query={query} searchFn={handleSearch} performSearch={performSearch}/>
        <Dropdown label="Filter events" options={dropDownOptions} />
     {data.map((eventInfo, index) => {
    return (
     <EventCard key={index} eventInfo={eventInfo} />
    )
    })}
    <Link href={"/dashboard/event/create"}>Create</Link>
      </main>
    );
  }



