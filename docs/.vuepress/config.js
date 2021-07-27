const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
  base: '/document/',
  title: 'Java学习',
  description: 'Just playing around',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
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
      {text: 'Home', link: '/'},
      {
        text: '后端',
        ariaLabel: '后端',
        items: [
          {text: 'Java', link: '/Java/'}
        ]
      },
      {
        text: '前端',
        ariaLabel: '后端',
        items: [
          {text: 'Vue', link: '/Vue/'}
        ]
      },
      {text: 'Maven', link: '/Maven/'},
    ],
    sidebar: {
      '/Java/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/Vue/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/Maven/': [
        '标题1',
        '标题2',
        '标题3'
      ],
    },
  },
}