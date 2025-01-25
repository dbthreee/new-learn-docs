import { createSidebarGroup } from '../../../utils/sidebar_utils';
import sidebar_default_fiddler from './default/fiddler';
import sidebar_default_postman from './default/postman';

const sidebar_default = createSidebarGroup({
  text: 'Default',
  prefix: '/default/',
  link: '/default/',
  collapsible: true,
  children: [sidebar_default_fiddler, sidebar_default_postman],
});

export default sidebar_default;
