import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['kr', 'en'],

    // Used when no locale matches
    defaultLocale: 'kr',
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(kr|en)/:path*'],
};
