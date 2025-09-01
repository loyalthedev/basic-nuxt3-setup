<template>
  <div>
    <NuxtPage />
    <!-- Toasts -->
    <ToastContainer />
    <!-- Global Loader -->
    <Loading v-if="loadingStore.isLoading" />
    <!-- Test button -->
    <!-- <button
      @click="testLoading"
      class="fixed top-4 left-4 bg-blue-500 text-white p-2 z-[10000] rounded"
    >
      Test Loading
    </button> -->
  </div>
</template>

<script setup lang="ts">
import { provideToast } from "~/composables/useToast";
import ToastContainer from "~/components/ToastContainer.vue";
import { useLoadingStore } from "~/stores/loadingStore";
import { watch } from "vue";

provideToast();
const loadingStore = useLoadingStore();

// Test function
const testLoading = async () => {
  console.log("Testing loading...");
  loadingStore.show();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  loadingStore.hide();
};

// Watch for loading state changes
watch(
  () => loadingStore.isLoading,
  (newVal, oldVal) => {
    console.log("Loading state changed:", oldVal, "->", newVal);
  }
);

console.log("Default layout - loading store state:", loadingStore.isLoading);
</script>
