import { defaultTheme } from '@vuepress/theme-default';
import base from '../theme/base';
import locale from '../theme/locale';

const theme = {
  theme: defaultTheme({
    ...base,
    ...locale,
  }),
};

export default theme;
