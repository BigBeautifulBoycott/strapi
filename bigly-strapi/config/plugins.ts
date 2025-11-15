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
  // Cloudflare R2
  upload: {
    config: {
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("CF_ACCESS_KEY_ID"),
        secretAccessKey: env("CF_ACCESS_SECRET"),
        /**
         * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
         */
        endpoint: env("CF_ENDPOINT"),
        params: {
          Bucket: env("CF_BUCKET"),
        },
        /**
         * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
         * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
         * This option is required to upload files larger than 5MB, and is highly recommended to be set.
         * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
         */
        cloudflarePublicAccessUrl: env("CF_PUBLIC_ACCESS_URL"),
        /**
         * Sets if all assets should be uploaded in the root dir regardless the strapi folder.
         * It is useful because strapi sets folder names with numbers, not by user's input folder name
         * By default it is false
         */
        pool: false,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // Strapi Backup
  backup: {
    enabled: env('BACKUP_ENABLED'),
    config: {
      // ---- Scheduling ----
      cronSchedule: env('BACKUP_CRON', '0 3 * * *'),            // default: 03:00 daily
      cleanupCronSchedule: env('BACKUP_CLEANUP_CRON', '0 4 * * *'), // default: 04:00 daily

      // ---- Storage (S3 or S3-compatible) ----
      storageService: env('BACKUP_STORAGE_SERVICE', 'aws-s3'),  // aws-s3 | azure-blob-storage | gcs
      awsAccessKeyId: env('AWS_ACCESS_KEY_ID'),
      awsSecretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
      awsRegion: env('AWS_REGION'),                              // optional if awsS3Endpoint is used
      //awsS3Endpoint: env('AWS_S3_ENDPOINT'),                     // e.g., https://s3.fr-par.scw.cloud or MinIO/R2
      awsS3Bucket: env('AWS_S3_BUCKET'),

      // ---- Database dump tool selection ----
      databaseDriver: 'postgres',

      // Provide exactly one of these based on your DB client:
      pgDumpExecutable: env('PG_DUMP_PATH'),           // e.g., /usr/bin/pg_dump

      // Optional DB tool flags
      pgDumpOptions: (env('PG_DUMP_OPTIONS') || '--clean --if-exists').split(' '),


      // ---- Filenames ----
      customDatabaseBackupFilename: () =>
        `strapi-db-${new Date().toISOString().replace(/[:.]/g, '-')}.sql`,
      customUploadsBackupFilename: () =>
        `strapi-uploads-${new Date().toISOString().replace(/[:.]/g, '-')}.tar`,

      // ---- Cleanup ----
      allowCleanup: env.bool('BACKUP_ALLOW_CLEANUP', true),
      timeToKeepBackupsInSeconds: env.int('BACKUP_TTL_SECONDS', 60 * 60 * 24 * 14), // 14 days

      // ---- Error handling ----
      errorHandler: (error /*, strapi */) => {
        // Keep it simple; logs surface in your aggregator
        console.error('[backup] failed:', error?.message || error);
      },

      // ---- Toggles (if you need them) ----
      // disableDatabaseBackup: env.bool('BACKUP_DISABLE_DB', false),
      // disableUploadsBackup: env.bool('BACKUP_DISABLE_UPLOADS', false),
    },
  },
  // Publisher
  publisher: {
    enabled: true,
    config: {
      // You can customize these later with real hooks.
      hooks: {
        beforePublish: async ({ strapi, uid, entity }) => {
          // return false to block publish
        },
        afterPublish: async ({ strapi, uid, entity }) => {},
        beforeUnpublish: async ({ strapi, uid, entity }) => {
          // return false to block unpublish
        },
        afterUnpublish: async ({ strapi, uid, entity }) => {},
      },
      // examples if you want later:
      // actions: { syncFrequency: '*/1 * * * *' },
    },
  },
  // Sort Order
  'sortable-entries': {
    enabled: true,
  },

});
