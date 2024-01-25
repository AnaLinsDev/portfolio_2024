import pt_locale from './locales/pt.json'
import en_locale from './locales/en.json'

export default {
  ssr: false,

  target: "static",

  head: {
    titleTemplate: "Ana Júlia Lins",
    title: "portfolio_2024",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image", href: "favicon.png" }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/i18n"],

  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: en_locale,
        pt: pt_locale,
      },
    },
  },

  vuetify: {},

  build: {},
};
