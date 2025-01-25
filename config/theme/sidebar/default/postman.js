import { createSidebarGroup } from '../../../../utils/sidebar_utils';

const sidebar_default_postman = createSidebarGroup({
  text: 'Postman',
  prefix: 'postman/',
  link: '/default/postman/',
  collapsible: true,
  children: [],
});

export default sidebar_default_postman;
