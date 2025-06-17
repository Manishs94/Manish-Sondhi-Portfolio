
import { useToast } from "@/hooks/use-toast";

// Re-export the toast function from the hook
export { useToast };

// For the toast function, we need to create a simple wrapper
export const toast = (props: Parameters<ReturnType<typeof useToast>['toast']>[0]) => {
  // This will be used by components that import toast directly
  // The actual implementation is in the hook
  console.warn('Direct toast import detected. Please use useToast hook instead.');
  return props;
};
