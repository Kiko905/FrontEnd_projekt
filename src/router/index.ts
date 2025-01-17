import { createRouter, createWebHistory } from 'vue-router';

// Import stránok
import HomeView from '../views/HomeView.vue';
import ArticlesView from '../views/ArticlesView.vue';
import PlansView from '../views/PlansView.vue';
import ProfileView from '../views/ProfileView.vue';
import ContactView from '../views/ContactView.vue';
import ArticleDescriptionView from '../views/ArticleDescriptionView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlesView,
  },
  {
    path: '/plans',
    name: 'Plans',
    component: PlansView,
    props: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/articles/:title',
    name: 'ArticleDescription',
    component: ArticleDescriptionView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
