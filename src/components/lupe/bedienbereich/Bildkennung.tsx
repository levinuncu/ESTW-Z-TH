import { useContext } from "react";
import stylex from "@stylexjs/stylex";

import { LupeStoreContext } from "@/store/lupe";

export function Bildkennung() {
  const { lupe } = useContext(LupeStoreContext)();

  return <div {...stylex.props(styles.wrapper)}>L_{lupe.betriebsstelle}</div>;
}

const styles = stylex.create({
  wrapper: {
    position: "absolute",
    left: "775px",
    bottom: "2px",
  },
});
