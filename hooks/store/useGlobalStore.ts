import create from "zustand";
import { GlobalStore } from "../../types/stores";

const useGlobalStore = create<GlobalStore>((set) => ({
  username: null,
  setUsername: (username) => set({ username }),
}));

export default useGlobalStore;
