import {sql} from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {sortEnums} from "@/app/lib/enums";


export async function fetchEvents(query?: string, filter?: string) {
    noStore();

    const orderBy = (() => {
        switch (filter) {
            case sortEnums.SORTBYLOCATIONASC:
                return `events.location ASC`;
            case sortEnums.SORTBYLOCATIONDESC:
                return `events.location DESC`;
            case sortEnums.SORTBYNAMEASC:
                return `ORDER BY events.name ASC`;
            case sortEnums.SORTBYNAMEDESC:
                return `events.name DESC`;
            default:
                return `events.name DESC`;
        }
    })();

    try {
        console.log('Fetching event data...');
        await new Promise((resolve) => setTimeout(resolve, 3000));
        let data = await sql<Event>`
      
        SELECT
            events.id,
            events.name,
            events.description,
            events.location,
            events.date,
            events.time,
            events.published
        FROM events
        WHERE
        events.name LIKE ${`%${query}%`} OR
        events.location LIKE ${`%${query}%`}  
        ORDER BY ${orderBy}
        `;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch event data.');
    }
}


export async  function fetchEventById(eventId: string) {
    noStore();
    try {
        console.log('Fetching single event data...');
        const data = await sql<Event>`
            SELECT
              *
            FROM events
            WHERE events.id = ${eventId};
        `;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch single event data.');
    }
}

export async  function fetchUserById(userId: string) {
    noStore();
    try {
        console.log('Fetching event data...');
        const data = await sql<Event>`
            SELECT
              *
            FROM users
            WHERE users.id = ${userId};
        `;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch event data.');
    }
}

export const dropDownOptions = [
    {value : '', label: "---"},
    {value: "sortbyLocationASC", label: "Sort by Location ascending"},
    {value: "sortbyLocationDESC", label: "Sort by Location descending"},
    {value: "sortbyNameASC", label: "Sort by Name ascending"},
    {value: "sortbyNameDESC", label: "Sort by Name descending"},
]
