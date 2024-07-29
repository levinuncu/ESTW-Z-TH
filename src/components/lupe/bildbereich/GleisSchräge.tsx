import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";
import { GleisStatus, type Gleis } from "@/constants/gleis";

type GleisSchrägeProps = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  richtung: "oben" | "unten" | "oben-links";
}>;

export function GleisSchräge({
  left,
  top,
  right,
  bottom,
  richtung,
}: GleisSchrägeProps) {
  let newBottom = bottom ? bottom + 22 : undefined;
  let newLeft = left ? left - 13 : undefined;
  let newRight = right ? right - 13 : undefined;
  return (
    <div
      {...stylex.props(
        styles.wrapper(top, newLeft, newBottom, newRight),
        richtung === "unten" && styles.wrapperUnten,
        richtung === "oben-links" && styles.wrapperObenLinks,
      )}
    ></div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right) => ({
    top,
    left,
    right,
    bottom,
    width: "55px",
    height: "4px",
    backgroundColor: colors.yellow,
    position: "absolute",
    transform: "rotate(125deg)",
  }),
  wrapperUnten: {
    transform: "rotate(-125deg)",
  },
  wrapperObenLinks: {
    transform: "rotate(55deg)",
  },
});
