'use client';

import { Button } from "./button";
import {createEvent, updateEvent} from "@/app/lib/actions";
import {EventForm} from "@/app/lib/definitions";
import {useFormState} from "react-dom";

export function EventEditForm({event} : {event: EventForm}) {
    const initialState = { message: '', errors: {} };
    const updateInvoiceWithId = updateEvent.bind(null, event.id);
    const [state, dispatch] = useFormState(createEvent, initialState, )

    return (
        <form action={updateInvoiceWithId} className="flex flex-col gap-4">
            <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="name"
            >
                Event name:
            </label>
            <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter the event name"
                    defaultValue=""
                    aria-describedby="name-error"
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.name &&
                        state.errors.name.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
            </div>
            <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="description"
            >
                Event description:
            </label>
            <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Enter the description of the event"
                    aria-describedby="description-error"
                />
                <div id="description-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.description &&
                        state.errors.description.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
            </div>
            <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="location"
            >
                Event location:
            </label>
            <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="location"
                    type="text"
                    name="location"
                    placeholder="Enter the location of the event"
                    aria-describedby="location-error"
                />
                <div id="location-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.location &&
                        state.errors.location.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
            </div>
            <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="date"
            >
                Event date:
            </label>
            <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="date"
                    type="text"
                    name="date"
                    placeholder="Enter the date of the event"
                    aria-describedby="date-error"
                />
                <div id="date-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.date &&
                        state.errors.date.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
            </div>
            <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="time"
            >
                Event time:
            </label>
            <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="time"
                    type="text"
                    name="time"
                    placeholder="Enter the time of the event"
                    aria-describedby="time-error"
                />
                <div id="date-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.time &&
                        state.errors.time.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
            </div>
            <Button className="w-64" type="submit">Edit Event</Button>
        </form>
    );
}
