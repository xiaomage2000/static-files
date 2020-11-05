// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm783164825-f1500f2b44408fa1b0685a1f',//main
    'm783164881-bef5a6635e49d87fa104179a',//blog
    'm783164885-b94c3b94fcc051f5af51b9e8',//bbx
    'm786305202-d55555945ffaf60a1c800a18',//akko
    'm786305205-a5229a608c92b6f29d4e4b2d',//rn

  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 75,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://xmgspace.me'
    },
    {
      text: 'Xiaomage`s Blog',
      url: 'https://blog.xmgspace.me'
    }
  ]
};
