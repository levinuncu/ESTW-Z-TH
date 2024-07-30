import stylex from "@stylexjs/stylex";
import { type StoreApi, type UseBoundStore } from "zustand";

import { colors } from "@/assets/theme.stylex";
import { Bedienbereich } from "@/components/lupe/Bedienbereich";
import { Bildbereich } from "@/components/lupe/Bildbereich";
import { LupeState } from "@/constants/lupe/state";
import { LupeStoreContext } from "@/store/lupe";

type LupeProps = Readonly<{
  children: React.ReactNode;
  useLupeStore: UseBoundStore<StoreApi<LupeState>>;
}>;

export function Lupe({ children, useLupeStore }: LupeProps) {
  return (
    <LupeStoreContext.Provider value={useLupeStore}>
      <div {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.inner)}>
          <Bildbereich>{children}</Bildbereich>
          <Bedienbereich />
        </div>
      </div>
    </LupeStoreContext.Provider>
  );
}

const styles = stylex.create({
  wrapper: {
    width: "100%",
    height: "100%",
  },
  inner: {
    width: "1280px",
    height: "1024px",
    color: colors.white,
    backgroundColor: colors.black,
  },
});
