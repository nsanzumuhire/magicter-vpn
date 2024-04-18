// store/index.js
import { defineStore } from 'pinia';

export const useRouterStore = defineStore({
  id: 'router',

  state: () => ({
    currentPageName: '',
    isSidebarOpen: false,
    codeInputFocus: -1,
  }),
  getters: {
    currentPage: state => state.currentPageName,
    sidebarOpen: state => state.isSidebarOpen,
    shouldFocus: state => state.codeInputFocus,
  },
  actions: {
    setCurrentPageName(name) {
      this.currentPageName = name;
    },

    handleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    triggerFocusedInput(num) {
      this.codeInputFocus = num;
    },
  },
});
