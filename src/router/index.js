import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import View1 from '@/components/View1';
import View2 from '@/components/View2';
import View12 from '@/components/View12';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/view1',
      name: 'View1',
      component: View1,
      children: [
        {
          path: 'view12',
          name: 'View12',
          component: View12,
        },
        {
          path: 'view1view2',
          name: 'view1view2',
          component: View2,
        },
      ],
    },
    {
      path: '/view2',
      name: 'View2',
      component: View2,
    },

  ],
});
