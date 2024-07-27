import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type BahnsteigProps = Readonly<{
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
  gleisPosition: "oben" | "unten";
}>;

export function Bahnsteig({
  gleisPosition,
  left,
  top,
  bottom,
  right,
}: BahnsteigProps) {
  return (
    <div
      {...stylex.props(
        styles.wrapper(top, left, bottom, right),
        gleisPosition === "oben" && styles.wrapperTurn,
      )}
    >
      {[...Array(14)].map((n) => (
        <div key={n} {...stylex.props(styles.linie)}></div>
      ))}
    </div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right) => ({
    position: "absolute",
    top,
    left,
    bottom,
    right,
    width: "100px",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: colors.white,
    display: "flex",
    justifyContent: "space-between",
  }),
  wrapperTurn: {
    transform: "rotate(180deg)",
  },
  linie: {
    width: "1px",
    height: "5px",
    backgroundColor: colors.white,
  },
});
