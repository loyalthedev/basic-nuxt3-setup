// stores/user.ts
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    token: "",
  }),
  persist: true, // 👈 this activates persisted state
});
