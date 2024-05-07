// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import { useToast } from '@/composables/useToast';

// default layout and download page (landing)
import AdminLayout from './layouts/AdminLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import DownloadPage from './pages/DownloadPage.vue';
import TopUpCenterPage from './pages/dashboard/TopUpCenterPage.vue';
import { useRouterStore } from './stores/router.state';
import SimpleLayout from './layouts/SimpleLayout.vue';
import MobileLayoutVue from './layouts/MobileLayout.vue';

const routes = [
  {
    path: '/',
    component: DownloadPage,
  },
  {
    path: '/mobile',
    component: MobileLayoutVue,
    children: [
      { path: 'topup', component: () => import('./pages/mobile/MobileTopup.vue') },
      { path: 'checkout', component: () => import('./pages/mobile/MobileCheckout.vue') },
    ],
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
      { path: 'verify', component: () => import('./pages/auth/verifyCodePage.vue') },
      { path: 'success', component: () => import('./pages/auth/EmailMessagePage.vue') },
    ],
  },
  {
    path: '/account',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'Overview', component: () => import('./pages/dashboard/OverviewPage.vue') },
      {
        path: 'top-up-center',
        component: TopUpCenterPage,
        children: [
          {
            path: 'new',
            name: 'Top-up center',
            component: () => import('./pages/dashboard/topup/TopupSection.vue'),
          },
          {
            path: 'history',
            name: 'Order history',
            component: () => import('./pages/dashboard/topup/OrderHistory.vue'),
          },
        ],
      },
      {
        path: 'planning-center',
        name: 'Planning center',
        component: () => import('./pages/dashboard/PlanningCenter.vue'),
      },
      {
        path: 'managment',
        name: 'Managment board',
        component: () => import('./pages/dashboard/ManagmentPage.vue'),
      },
      {
        path: 'marketing',
        name: 'Marketing center',
        component: () => import('./pages/dashboard/MarketingCenter.vue'),
      },
      { path: 'faq', name: 'FAQs', component: () => import('./pages/dashboard/FaqPage.vue') },
    ],
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: SimpleLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Checkout',
        component: () => import('./pages/checkout/CheckoutPage.vue'),
      },
      {
        path: 'success',
        name: 'Payment successfull',
        component: () => import('./pages/checkout/PaymentSuccess.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  const { token } = useAuth();
  const { showErrorMsg } = useToast();

  if (to.meta.requiresAuth && !token.value) {
    showErrorMsg('Something wrong, Your session expired kindly login again');
    next('/auth/signin');
  } else {
    next();
  }
});

router.afterEach(to => {
  const routerStore = useRouterStore();
  routerStore.setCurrentPageName(to.name);
  routerStore.handleCloseSidebar();
});

export default router;
