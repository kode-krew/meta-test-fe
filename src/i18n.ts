import { getRequestConfig } from 'next-intl/server';

const locales = ['ko', 'en-US'];

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale) || locale === 'en-US') {
        return {
            messages: (await import(`../messages/en-US.json`)).default,
        };
    }
    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
