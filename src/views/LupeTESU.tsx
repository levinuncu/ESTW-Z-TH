import stylex from "@stylexjs/stylex";

import { Lupe } from "@/components/Lupe";
import { useLupeStore } from "@/store/lupe";

export function LupeTESU() {
  return (
    <Lupe useLupeStore={useLupeStore}>
      <div {...stylex.props(styles.row)}></div>
      <div {...stylex.props(styles.row)}></div>
      <div {...stylex.props(styles.row)}></div>
    </Lupe>
  );
}

const styles = stylex.create({
  row: {
    height: "258px",
    width: "100%",
    position: "relative",
  },
});
