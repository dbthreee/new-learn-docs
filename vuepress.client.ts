import { defineClientConfig } from 'vuepress/client';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // router.beforeEach((to, from, next) => {
    //   if (to.path === '/') next('/default/');
    //   else next();
    // });
  },
  setup() {},
  rootComponents: [],
});
