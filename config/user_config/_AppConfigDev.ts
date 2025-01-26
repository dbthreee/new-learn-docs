import { AppConfigDev } from 'vuepress';

const _AppConfigDev: AppConfigDev = {
  host: '0.0.0.0', // 指定开发服务器的主机名
  port: 8080, // 指定开发服务器的端口号
  open: false, // 是否在开发服务器启动后打开浏览器
  //   templateDev: '@vuepress/client/templates/dev.html', // 指定开发时使用的 HTML 模板
};

export default _AppConfigDev;
