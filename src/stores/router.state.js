// store/index.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRouterStore = defineStore({
  id: 'router',

  state: () => ({
    individual: {
      isLoading: false,
      data: [
        {
          id: 1,
          months: 1,
          member: null,
          devices: null,
          price: 10,
          route: null,
        },
        {
          id: 2,
          months: 3,
          member: null,
          devices: null,
          price: 20,
          route: null,
        },
        {
          id: 3,
          months: 6,
          member: null,
          devices: null,
          price: 50,
          route: null,
        },
        {
          id: 4,
          months: 12,
          member: null,
          devices: null,
          price: 100,
          route: null,
        },
      ],
    },
    enterprise: {
      isLoading: false,
      data: [],
    },
    partner: {
      isLoading: false,
      data: [],
    },
    orderHistory: {
      isLoading: false,
      data: null,
    },
    cart: ref(JSON.parse(localStorage.getItem('cart'))) || null,
    currentPageName: '',
    isSidebarOpen: false,
    codeInputFocus: -1,
    selectedMonths: 1,
    faqs: {
      isLoading: false,
      data: [],
    },
  }),
  getters: {
    currentPage: state => state.currentPageName,
    sidebarOpen: state => state.isSidebarOpen,
    shouldFocus: state => state.codeInputFocus,
    getPackage: state => {
      return (partialName, months) => state[partialName]?.data?.find(el => el.months === months);
    },
    orderHistoryData: state => state.orderHistory.data,
    getCart: state => state.cart,
    getSelectedMonths: state => state.selectedMonths,
    getFaqs: state => {
      return input =>
        state.faqs.data.filter(el => el.question.includes(input) || el.answer.includes(input));
    },
  },
  actions: {
    setState(partialState) {
      // Loop through each key in the partialState object
      for (const key in partialState) {
        // Check if the key exists in the store state
        if (key in this.$state) {
          // If the value is an object, merge the properties
          if (typeof partialState[key] === 'object' && !Array.isArray(partialState[key])) {
            this.$state[key] = { ...this.$state[key], ...partialState[key] };
          } else {
            // Otherwise, assign the value directly
            this.$state[key] = partialState[key];
          }
        }
      }
    },
    setCurrentPageName(name) {
      this.currentPageName = name;
    },
    handleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    handleCloseSidebar() {
      this.isSidebarOpen = false;
    },
    triggerFocusedInput(num) {
      this.codeInputFocus = num;
    },
  },
});
