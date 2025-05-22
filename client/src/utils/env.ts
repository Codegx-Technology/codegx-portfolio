import { z } from 'zod';

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
const serverSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  FOUNDER_INBOX: z.string().email().optional().default("info@codegxtechnologies.com"),
  FROM_EMAIL: z.string().email().optional().default("no-reply@astella.ai"),
  FROM_NAME: z.string().optional().default("Astella AI"),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
const clientSchema = z.object({
  SITE_URL: z.string().url().optional().default("https://codegx-technology.github.io/codegx-portfolio"),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtime,
 * so we need to destruct manually.
 *
 * @see https://github.com/vercel/next.js/issues/28774
 */
const processEnv = {
  // Server-side env vars
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  FOUNDER_INBOX: process.env.FOUNDER_INBOX,
  FROM_EMAIL: process.env.FROM_EMAIL,
  FROM_NAME: process.env.FROM_NAME,
  
  // Client-side env vars
  SITE_URL: process.env.SITE_URL,
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
      if (!isServer && !prop.startsWith('NEXT_PUBLIC_'))
        throw new Error(
          process.env.NODE_ENV === 'production'
            ? '❌ Attempted to access a server-side environment variable on the client'
            : `❌ Attempted to access server-side environment variable '${prop}' on the client`,
        );
      return target[/** @type {keyof typeof target} */ (prop)];
    },
  });
}

export { env };
