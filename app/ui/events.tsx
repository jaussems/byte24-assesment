import {fetchEvents} from "@/app/lib/data";
import {EventCard} from "@/app/ui/event-card";

export default async function Events({
    query,
    currentPage
                                     } : {
    query: string,
    currentPage: number
}) {
    const events = await fetchEvents(query);
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