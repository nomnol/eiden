export const useGlobalStore = defineStore('global', {
  state: () => ({
    darkMode: false
  }),

  getters: {
    isDarkMode(state) {
      return state.darkMode;
    }
  },

  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    }
  }
});
