import {fetchEvents} from "@/app/lib/data";
import {EventCard} from "@/app/ui/event-card";

export default async function Events({
    query,
    filter,
    currentPage
                                     } : {
    query: string,
    filter: string,
    currentPage: number
}) {
    const events = await fetchEvents(query, filter);
    return(
        <div className="mt-6 flow-root">
            {events.map((eventInfo, index) => {
                    return (
                            <EventCard key={index} eventInfo={eventInfo} />
                        )
                    })}
        </div>
    )
}