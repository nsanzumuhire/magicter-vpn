// import { useApiStore } from '../stores/apiStore';
import { useConfig } from './useConfig';

export const useAPI = () => {
  //   const apiStore = useApiStore();
  const config = useConfig();

  const callAPI = async (method, url, data = null) => {
    try {
      const response = await fetch(config.API_URL + url, {
        method,
        body: data ? JSON.stringify(data) : null,
        headers: config.headers,
      });
      return await response.json();
    } finally {
      //   apiStore.isLoading = false;
    }
  };

  return {
    // start of  API methods for authentication
    signIn: data => callAPI('POST', '/login', data),
    signUp: data => callAPI('POST', '/createUser', data),
    veriyEmail: data => callAPI('POST', '/verifyEmail', data),
    forgotPassword: data => callAPI('POST', '/forgot-password', data),
    resetPassword: data => callAPI('POST', '/reset-password', data),
    logout: () => callAPI('POST', '/logout'),
    // end of authentication

    // top-up order history
    userPackages: query => callAPI('GET', '/user-type-packages?user_type=' + query),
    orderHistory: () => callAPI('GET', '/order-history'),

    // faqs
    getFaqs: () => callAPI('GET', '/faqs'),
    getdefaultData: query => callAPI('GET', '/defaultData?type=' + query),

    //! Global Ali pay APIs
    // request the server to to get paymentSessionData
    aliPayRequestPaymentSessionData: data => callAPI('POST', '/payment-alipay', data),

    //! Stripe web intent (request client secret)
    stripeRequestClientSecret: data => callAPI('POST', '/stripe-web-payment-intent', data),

    //! paypal payments
    paypalCreateOrder: data => callAPI('POST', '/create-paypal-order', data),
    paypalApproveOrder: data => callAPI('POST', '/paypalPayment', data),

    //! payment success [USER]
    userPaymentSuccess: data => callAPI('POST', '/user-subscription-success', data),
    userTypePaymentSuccess: data =>
      callAPI('POST', '/user-type-package-subscription-success', data),

    updateUserType: data => callAPI('POST', '/update-user-type', data),

    usdtPaymentSuccess: data => callAPI('POST', 'payment-success-usdt', data),
  };
};
