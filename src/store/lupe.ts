import { createContext } from "react";
import { create } from "zustand";

import { type LupeState } from "@/constants/lupe/state";

const useLupeStore = create<LupeState>(() => ({
  lupe: {
    betriebsstelle: "",
  },
  ein: "",
  vq: "",
  sammelmelderzeile: {
    zuglenkung: true,
    weichenLaufketteGesperrt: false,
    tagspannung: {
      ein: false,
      stoerung: true,
    },
    nachtspannung: {
      ein: true,
      stoerung: false,
    },
  },
}));

const LupeStoreContext = createContext(useLupeStore);

export { useLupeStore, LupeStoreContext };
