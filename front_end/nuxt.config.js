export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "BlogTeam",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "crossorigin",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Prata&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
        integrity: "sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer",
      },
    ],
},

// Global CSS: https://go.nuxtjs.dev/config-css
css: [
  "ant-design-vue/dist/antd.css",
  "~static/css/style.css",
],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/antd-ui",
    { src: "./plugins/vue-carousel.js", mode: "client" },
  ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

      // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
      buildModules: [
        '@nuxtjs/fontawesome',
      ],

        // Modules: https://go.nuxtjs.dev/config-modules
        modules: [],

          // Build Configuration: https://go.nuxtjs.dev/config-build
          build: { },
};
