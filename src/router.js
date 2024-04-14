// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// default layout and download page (landing)
import AdminLayout from './layouts/AdminLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import DownloadPage from './pages/DownloadPage.vue';

const routes = [
  {
    path: '/',
    component: DownloadPage,
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'signin', component: () => import('./pages/auth/SigninPage.vue') },
      { path: 'signup', component: () => import('./pages/auth/SignupPage.vue') },
      { path: 'forget-password', component: () => import('./pages/auth/ForgetPwdPage.vue') },
      { path: 'reset-password', component: () => import('./pages/auth/ResetPwdPage.vue') },
      { path: 'confirm-signin', component: () => import('./pages/auth/confirmSigninPage.vue') },
      { path: 'success', component: () => import('./pages/auth/EmailMessagePage.vue') },
    ],
  },
  {
    path: '/account',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'top-up-center', component: () => import('./pages/dashboard/TopUpCenterPage.vue') },
      { path: 'planning-center', component: () => import('./pages/dashboard/PlanningCenter.vue') },
      { path: 'managment', component: () => import('./pages/dashboard/ManagmentPage.vue') },
      { path: 'marketing', component: () => import('./pages/dashboard/MarketingCenter.vue') },
      { path: 'faq', component: () => import('./pages/dashboard/FaqPage.vue') },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
