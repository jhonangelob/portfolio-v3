import { create } from 'zustand';

type LoadingState = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
};

export const useLoadingState = create<LoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
