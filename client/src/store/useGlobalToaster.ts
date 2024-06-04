import create, { SetState } from "zustand";

interface ToastMessage {
  id: number;
  text: string;
  duration?: number;
}

interface ToastStore {
  toastMessages: ToastMessage[];
  addToastMessage: (message: ToastMessage) => void;
}

export const useToastStore = create<ToastStore>(
  (set: SetState<ToastStore>) => ({
    toastMessages: [],
    addToastMessage: (message) =>
      set((state) => ({ toastMessages: [...state.toastMessages, message] })),
  })
);
