const build = {
  shouldPreload: true, // 用来控制哪些文件是需要生成对应的 <link rel="preload"> 标签的，默认情况下，只有当前页面所需的文件会被预加载
  shouldPrefetch: true, // 来控制哪些文件是需要生成对应的 <link rel="prefetch"> 标签的，其它页面所需的文件都会被预拉取
  templateBuild: '@vuepress/client/templates/build.html', // 指定构建时使用的 HTML 模板路径
  templateBuildRenderer: 'templateRenderer', // 指定构建时使用的 HTML 模板渲染函数
};

export default build;
