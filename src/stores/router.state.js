// store/index.js
import { defineStore } from 'pinia';

export const useRouterStore = defineStore({
  id: 'router',

  state: () => ({
    currentPageName: '',
    isSidebarOpen: false,
  }),
  getters: {
    currentPage: state => state.currentPageName,
    sidebarOpen: state => state.isSidebarOpen,
  },
  actions: {
    setCurrentPageName(name) {
      this.currentPageName = name;
    },

    handleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
});
