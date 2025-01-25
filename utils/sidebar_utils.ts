import { SidebarGroupOptions, SidebarObjectOptions, SidebarArrayOptions } from '@vuepress/theme-default';

/**
 * 建立页面（含孩子）
 */
export function createSidebarGroup(sidebarGroup: SidebarGroupOptions) {
    return {...sidebarGroup}
}

/**
 * 建立页面组
 */
export function createSidebarArray(sidebarArray: SidebarArrayOptions) {
    return [...sidebarArray]
}

/**
 * 通过 key 来定义 prefix
 */
export function createSidebarObject(sidebarObject: SidebarObjectOptions) {}
