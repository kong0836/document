const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
  base: '/document/',
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
      '/Java/': [
        'aaa',
        'bbb',
        'ccc'
      ],
      '/Vue/': [
        'aaa',
        'bbb',
        'ccc'
      ],
      '/Maven/': [
        'aaa',
        'bbb',
        'ccc'
      ],
    },
  },
}