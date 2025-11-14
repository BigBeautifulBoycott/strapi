// bigly-strapi/src/admin/app.tsx
import type { StrapiApp } from '@strapi/strapi/admin';
import {
  setPluginConfig,
  defaultHtmlPreset,
  defaultMarkdownPreset,
  defaultTheme,
} from '@_sh/strapi-plugin-ckeditor';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
         'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  // Run CKEditor before bootstrap
    register(app: StrapiApp) {
      setPluginConfig({
        presets: [defaultHtmlPreset, defaultMarkdownPreset],
        theme: defaultTheme,
      });
    },

    bootstrap(app: StrapiApp) {
      console.log(app);
    },
  };
