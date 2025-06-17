
import { useToast } from "@/hooks/use-toast";

// Re-export the toast function from the hook
export { useToast };

// For direct toast usage, we need to create a proper implementation
let toastFunction: ReturnType<typeof useToast>['toast'] | null = null;

export const toast = (props: Parameters<ReturnType<typeof useToast>['toast']>[0]) => {
  if (toastFunction) {
    return toastFunction(props);
  }
  // Fallback for when toast is called before initialization
  console.warn('Toast called before initialization. Consider using useToast hook instead.');
  return props;
};

// Initialize toast function
export const initToast = (toastFn: ReturnType<typeof useToast>['toast']) => {
  toastFunction = toastFn;
};
