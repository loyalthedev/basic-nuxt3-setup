import { useLoadingStore } from "~/stores/loadingStore";

export default defineNuxtPlugin((nuxtApp) => {
  const loadingStore = useLoadingStore();

  console.log("Loading plugin initialized");

  // Try additional hooks
  nuxtApp.hook("app:created", () => {
    console.log("App created hook triggered");
  });

  nuxtApp.hook("app:mounted", () => {
    console.log("App mounted hook triggered");
  });
});