import { create } from "zustand";

type StoreState = {
  showTags: boolean;
  setShowTags: (value: boolean) => void;
};

const useStore = create<StoreState>((set) => ({
  showTags: false,
  setShowTags: (value: boolean) => set({ showTags: value }),
}));

export default useStore;
