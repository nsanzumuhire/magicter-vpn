import { ref } from 'vue';
import { useAuth } from './useAuth';

export const useConfig = () => {
  const { token } = useAuth();
  const deviceId = ref(12343444).value;
  const API_URL = 'https://nc.mgcores.com/apiv2/api/enrollment';
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    authentication: token,
  };

  return {
    deviceId,
    API_URL,
    headers,
  };
};
