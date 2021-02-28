const path = require('path')
module.exports = {
  base: '/wlinUi/',
  title: 'wlinUI - 基于vue的ui组件库',
  description: '一款基于vue的ui组件库',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: [
          '/components/button',
          // '/components/tabs',
          // '/components/input',
          // '/components/grid',
          // '/components/layout',
          // '/components/toast',
          // '/components/popover',
          // '/components/slides',
        ]
      },

    ]
  },
  scss:{
    // includePaths: [path.join(__dirname, '../../styles')]
  }
}
