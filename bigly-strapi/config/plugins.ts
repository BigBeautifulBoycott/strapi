// path: bigly-strapi/config/plugins.ts
export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'localhost'),
        port: env.int('SMTP_PORT', 1025),
        secure: env.bool('SMTP_SECURE', false), // true for 465
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        ignoreTLS: env.bool('SMTP_IGNORE_TLS', false),
        requireTLS: env.bool('SMTP_REQUIRE_TLS', false),
        tls: {
          rejectUnauthorized: env.bool('SMTP_TLS_REJECT_UNAUTHORIZED', true),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_DEFAULT_FROM', 'no-reply@example.com'),
        defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO', 'no-reply@example.com'),
      },
      // Optional rate limit (Strapi’s built-in)
      // ratelimit: { enabled: true, interval: '5', max: 5, delayAfter: 1, timeWait: 1 },
    },
  },
});