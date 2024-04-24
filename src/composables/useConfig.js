import { ref } from 'vue';
import { useAuth } from './useAuth';
import { v4 as UUID } from 'uuid';

export const useConfig = () => {
  const { token } = useAuth();
  const API_URL = 'https://nc.mgcores.com/apiv2/api/enrollment';
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    authentication: token?.value || null,
  };

  // Generate a UUID (Universally Unique Identifier)
  const generateUUID = () => {
    const ID = UUID();
    localStorage.setItem('deviceId', ID);
    return ID;
  };

  // Retrieve or generate a unique device ID
  const deviceId = ref(localStorage.getItem('deviceId') || generateUUID()).value;

  return {
    deviceId,
    API_URL,
    headers,
  };
};
