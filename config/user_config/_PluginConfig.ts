import { PluginConfig } from 'vuepress';
import { gitPlugin } from '@vuepress/plugin-git';

const _PluginConfig: PluginConfig = [gitPlugin({})];

export default _PluginConfig;
