import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['kr', 'en'];

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale)) notFound();
    return {
        messages: (await import(`../messages/kr.json`)).default,
    };
});
