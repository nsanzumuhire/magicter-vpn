import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAPI } from './useAPI';

export function useAuth() {
  const route = useRoute();

  const { token: token__ } = route?.query ?? { token: null };

  const router = useRouter();
  const token = ref(localStorage.getItem('token') || token__);
  const user = ref(localStorage.getItem('user'));
  const deviceId = ref(12343444);
  const isMobile = !!token__;

  const setToken = newToken => {
    token.value = newToken;
    localStorage.setItem('token', newToken);
  };

  const removeToken = () => {
    token.value = null;
    localStorage.removeItem('token');
  };

  const getStorage = name => {
    return ref(localStorage.getItem(name));
  };

  const setStorage = (name, data) => {
    localStorage.setItem(`${name}`, data);
  };

  const removeStorage = name => {
    localStorage.removeItem(`${name}`);
  };

  const logout = () => {
    const { logout } = useAPI();
    logout();
    removeToken();
    removeStorage('user');
    removeStorage('email');
    router.push('/');
  };

  return {
    user,
    token,
    isMobile,
    deviceId,
    logout,
    setToken,
    removeToken,
    setStorage,
    getStorage,
    removeStorage,
  };
}
