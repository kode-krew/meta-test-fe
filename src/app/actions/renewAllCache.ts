'use server';

import { revalidatePath } from 'next/cache';

export async function renewAllCache() {
    return revalidatePath('/');
}
