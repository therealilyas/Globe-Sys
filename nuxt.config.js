import { i18n } from "./configurations/i18n";

export default {
  mode: "universal",
  server: {
    port: 5200, // default: 3000
    host: "0.0.0.0", // default: localhost,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "ru",
    },
    title: "Globe Sys Support",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1.0, minimum-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Globe Sys Support repair spare part atm pos-terminal infokiosk ремонт запчасть банкомат инфокиоск pos-терминала",
      },
      {
        hid: "key",
        name: "key",
        content: "Модернизация терминалов – верная стратегия бизнеса",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "image",
        name: "image",
        content: "favicon.ico",
      },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:site", name: "twitter:site", content: "@nuxt_js" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://gsys.uz",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Модернизация терминалов – верная стратегия бизнеса",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Globe Sys Support repair spare part atm pos-terminal infokiosk ремонт запчасть банкомат инфокиоск pos-терминала",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "favicon.ico",
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: "og:url", property: "og:site_url", content: "https://gsys.uz" },
      // {hid: "og:site_name", property: "og:site_name", content: "Banking-technology.uz"},
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Globe Sys Support",
      },
      { hid: "og:type", property: "og:type", content: "website" },

      {
        hid: "og:url",
        property: "og:url",
        content: "https://gsys.uz",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Модернизация терминалов – верная стратегия бизнеса",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Globe Sys Support repair spare part atm pos-terminal infokiosk ремонт запчасть банкомат инфокиоск pos-терминала",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "favicon.ico",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "favicon.ico",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content:
          "Globe Sys Support repair spare part atm pos-terminal infokiosk ремонт запчасть банкомат инфокиоск pos-терминала",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/styles/main.scss", lang: "scss" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/axios.js", ssr: true },
    { src: "~/plugins/media/media-mixin", ssr: true },
    { src: "~/plugins/ui/lazy-load.js", ssr: true },
    { src: "~/plugins/directives/click-outside", ssr: true },
    { src: "~/plugins/vee-validate/vee-validate.js", ssr: true },
    { src: "~/plugins/ui/global", ssr: true },
    { src: "~/plugins/vue-the-mask.js", ssr: true },
    { src: "~/plugins/gmap.js", ssr: false },
  ],

  loading: "~/components/layouts/default/Loading.vue",

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    ["nuxt-i18n", i18n],
    "vue-social-sharing/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/style-resources",
    "@nuxtjs/svg",
  ],

  sitemap: {
    hostname: process.env["VUE_APP_API_BASE_URL"],
    // gzip: true,
    // exclude: ['/secret', '/admin/**'],
    // routes: [
    //   '/about',
    //   '/contact',
    //   {
    //     url: '/view/javascript-tips-tricks-n1',
    //     changefreq: 'daily',
    //     priority: 1,
    //     lastmodISO: '2017-06-30T13:30:00.000Z',
    //   },
    // ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules", /^vue2-google-maps($|\/)/],
    postcss: {
      plugins: {
        "postcss-custom-properties": false,
      },
    },
  },

  axios: {
    baseURL: "",
  },
};
