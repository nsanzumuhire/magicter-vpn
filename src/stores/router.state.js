// store/index.js
import { defineStore } from 'pinia';

export const useRouterStore = defineStore({
  id: 'router',

  state: () => ({
    currentPageName: '',
  }),
  getters: {
    currentPage: state => state.currentPageName,
  },
  actions: {
    setCurrentPageName(name) {
      this.currentPageName = name;
    },
  },
});
