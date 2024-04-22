import { EventCard } from '@/app/ui/event-card';
import {fetchEventById} from "@/app/lib/data";
export default async function Page({params}: {params: {id: string}}) {
    const event = await fetchEventById(params.id);

    return  (
    <div>
    <EventCard eventInfo={event[0]} />
    </div>
    )
}