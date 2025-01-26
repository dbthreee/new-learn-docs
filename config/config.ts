import _SiteData from './user_config/_SiteData';
import _AppConfigCommon from './user_config/_AppConfigCommon';
import _AppConfigDev from './user_config/_AppConfigDev';
import _AppConfigBuild from './user_config/_AppConfigBuild';
import _PluginConfig from './user_config/_PluginConfig';

import { UserConfig } from 'vuepress';

const _UserConfig: UserConfig = {
  ..._SiteData,
  ..._AppConfigCommon,
  ..._AppConfigDev,
  ..._AppConfigBuild,
  plugins: _PluginConfig,
};

export { _UserConfig };
