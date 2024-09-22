'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateHomeVerify() {
    return revalidatePath('/');
}
