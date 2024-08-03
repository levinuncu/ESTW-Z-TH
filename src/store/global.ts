import { emit as emitStateEvent, listen } from "@tauri-apps/api/event";
import { create } from "zustand";

import {
  GLOBAL_STORE_EVENTS,
  GLOBAL_STORE_METHODS,
  type GlobalState,
} from "@/constants/global";

const useGlobalStore = create<GlobalState>(() => ({
  zw: 0,
  zwIncrement: () => {
    emit(GLOBAL_STORE_METHODS.ZwIncrement);
  },
}));

function emit(method: GLOBAL_STORE_METHODS) {
  emitStateEvent(GLOBAL_STORE_EVENTS.ChangeEvent, {
    method,
  });
}

async function subscribeGlobalStoreSync() {
  const unsubscribeGlobalStoreSyncListener = await listen(
    GLOBAL_STORE_EVENTS.SyncEvent,
    (event) => {
      console.log("LOL");
      const payload = event.payload as {
        key: keyof GlobalState;
        value: GlobalState[keyof GlobalState];
      };
      useGlobalStore.setState({ [payload.key]: payload.value });
    },
  );
  return async () => {
    unsubscribeGlobalStoreSyncListener();
  };
}

export { useGlobalStore, subscribeGlobalStoreSync };
