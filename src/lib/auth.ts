import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import { db } from '@/db';
import * as schema from '@/db/schema';
import { resend } from './resend';

export const auth = betterAuth({
  appName: 'aigenda',
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      ...schema,
    },
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      console.log('Sending verification email to:', user.email, url);
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: user.email,
        subject: 'Email Verification',
        html: `<p>Hi ${user.name},</p>
<p>Please verify your email by clicking the link below:</p>
<p><a href="${url}">Verify Email</a></p>`,
      });
    },
  },
});
