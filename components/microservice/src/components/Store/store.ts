import { create } from "zustand";
import { apiList } from "../../mocks/dummyAPIData";

type StoreState = {
  showTags: boolean;
  apiList: Array<(typeof apiList)[number]>;
  setShowTags: (value: boolean) => void;
  setApiList: (newApiList: Array<(typeof apiList)[number]>) => void;
};

const useStore = create<StoreState>((set) => ({
  showTags: false,
  apiList: apiList,
  setShowTags: (value: boolean) => set({ showTags: value }),
  setApiList: (newApiList: Array<(typeof apiList)[number]>) =>
    set({ apiList: newApiList }),
}));

export default useStore;
