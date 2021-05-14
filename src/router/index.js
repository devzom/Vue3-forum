import { createRouter, createWebHistory } from 'vue-router';
import sourceData from '@/assets/dummyData.json';
import PageHome from '@/pages/Home';
import Forum from '@/pages/Forum';
import Category from '@/pages/Category';
import Profile from '@/pages/Profile';
import PageThreadItem from '@/components/PageThreadItem';
import NotFound from '@/pages/404';

const routes = [
  { path: '/', name: 'Home', component: PageHome },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { toTop: true, smoothScroll: true }
  },
  { path: '/profile/edit', name: 'ProfileEdit', component: Profile, props: { edit: true } },
  { path: '/forum/:id', name: 'Forum', component: Forum, props: true },
  { path: '/category/:id', name: 'Category', component: Category, props: true },
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
  routes,
  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = 'smooth';
    return scroll;
  }
});
