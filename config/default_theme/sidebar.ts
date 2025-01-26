import { SidebarArrayOptions, SidebarItemOptions } from '@vuepress/theme-default';

const sidebar_default: SidebarItemOptions = {
  text: 'Default',
  prefix: '/default/',
  link: '/default/',
  collapsible: true,
  children: [],
};

const sidebar_default_tools_fiddler: SidebarItemOptions = {
  text: 'Fiddler',
  prefix: 'fiddler/',
  link: '/default/tools/fiddler/',
  collapsible: true,
  children: [],
};

const sidebar_default_tools_postman: SidebarItemOptions = {
  text: 'Postman',
  prefix: 'postman/',
  link: '/default/tools/postman/',
  collapsible: true,
  children: [],
};

const sidebar_default_tools: SidebarItemOptions = {
  text: 'Tools',
  prefix: '/default/tools/',
  link: '/default/tools/',
  collapsible: true,
  children: [sidebar_default_tools_fiddler, sidebar_default_tools_postman],
};

const sidebar: SidebarArrayOptions = [sidebar_default, sidebar_default_tools];

// export default sidebar;

import temp_s from '../../data/sidebar';
export default temp_s;
