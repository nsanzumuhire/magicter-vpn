import { onMounted, computed } from 'vue';
import { useAuth } from '@/composables/useAuth.js';
import { useAPI } from '@/composables/useAPI';
import { useRouterStore } from '@/stores/router.state';

export function usePackages() {
  const { setStorage, removeStorage } = useAuth();
  const { userPackages } = useAPI();
  const state = useRouterStore();

  function getVal(name) {
    return state.getPackage(name, selectedMonths.value);
  }

  function saveCart(cart) {
    removeStorage('cart');
    state.setState({
      cart,
    });
    setTimeout(() => {
      setStorage('cart', JSON.stringify(cart));
    }, 0);
  }

  async function getUserPackages() {
    state.setState({
      enterprise: { isLoading: true },
      partner: { isLoading: true },
    });

    const enterpriseData = await userPackages('Enterprise');
    const partnerData = await userPackages('Partner');

    if (enterpriseData.statusCode === 200) {
      state.setState({
        enterprise: { isLoading: false, data: enterpriseData.data },
      });
    } else {
      state.setState({
        enterprise: { isLoading: false },
      });
    }

    if (partnerData.statusCode === 200) {
      state.setState({
        partner: { isLoading: false, data: partnerData.data },
      });
    } else {
      state.setState({
        partner: { isLoading: false },
      });
    }
  }

  const selectedMonths = computed(() => {
    return state.getSelectedMonths;
  });

  const individual = computed(() => {
    return getVal('individual');
  });

  const enterprise = computed(() => {
    return getVal('enterprise');
  });

  const partner = computed(() => {
    return getVal('partner');
  });

  const isLoading = computed(() => {
    return state.enterprise.isLoading || state.partner.isLoading;
  });

  onMounted(() => {
    if (!enterprise.value || !partner.value || !individual.value) {
      getUserPackages();
    }
  });

  return {
    isLoading,
    partner,
    individual,
    enterprise,
    selectedMonths,
    saveCart,
    getUserPackages,
  };
}
