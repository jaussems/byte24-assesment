import {EventEditForm} from "@/app/ui/event-edit-form";
import {fetchEventById} from "@/app/lib/data";

export default async function Page({params} : {params: {id: string}}) {
    const id = params.id;
    const event = await fetchEventById(id);
    return (
        <main>
            <EventEditForm event={event[0]}></EventEditForm>
        </main>
    )
}