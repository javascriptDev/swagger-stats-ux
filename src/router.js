import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import Summary from './views/summary.vue';
import Rates from './views/rates.vue';
import Api from './views/api.vue';
import ApiOp from './views/apiop.vue';
import ApiResponses from './views/apiresponses.vue';
import Requests from './views/requests.vue';
import Errors from './views/errors.vue';
import LastErrors from './views/lasterrors.vue';
import LongestRequests from './views/longestrequests.vue';
import Payload from './views/payload.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'summary',
          component: Summary
        },
        {
          path: '/rates',
          name: 'rates',
          component: Rates
        },
        {
          path: '/requests',
          name: 'requests',
          component: Requests
        },
        {
          path: '/api',
          name: 'api',
          component: Api
        },
        {
          path: '/apiop',
          name: 'apiop',
          component: ApiOp
        },
        {
          path: '/apiresponses',
          name: 'apiresponses',
          component: ApiResponses
        },
        {
          path: '/lasterrors',
          name: 'lasterrors',
          component: LastErrors
        },
        {
          path: '/longestrequests',
          name: 'longestrequests',
          component: LongestRequests
        },
        {
          path: '/payload',
          name: 'payload',
          component: Payload
        },
        {
          path: '/errors',
          name: 'errors',
          component: Errors
        }
      ]
    }
  ]
});
