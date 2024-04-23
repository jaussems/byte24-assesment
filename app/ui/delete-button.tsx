import {deleteEvent} from "@/app/lib/actions";

export function DeleteButton({id}: {id?: string}) {
    const deleteEventId = deleteEvent.bind(null, id ?? '');
    return (
        <form action={deleteEventId}>
            <button type="submit" className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400"> Delete</button>
        </form>
    )
}