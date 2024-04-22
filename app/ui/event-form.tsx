import { Button } from "./button";
import {createEvent} from "@/app/lib/actions";

export function EventForm() {
  return (
      <form action={createEvent} className="flex flex-col gap-4">
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
                  required
              />
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
                  required
              />
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
                  required
              />
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
                  required
              />
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
                  required
              />
          </div>
          <Button className="w-64" type="submit">Create Event</Button>
      </form>
  );
}
