const sourceDir = 'docs';

const common = {
  dest: `${sourceDir}/.vuepress/dist`, // 指定 vuepress build 命令的输出目录
  temp: `${sourceDir}/.vuepress/.temp`, // 指定临时文件目录
  cache: `${sourceDir}/.vuepress/.cache`, // 指定缓存文件目录
  public: `${sourceDir}/.vuepress/public`, // 指定 Public 文件目录
  debug: false, // 是否启用 Debug 模式
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'], // 指定页面文件的 Patterns,相对于 Source 目录
  // permalinkPattern: ':year/:month/:day/:slug.html', // 指定为页面生成永久链接的 Pattern
};

export default common;
