'use client';

import dummyEvents from '@/app/lib/dummy-data';
import { EventCard } from '@/app/ui/event-card';
import { useParams } from 'next/navigation'
export default function Page() {
    const params = useParams<{id: string}>()
    const event = dummyEvents.find((event) => event.id === params.id);
    return  (
    <div>
        <h1>Event page  {params.id} </h1>
    <EventCard eventInfo={event} />
    </div>
    )
}