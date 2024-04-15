// import { useApiStore } from '../stores/apiStore';
import { useConfig } from './useConfig';

export const useAPI = () => {
  //   const apiStore = useApiStore();
  const config = useConfig();

  const callAPI = async (method, url, data = null) => {
    // apiStore.isLoading = true;
    // apiStore.error = null;

    try {
      const response = await fetch(config.API_URL + url, {
        method,
        body: data ? JSON.stringify({ ...data, device_id: config.deviceId }) : null,
        headers: config.headers,
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      return await response.json();
    } finally {
      // catch (error) {
      //   throw error; // Allow components to handle errors specifically
      // }
      //   apiStore.isLoading = false;
    }
  };

  return {
    // start of  API methods for authentication
    signIn: data => callAPI('POST', '/login', data),
    signUp: data => callAPI('POST', '/createUser', data),
    veriyEmail: data => callAPI('POST', '/veriyEmail', data),
    forgotPassword: data => callAPI('POST', '/forgot-password', data),
    resetPassword: data => callAPI('POST', '/reset-password', data),
    logout: () => callAPI('POST', '/logout'),
    // end of authentication

    // top-up order history
    userPackages: query => callAPI('GET', '/user-type-packages' + query),

    // faqs
    getFaqs: () => callAPI('GET', '/faqs'),
  };
};
