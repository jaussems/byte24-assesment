import dummyEvents from "../lib/dummy-data";
import { EventCard } from "../ui/event-card";

export default function Home() {
    const data = dummyEvents;
    
    return (
      <main className="flex min-h-screen flex-col p-6">
     {dummyEvents.map((eventInfo, index) => {
    return (
     <EventCard key={index} eventInfo={eventInfo} />
    )
    })}
      </main>
    );
  }



