// useToast.js
import { useToast as useVueToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export const useToast = () => {
  const options = { duration: 50000, dismissible: true, pauseOnHover: true, position: 'top-right' };
  const $toast = useVueToast();

  const clearToasts = () => {
    $toast.clear();
  };

  const showSuccessMsg = message => {
    $toast.success(message, options);
  };

  const showErrorMsg = message => {
    $toast.error(message, options);
  };

  return {
    clearToasts,
    showSuccessMsg,
    showErrorMsg,
  };
};
