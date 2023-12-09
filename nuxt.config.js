export default {
  server: {
    host: "0.0.0.0",
  },

  target: 'static',

  head: {
    link: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@500;600;700&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" }
    ],

    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },

  plugins: [
    { src: '~plugins/sheet.js', mode: "client" }
  ],

  components: [
    '~/components',
    '~/components/Kit',
    '~/components/Last',
    '~/components/Index',
    '~/components/Questions'
  ],

  css: ["@/assets/scss/main.scss"],
}