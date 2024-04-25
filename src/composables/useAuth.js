import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAPI } from './useAPI';

export function useAuth() {
  const router = useRouter();
  const token = ref(localStorage.getItem('token'));
  const user = ref(localStorage.getItem('user'));
  const deviceId = ref(12343444);

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
    deviceId,
    logout,
    setToken,
    removeToken,
    setStorage,
    getStorage,
    removeStorage,
  };
}
