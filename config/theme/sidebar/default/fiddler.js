import { createSidebarGroup } from '../../../../utils/sidebar_utils.ts';

const sidebar_default_fiddler = createSidebarGroup({
  text: 'Fiddler',
  prefix: 'fiddler/',
  link: '/default/fiddler/',
  collapsible: true,
  children: [],
});

export default sidebar_default_fiddler;
