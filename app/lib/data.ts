import {QueryResult, sql} from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {Event} from "@/app/lib/definitions";



export async function fetchEvents(query?: string) {
    noStore();
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
