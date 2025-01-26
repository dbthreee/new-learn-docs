import { NavbarOptions, NavbarGroupOptions, NavbarLinkOptions, NavGroup } from '@vuepress/theme-default';

type NavBarArrray = Array<NavbarLinkOptions | NavGroup<NavbarLinkOptions>>;

const navbar_default_postman: NavbarLinkOptions = {
  text: 'Postman',
  link: 'postman/',
};

const navbar_default_fiddler: NavbarLinkOptions = {
  text: 'Fiddler',
  link: 'fiddler/',
};

const navbar_default_tools: NavbarGroupOptions = {
  text: '工具',
  link: '/default/tools/',
  prefix: 'tools/',
  children: [navbar_default_fiddler, navbar_default_postman] as NavBarArrray,
};

const navbar_default: NavbarGroupOptions = {
  text: '文档',
  link: '/default/',
  prefix: '/default/',
  children: [navbar_default_tools] as NavBarArrray,
};

const navbar: NavbarOptions = [navbar_default];

export default navbar;
