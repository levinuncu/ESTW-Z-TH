import { create } from "zustand";

import { type GlobalState } from "@/constants/global/state";

const useGlobalStore = create<GlobalState>(() => ({
  zw: 1,
}));

export { useGlobalStore };
