import PageHome from '@/pages/PageHome';
import PageThreadItem from '@/components/PageThreadItem';
import NotFound from '@/pages/404';
import { createRouter, createWebHistory } from 'vue-router';
import sourceData from '@/assets/dummyData.json';

const routes = [
  { path: '/', name: 'Home', component: PageHome },
  {
    path: '/thread/:id',
    name: 'Thread',
    component: PageThreadItem,
    props: true,
    beforeRouteEnter(to, from, next) {
      // check if thereadById exists
      const threadExists = sourceData.find((thread) => thread.id === to.params.id);
      if (threadExists) {
        return next();
      }
      // if not redirect to 404
      return next({
        name: '404',
        params: { pathMatch: to.path.substring(1).split('/') },
        query: to.hash
      });
    }
  },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFound }
];
export default createRouter({
  history: createWebHistory(),
  routes
});
