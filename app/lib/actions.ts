'use server';

import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';




const eventFormSchema = z.object({
    id:          z.string(),
    updated_at:   z.date(),
    name:        z.string(),
    description: z.string(),
    location:    z.string(),
    date:        z.string(),
    time:        z.string(),
    published:   z.boolean()
})

const CreateEvent = eventFormSchema.omit({});
export async function createEvent(formData: FormData) {
    const { id, updated_at, name, description, location, date, time, published} = CreateEvent.parse({
        id: uuidv4(),
        updated_at: new Date(Date.now()),
        name: formData.get('name'),
        description: formData.get('description'),
        location: formData.get('location'),
        date: formData.get('date'),
        time: formData.get('time'),
        published: true
    })

    // @ts-ignore
    await sql`
    INSERT INTO events (id, updated_at, name, description, location, date, time, published)
    VALUES (${id}, ${updated_at}, ${name}, ${description}, ${location}, ${date}, ${time}, ${published})
  `;

    revalidatePath('/dashboard');
    redirect('/dashboard');
}