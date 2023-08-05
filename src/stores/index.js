import { defineStore } from "pinia";

export const useApp = defineStore({
  id: "app",
  state: () => ({
    loading: false,
    sidebar: false,
    is_profile: false,
  }),
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    toggleProfile() {
      this.is_profile = !this.is_profile;
    },
    cancelFunction() {
      console.log("this cancel from stores");
    },
    getProvince() {
      console.log("this get from stores");
    },
  },
});
