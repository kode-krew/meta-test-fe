import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['ko', 'en-US'],

    // Used when no locale matches
    defaultLocale: 'ko',
    alternateLinks: true,
    localeDetection: true,
    localePrefix: 'never',
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ko|en-US)/:path*'],
};
