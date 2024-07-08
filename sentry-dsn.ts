const DSN = process.env.NEXT_PUBLIC_SENTRY_DSN

if (!DSN) throw 'You must create a .env file with NEXT_PUBLIC_SENTRY_DSN=<your DSN>'

export const sentryDSN = DSN
