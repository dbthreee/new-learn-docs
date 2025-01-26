import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 兼容 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 输入和输出路径
const docsPath = path.resolve(__dirname, 'docs'); // 文档目录
const outputDir = path.resolve(__dirname, 'data'); // 输出 JavaScript 目录
const outputFile = path.join(outputDir, 'navbar.ts'); // 生成的 navbar 配置文件

// 定义 NavbarItem 类型
type NavbarItem = {
  text: string;
  prefix: string;
  link: string;
  children: NavbarItem[];
};

/**
 * 大写首字母
 * @param str 输入字符串
 * @returns 首字母大写的字符串
 */
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 递归读取目录，生成 Navbar 配置（仅目录，排除 .vuepress）
 * @param dir 当前处理的目录路径
 * @param basePath 当前路径的前缀（用于计算 link）
 * @returns NavbarItem 数组
 */
function generateNavbar(dir: string, basePath: string = ''): NavbarItem[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const navbar: NavbarItem[] = [];

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name !== '.vuepress') {
      const fullPath = path.join(dir, entry.name);

      // 获取当前目录名称
      const prefix = entry.name;
      const text = capitalizeFirstLetter(prefix);

      // 计算 link（拼接所有路径）
      const currentLink = `${basePath}/${prefix}`.replace(/\/+/g, '/'); // 确保不会出现多个 `/`

      // 递归获取子目录内容
      const children = generateNavbar(fullPath, currentLink);

      navbar.push({
        text,
        prefix,
        link: `${currentLink}/`, // VuePress 规范的 link 形式
        children,
      });
    }
  }

  return navbar;
}

// 生成 navbar 配置
const navbarConfig = generateNavbar(docsPath);

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 生成 JavaScript 代码
const jsCode = `export default ${JSON.stringify(navbarConfig, null, 2)};`;

// 将 JavaScript 代码写入文件
fs.writeFileSync(outputFile, jsCode);

console.log('✅ Navbar 配置已生成:', outputFile);
