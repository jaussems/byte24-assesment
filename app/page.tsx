import Image from "next/image";
import { EventCard } from "./ui/event-card";
import dummyEvents from "./lib/dummy-data.js";

export default function Home() {
  const data = dummyEvents;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {dummyEvents.map((eventInfo, index) => {
        return (
         <EventCard key={index} eventInfo={eventInfo} />
        )
      })}
    </main>
  );
}
