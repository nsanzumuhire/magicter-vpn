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
  };
};
