const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
  base: '/document/',
  title: '学以致用',
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
    logo: '/assets/img/logo.png',
    lastUpdated: '最近更新时间',
    sidebarDepth: 2,
    nav: [
      {text: 'Home', link: '/'},
      {
        text: '后端',
        ariaLabel: '后端',
        items: [
          {text: 'Java', link: '/Java/'},
          {text: 'Jenkins', link: '/Jenkins/'},
          {text: 'Maven', link: '/Maven/'},
          {text: 'Nexus', link: '/Nexus/'},
          {text: 'Mybatis', link: '/Mybatis/'},
          {text: 'MySQL', link: '/MySQL/'},
          {text: 'Nginx', link: '/Nginx/'},
          {text: 'Redis', link: '/Redis/'},
          {text: 'Spring', link: '/Spring/'},
          {text: 'SpringBoot', link: '/SpringBoot/'},
          {text: 'Tomcat', link: '/Tomcat/'},
          {text: 'CentOS', link: '/CentOS/'},
        ]
      },
      {
        text: '微服务',
        ariaLabel: '微服务',
        items: [
          {text: 'Jemter', link: '/Jmeter/'},
          {text: 'SpringCloud', link: '/SpringCloud/'},
          {text: 'Eureka', link: '/Eureka/'},
        ]
      },
      {
        text: '前端',
        ariaLabel: '后端',
        items: [
          {text: 'Vue', link: '/Vue/'},
          {text: 'ElementUI', link: '/ElementUI/'},
          {text: 'JavaScript', link: '/JavaScript/'},
        ]
      },
    ],
    sidebar: {
      '/Java/': [
        '02-安装',
        '标题3'
      ],
      '/JavaScript/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/Jenkins/': [
        '01-安装',
        '02-插件',
        '标题3'
      ],
      '/Maven/': [
        '安装',
        '标题2',
        '标题3'
      ],
      '/Mybatis/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/MySQL/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/Nexus/': [
        '01-安装',
        '标题2',
        '标题3'
      ],
      '/Nginx/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/Redis/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/Spring/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/SpringBoot/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/Tomcat/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/Vue/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/ElementUI/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/CentOS/': [
        '标题1',
        '标题2',
        '标题3'
      ],
      '/Jmeter/': [],
      '/SpringCloud/': [],
      '/Eureka/': [
        '001'
      ],
    },
  },
}