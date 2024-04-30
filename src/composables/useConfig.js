import { ref } from 'vue';
import { useAuth } from './useAuth';
import { v4 as UUID } from 'uuid';

export const useConfig = () => {
  const { token } = useAuth();
  const API_URL = process.env.VUE_APP_API_URL;
  const paymentRedirectUrl = process.env.VUE_APP_PAYMENT_SUCCESS_URL;
  const paymentEnvornment = process.env.VUE_APP_PAYMENT_ENVIRONMENT;
  const stripePK = process.env.VUE_APP_STRIPE_CLIENT_ID;
  const paypalPK = process.env.VUE_APP_PAYPAL_CLIENT_ID;
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
    paymentRedirectUrl,
    paymentEnvornment,
    generateUUID,
    stripePK,
    paypalPK,
  };
};
