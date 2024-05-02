let pdf = {};
if (process.env.PDF_MODE && process.env.PDF_MODE == true) {
  pdf = require('./config.pdf');
}

const config = {
  title: "Đỗ Đình Thy Sơn",
  description: "Software engineer",
  head: [
    ['link', { href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:600i&amp;subset=vietnamese', rel: 'stylesheet' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/Portfolio' },
      { text: 'Get a quote', link: '/Quote' },
      { text: 'Blog', link: '/category/' },
      { text: 'Repo', link: 'https://github.com/doraeminemon/doraeminemon.github.io' },
    ],
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
  },
  plugins: [
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/fonts',
    },
    [
      'container',
      {
        type: 'contacts',
        before: info => `<Contacts>`,
        after: `</Contacts>`
      }
    ],
    [
      '@vuepress/blog',
      {
        postsDir: 'blog-posts',
        categoryIndexPageUrl: "/category/",
        tagIndexpageUrl: "/tag/",
        permalink: "/:year/:month/:day/:slug"
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': "UA-144171621-1",
      },
    ],
  ],
  evergreen: true,
}

module.exports = {
  ...config,
  ...pdf,
  theme: 'vuepress-theme-minhon'
}