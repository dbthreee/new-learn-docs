import { NavbarGroupOptions } from '@vuepress/theme-default';

/**
 * 创建单个 navbar
 * 加上 children 变为组
 */
export function createNavbarGroup(navbarGroup: NavbarGroupOptions) {
  return { ...navbarGroup };
}
