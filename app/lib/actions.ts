'use server';

import { z } from 'zod';

const eventFormSchema = z.object({
    id:          z.string(),
    name:        z.string(),
    description: z.string(),
    location:    z.string(),
    date:        z.string(),
    time:        z.string(),
    published:   z.boolean()
})

const CreateEvent = eventFormSchema.omit({id: true, date: true});
export async function createEvent(formData: FormData) {
    const rawFormData = {
        name: formData.get('name'),
        description: formData.get('description'),
        location: formData.get('location'),
        date: formData.get('date'),
        time: formData.get('time')
    };
    // Test it out:
    console.log(rawFormData);
}