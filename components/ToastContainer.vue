<template>
  <div class="fixed top-4 right-4 z-50 flex flex-col space-y-4 items-end">
    <Toast
      v-for="toast in toasts"
      :key="toast.id"
      :toast="toast"
      @close="dismissToast(toast.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { useToast } from "../composables/useToast";
import Toast from "./Toast.vue";

const { toasts, dismissToast } = useToast();
</script>
