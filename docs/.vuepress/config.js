module.exports = {
  title: 'Java学习',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Java', link: '/java/' },
      { text: 'Maven', link: '/maven/' },
      { text: 'Vue', link: '/vue/' },
    ],
    sidebar: {
      '/java/':[
        'aaa',
        'bbb',
        'ccc'
      ],
      '/vue/':[
        'aaa',
        'bbb',
        'ccc'
      ],
      '/maven/':[
        'aaa',
        'bbb',
        'ccc'
      ],
    },
},
}