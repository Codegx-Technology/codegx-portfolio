import { z } from 'zod';

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  RESEND_API_KEY: z.string().min(1),
  FOUNDER_INBOX: z.string().email().optional().default("info@codegxtechnologies.com"),
  FROM_EMAIL: z.string().email().optional().default("no-reply@astella.ai"),
  FROM_NAME: z.string().optional().default("Astella AI"),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 *
 * Note: All client-side variables must be prefixed with VITE_ to be accessible in the browser
 */
const clientSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  VITE_SITE_URL: z.string().url().optional().default("https://codegx-technology.github.io/codegx-portfolio"),
  VITE_API_BASE_URL: z.string().url().optional().default("http://localhost:5000"),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtime,
 * so we need to destruct manually.
 *
 * @see https://github.com/vercel/next.js/issues/28774
 */
const processEnv = {
  // Server-side env vars
  NODE_ENV: process.env.NODE_ENV,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  FOUNDER_INBOX: process.env.FOUNDER_INBOX,
  FROM_EMAIL: process.env.FROM_EMAIL,
  FROM_NAME: process.env.FROM_NAME,

  // Client-side env vars
  VITE_SITE_URL: import.meta.env.VITE_SITE_URL,
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
};

// Don't touch the part below
// --------------------------

/** @typedef {z.input<typeof serverSchema>} MergedInput */
/** @typedef {z.infer<typeof serverSchema>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let env = process.env;

if (!!process.env.SKIP_ENV_VALIDATION == false) {
  const isServer = typeof window === 'undefined';

  const parsed = isServer
    ? serverSchema.safeParse(processEnv) // on server we can validate all env vars
    : clientSchema.safeParse(processEnv); // on client we can only validate the ones that are exposed

  if (parsed.success === false) {
    console.error(
      '❌ Invalid environment variables:',
      parsed.error.flatten().fieldErrors,
    );
    throw new Error('Invalid environment variables');
  }

  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== 'string') return undefined;
      // Throw a descriptive error if a server-side env var is accessed on the client
      // Otherwise it would just be returning `undefined` and be annoying to debug
      if (!isServer && !prop.startsWith('VITE_'))
        throw new Error(
          process.env.NODE_ENV === 'production'
            ? '❌ Attempted to access a server-side environment variable on the client'
            : `❌ Attempted to access server-side environment variable '${prop}' on the client`,
        );
      return (target as any)[prop];
    },
  });
}

export { env };
