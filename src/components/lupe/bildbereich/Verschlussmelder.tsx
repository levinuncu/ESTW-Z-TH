import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type VerschlussmelderProps = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  richtung?: "unten" | "oben";
}>;

export function Verschlussmelder({
  left,
  top,
  right,
  bottom,
  richtung = "oben",
}: VerschlussmelderProps) {
  return (
    <div {...stylex.props(styles.wrapper(top, left, bottom, right))}>
      <div
        {...stylex.props(
          styles.melder,
          richtung === "unten" && styles.melderUnten,
        )}
      ></div>
      <div {...stylex.props(styles.gleis)}></div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right) => ({
    top,
    left,
    right,
    bottom,
    height: "10px",
    position: "absolute",
    display: "flex",
    alignItems: "flex-end",
  }),
  gleis: {
    width: "10px",
    backgroundColor: colors.white,
    height: "4px",
  },
  melder: {
    height: "10px",
    width: "3px",
    backgroundColor: colors.white,
  },
  melderUnten: {
    position: "absolute",
    top: "6px",
  },
});
