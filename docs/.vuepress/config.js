const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
  title: 'Java学习',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '最近更新时间',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Java', link: '/java/' },
      { text: 'Maven', link: '/maven/' },
      { text: 'Vue', link: '/vue/' },
    ],
    sidebar: {
      '/java/': [
        'aaa',
        'bbb',
        'ccc'
      ],
      '/vue/': [
        'aaa',
        'bbb',
        'ccc'
      ],
      '/maven/': [
        'aaa',
        'bbb',
        'ccc'
      ],
    },
  },
}