import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import { AppRoutes } from './app/routes';
import { HomeRoutes } from './home/routes';
import { ProfileRoutes } from './profile/routes';
import { JobsRoutes } from './jobs/routes';
import { JobRoutes } from './job/routes';
import { CreateJobRoutes } from './createJob/routes';
import { SigninRoutes } from './signin/routes';
import { WalletRoutes } from './wallet/routes';
import { SignInModalRoutes } from './signInModal/routes';
import { TestRoutes } from './test/routes';

Vue.use(VueRouter);
Vue.use(Meta);

export const router: VueRouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    ...AppRoutes,
    ...HomeRoutes,
    ...ProfileRoutes,
    ...JobsRoutes,
    ...JobRoutes,
    ...CreateJobRoutes,
    ...SigninRoutes,
    ...WalletRoutes,
    ...SignInModalRoutes,
    ...TestRoutes
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return savedPosition || { x: 0, y: 0 };
  }
});
