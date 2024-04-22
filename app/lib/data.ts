import {QueryResult, sql} from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {Event} from "@/app/lib/definitions";



export async function fetchEvents(sort?: string) {
    noStore();
    try {
        console.log('Fetching event data...');
        await new Promise((resolve) => setTimeout(resolve, 3000));
        let data = await sql<Event>`SELECT * FROM events`;
        if(sort)
        {
            switch(sort)
            {
                case sortEnums.SORTBYLOCATIONASC :
                    data =  await sql<Event>`SELECT * FROM events ORDER BY events.location ASC`;
                    break;
                case sortEnums.SORTBYLOCATIONDESC :
                    data =  await sql<Event>`SELECT * FROM events ORDER BY events.location DESC`;
                    break;
                case sortEnums.SORTBYNAMEASC :
                    data =  await sql<Event>`SELECT * FROM events ORDER BY events.name ASC`;
                    break;
                case sortEnums.SORTBYNAMEDESC :
                    data =  await sql<Event>`SELECT * FROM events ORDER BY events.name DESC`;
                    break;
            }
        }

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
