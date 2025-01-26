import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 兼容 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsPath = path.resolve(__dirname, 'docs');
const outputDir = path.resolve(__dirname, 'data');

// 确保 data 目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

/**
 * 递归获取目录结构，构造 VuePress 兼容的 sidebar
 * @param dir 当前目录路径
 * @param prefix 当前目录的前缀
 * @returns SidebarItem[]
 */
function getSidebarItems(dir: string, prefix: string): any[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  // 获取所有目录
  const folders = entries
    .filter((entry) => entry.isDirectory() && entry.name !== '.vuepress') // 过滤 `.vuepress`
    .map((entry) => entry.name);

  // 获取所有 .md 文件，去掉 `.md` 后缀
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name.replace(/\.md$/, ''))
    .filter((file) => file.toLowerCase() !== 'readme'); // 过滤掉 README.md 文件

  const children = [
    // 处理 markdown 文件
    ...markdownFiles.map((file) => file), // 直接使用文件名
    // 处理文件夹
    ...folders.map((folder) => {
      const newPrefix = `${prefix}${folder}/`; // 递归时更新前缀
      return {
        text: folder, // 目录名称
        link: `/${newPrefix}`, // 完整的目录路径作为 link
        prefix: folder, // 单词形式的 prefix
        children: getSidebarItems(path.join(dir, folder), `${newPrefix}`), // 递归子目录
        collapsible: true, // 每一层都设置为可折叠
      };
    }),
  ];

  return children;
}

// 生成 sidebar 数组
const sidebar: any[] = [];

// 获取顶层目录的所有文件和子目录
fs.readdirSync(docsPath, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== '.vuepress') // 排除 `.vuepress`
  .forEach((entry) => {
    const prefix = `${entry.name}/`; // 第一层目录使用完整前缀
    const sidebarItems = getSidebarItems(path.join(docsPath, entry.name), entry.name + '/');
    if (sidebarItems.length > 0) {
      sidebar.push({
        text: entry.name.charAt(0).toUpperCase() + entry.name.slice(1), // 将首字母大写
        link: `/${prefix}`, // 第一层的链接是完整路径
        prefix: entry.name, // 第一层的 prefix 是单词
        children: sidebarItems,
        collapsible: true, // 第一层也设置为可折叠
      });
    }
  });

// 格式化 JSON 并输出到文件
function writeFile(filename: string, data: any) {
  const filePath = path.resolve(outputDir, filename);
  fs.writeFileSync(filePath, `export default ${JSON.stringify(data, null, 2)};\n`, 'utf8');
  console.log(`✅ 生成: ${filePath}`);
}

// 写入 sidebar.ts
writeFile('sidebar.ts', sidebar);
