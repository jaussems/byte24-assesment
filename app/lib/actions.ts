'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';


const eventFormSchema = z.object({
    id:          z.string(),
    name:        z.string(),
    description: z.string(),
    location:    z.string(),
    date:        z.string(),
    time:        z.string(),
    published:   z.boolean()
})

const CreateEvent = eventFormSchema.omit({id: true});
export async function createEvent(formData: FormData) {
    const { name, description, location, date, time, published} = CreateEvent.parse({
        name: formData.get('name'),
        description: formData.get('description'),
        location: formData.get('location'),
        date: formData.get('date'),
        time: formData.get('time'),
        published: true
    })

    await sql`
    INSERT INTO events (name, description, location, date, time, published)
    VALUES (${name}, ${description}, ${location}, ${date}, ${time}, ${published})
  `;
    // Test it out:
}