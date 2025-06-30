"use client";

import { toast as sonnerToast } from "sonner";

type ToastType = "success" | "error" | "warning" | "info" | "loading";

interface ToastOptions {
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
}

interface ToastFunction {
  (message: string, options?: ToastOptions): string | number;

  success: (message: string, options?: ToastOptions) => string | number;
  error: (message: string, options?: ToastOptions) => string | number;
  warning: (message: string, options?: ToastOptions) => string | number;
  info: (message: string, options?: ToastOptions) => string | number;
  loading: (message: string, options?: ToastOptions) => string | number;

  promise: <T>(
    promise: Promise<T>,
    options: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: unknown) => string);
    }
  ) => ReturnType<typeof sonnerToast.promise>;

  dismiss: (toastId?: string | number) => void;
}


const createToastFunction = (type?: ToastType): ToastFunction["success"] => {
  return (message: string, options: ToastOptions = {}) => {
    const { title, description, action, duration, position } = options;

    const toastOptions = {
      description: description || title,
      duration,
      position,
      action: action
        ? {
            label: action.label,
            onClick: action.onClick,
          }
        : undefined,
    };

    switch (type) {
      case "success":
        return sonnerToast.success(message, toastOptions);
      case "error":
        return sonnerToast.error(message, toastOptions);
      case "warning":
        return sonnerToast.warning(message, toastOptions);
      case "info":
        return sonnerToast.info(message, toastOptions);
      case "loading":
        return sonnerToast.loading(message, toastOptions);
      default:
        return sonnerToast(message, toastOptions);
    }
  };
};


export const toast: ToastFunction = Object.assign(createToastFunction(), {
  success: createToastFunction("success"),
  error: createToastFunction("error"),
  warning: createToastFunction("warning"),
  info: createToastFunction("info"),
  loading: createToastFunction("loading"),
  promise: sonnerToast.promise,
  dismiss: sonnerToast.dismiss,
});



export function useToast() {
  return {
    toast,
    dismiss: toast.dismiss,
  };
}
