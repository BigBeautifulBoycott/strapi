// bigly-strapi/config/middlewares.ts
export default ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            env('CF_PUBLIC_ACCESS_URL')
              ? env('CF_PUBLIC_ACCESS_URL').replace(/^https?:\/\//, '')
              : '',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            env('CF_PUBLIC_ACCESS_URL')
              ? env('CF_PUBLIC_ACCESS_URL').replace(/^https?:\/\//, '')
              : '',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      // request body limits
      formLimit: '200mb',
      jsonLimit: '200mb',
      textLimit: '200mb',

      // file uploads (multipart/form-data)
      multipart: true,
      formidable: {
        // bytes (200 MB)
        maxFileSize: 200 * 1024 * 1024,
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
