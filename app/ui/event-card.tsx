'use client';

import Link from "next/link";

interface EventCardInterface {
    eventInfo?: {
        id: string;
        eventName: string;
        description: string;
        location: string;
        date: string;
        time: string;
    }    
}


export function EventCard(eventData: EventCardInterface ) {
    const {id, eventName, description, date, time, location} = eventData?.eventInfo || {};
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 max-w-sm">
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2">{eventName}</h1>
          <h2 className="text-gray-600 text-sm mb-2">{location}</h2>
          <h2 className="text-gray-600 text-sm mb-2">{date} - {time}</h2>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <Link className="p-6" href={`/dashboard/event/${id}`} > click here</Link>
      </div>
    )
}