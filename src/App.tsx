import { useEffect } from "react";

import { subscribeGlobalStoreSync } from "@/store/global";
import { LupeTESU } from "@/views/LupeTESU";
import { LupeTHP } from "@/views/LupeTHP";
import { LupeTWR } from "@/views/LupeTWR";

function App() {
  useEffect(() => {
    const unsubscribeGlobalStoreSync = subscribeGlobalStoreSync();
    return () => {
      unsubscribeGlobalStoreSync.then((unsubscribe) => unsubscribe());
    };
  }, []);
  return <LupeTWR />;
}

export default App;
