import navbar from './navbar/navbar'
import sidebar from './sidebar/sidebar';

const locale = {
  colorMode: 'auto', // 默认颜色模式
  colorModeSwitch: true, // 是否启用切换颜色模式的功能
  externalLinkIcon: true, // 是否在外部链接上显示外部链接图标
  home: '/', // 首页的路径, 导航栏中 Logo 的链接, 404 页面的 返回首页 链接
  navbar: navbar, // 导航栏配置。设置为 false 可以禁用导航栏
  logo: '/images/dog-fish.png', // 文件路径, Lo/go 图片的 URL, Logo 图片将会显示在导航栏的左端
  logoDark: '/images/dog-fish.png', // 在夜间模式中使用的 Logo 图片的 URL
  logoAlt: null, // 指定 Logo 图片的替代文字, 当未指定时，将默认与站点标题相同
  repo: 'https://github.com/dbthreee/new-learn-docs', // 项目仓库的 URL
  sidebar: sidebar, // 侧边栏配置
  sidebarDepth: 3, // 设置根据页面标题自动生成的侧边栏的最大深度
  editLink: true, // 是否启用 编辑此页 链接
  editLinkPattern: undefined, // 编辑此页 链接的 Pattern
  docsRepo: undefined, // 文档源文件的仓库 URL, 它将会用于生成 编辑此页 的链接
  docsBranch: 'main', // 文档源文件的仓库分支, 它将会用于生成 编辑此页 的链接
  docsDir: '', // 文档源文件存放在仓库中的目录名, 它将会用于生成 编辑此页 的链接
  lastUpdated: true, // 是否启用 最近更新时间戳
  contributors: true, // 是否启用 贡献者列表
};

export default locale;
