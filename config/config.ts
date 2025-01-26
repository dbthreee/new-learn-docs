import _SiteData from './user_config/_SiteData';
import _AppConfigCommon from './user_config/_AppConfigCommon';
import _AppConfigDev from './user_config/_AppConfigDev';
import _AppConfigBuild from './user_config/_AppConfigBuild';

import { UserConfig } from 'vuepress';

const _UserConfig: UserConfig = {
  ..._SiteData,
  ..._AppConfigCommon,
  ..._AppConfigDev,
  ..._AppConfigBuild,
};

export { _UserConfig };
