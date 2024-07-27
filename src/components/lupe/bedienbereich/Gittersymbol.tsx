import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

export function Gittersymbol() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      {[...Array(6)].map((_, i) => (
        <div {...stylex.props(styles.row)} key={i}>
          {[...Array(14)].map((_, i) => (
            <div {...stylex.props(styles.cell)} key={i}></div>
          ))}
        </div>
      ))}
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    position: "absolute",
    bottom: "94px",
    left: "19px",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  row: {
    width: "100%",
    height: "2px",
    display: "flex",
    gap: "2px",
  },
  cell: {
    height: "100%",
    width: "2px",
    backgroundColor: colors.white,
  },
});
