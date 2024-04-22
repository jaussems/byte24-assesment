'use server';

import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type State = {
    errors?: {
        name?: string[];
        description?: string[];
        location?: string[];
        date?: string[];
        time?: string[];
    };
    message?: string;
};

const eventFormSchema = z.object({
    id:          z.string(),
    updated_at:  z.date(),
    name:        z.string({
            invalid_type_error: 'Please enter a name for the event.'
    }),
    description: z.string({
            invalid_type_error: 'Please enter a description.'
    }),
    location:    z.string({
            invalid_type_error: 'Please enter a location.'
    }),
    date:        z.string({
            invalid_type_error: 'Please enter a location for the event.'
    }
    ),
    time:        z.string({
            invalid_type_error: 'Please enter a time for the event.'
    }
    ),
    published:   z.boolean()
})


const CreateEvent = eventFormSchema.omit({});
export async function createEvent(prevState: State ,formData: FormData) {
    const validatedFields = CreateEvent.safeParse({
        id: uuidv4(),
        updated_at: new Date(Date.now()),
        name: formData.get('name'),
        description: formData.get('description'),
        location: formData.get('location'),
        date: formData.get('date'),
        time: formData.get('time'),
        published: true
    })

    console.log(`Validate Fields: ${validatedFields}`)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing some files, failed to create an Event.',
        };
    }

    const { id, updated_at, name, description, location, date, time, published} = validatedFields.data
    // @ts-ignore

    try {
        await sql`
        INSERT INTO events (id, updated_at, name, description, location, date, time, published)
        VALUES (${id}, ${updated_at}, ${name}, ${description}, ${location}, ${date}, ${time}, ${published})
        `;
    } catch(error) {
        return {
            message: 'Database Error: Failed to Create an Event.',
        };
    }

    revalidatePath('/dashboard');
    redirect('/dashboard');
}

const UpdateInvoice = eventFormSchema.omit({});

export async function updateEvent(id: string, formData: FormData) {
    const { updated_at, name, description, location, date, time, published } = UpdateInvoice.parse({
        id: uuidv4(),
        updated_at: new Date(Date.now()),
        name: formData.get('name'),
        description: formData.get('description'),
        location: formData.get('location'),
        date: formData.get('date'),
        time: formData.get('time'),
        published: true
    });

    try {
        await sql`
    UPDATE events
    SET 
      name = ${name},
      description = ${description},
      location = ${location},
      date = ${date},
      time = ${time},
      published = ${published}
    WHERE id = ${id}
  `;
    }
    catch(e: any) {
        return {
            message: "Database Error: Failed to Update Event."
        };
    }
    revalidatePath('/dashboard');
    redirect('/dashboard');
}

export async function deleteEvent(id: string) {
    try {
        await sql`DELETE FROM events WHERE id = ${id}`
    }
    catch (error) {
        return {
            message: "Database Error: Failed to Update Event."
        };
    }
    revalidatePath('/dashboard');
}