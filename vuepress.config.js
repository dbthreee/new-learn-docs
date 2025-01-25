import { defineUserConfig } from 'vuepress'
import { site, theme, bundler, common, dev, build, markdown, plugin } from './config/config.base';

export default defineUserConfig({
  ...site,
  ...theme,
  ...bundler,
  ...common,
  ...dev,
  ...build,
  ...markdown,
  ...plugin,
});
