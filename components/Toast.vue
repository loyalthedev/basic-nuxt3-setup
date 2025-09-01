<template>
  <div
    class="min-w-[20rem] w-full px-2 bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden border-l-8 flex items-center relative animate-slide-in"
    :class="
      toast.type === 'error'
        ? 'border-red-600 bg-red-50'
        : 'border-green-600 bg-green-50'
    "
    role="alert"
    aria-live="assertive"
  >
    <div class="flex-1 w-0 p-4">
      <div class="flex items-start">
        <!-- <div class="flex-shrink-0 pt-0.5">
          <span v-if="toast.type === 'error'" class="text-red-600 text-2xl"
            >&#10060;</span
          >
          <span v-else class="text-green-600 text-2xl">&#10003;</span>
        </div> -->
        <div class="ml-3 flex-1">
          <p
            class="text-lg font-semibold"
            :class="toast.type === 'error' ? 'text-red-800' : 'text-green-800'"
          >
            {{ toast.title }}
          </p>
          <p
            class="mt-1 text-sm"
            :class="toast.type === 'error' ? 'text-red-700' : 'text-green-700'"
          >
            {{ toast.message }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex border-l border-gray-200">
      <button
        @click="$emit('close')"
        class="w-full rounded-none rounded-r-lg p-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
        :class="
          toast.type === 'error'
            ? 'bg-red-100 hover:bg-red-200'
            : 'bg-green-100 hover:bg-green-200'
        "
      >
        <span class="sr-only">Close</span>
        <svg
          class="h-6 w-6"
          :class="toast.type === 'error' ? 'text-red-600' : 'text-green-600'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div
      class="absolute bottom-0 left-0 h-1"
      :class="toast.type === 'error' ? 'bg-red-600' : 'bg-green-600'"
      :style="progressBarStyle"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { Toast } from "../composables/useToast";

const props = defineProps<{ toast: Toast }>();
const emit = defineEmits(["close"]);

const progress = ref(100);
const progressBarStyle = computed(() => ({
  width: progress.value + "%",
  transition: "width linear",
  transitionDuration: props.toast.duration + "ms",
}));

onMounted(() => {
  setTimeout(() => {
    progress.value = 0;
  }, 10);
});
</script>

<style scoped>
@keyframes slide-in {
  from {
    transform: translateY(-40px) translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
.animate-slide-in {
  animation: slide-in 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
