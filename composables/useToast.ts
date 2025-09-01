import { ref, readonly, provide, inject, computed } from 'vue';

export type ToastType = 'success' | 'error';

export interface Toast {
  id: number;
  type: ToastType;
  title: string;
  message: string;
  duration: number;
}

const ToastSymbol = Symbol('Toast');

function createToastManager() {
  const toasts = ref<Toast[]>([]);
  let idCounter = 0;

  function showToast(type: ToastType, title: string, message: string, duration = 4000) {
    const id = ++idCounter;
    toasts.value.push({ id, type, title, message, duration });
    setTimeout(() => dismissToast(id), duration);
  }

  function dismissToast(id: number) {
    toasts.value = toasts.value.filter(t => t.id !== id);
  }

  return {
    toasts: readonly(toasts),
    showToast,
    dismissToast,
  };
}

export function provideToast() {
  const toastManager = createToastManager();
  provide(ToastSymbol, toastManager);
  return toastManager;
}

export function useToast() {
  const toastManager = inject<ReturnType<typeof createToastManager>>(ToastSymbol);
  if (!toastManager) throw new Error('useToast must be used within a ToastProvider.');
  return toastManager;
} 