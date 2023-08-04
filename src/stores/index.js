import { defineStore } from "pinia";

export const useApp = defineStore({
  id: "app",
  state: () => ({
    loading: false,
  }),
  actions: {},
});
