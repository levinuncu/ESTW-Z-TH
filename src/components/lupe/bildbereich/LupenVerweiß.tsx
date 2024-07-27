import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type LupenVerweißProps = Readonly<{
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
  children: React.ReactNode;
  richtung: "oben" | "unten";
}>;

export function LupenVerweiß({
  left,
  top,
  bottom,
  right,
  children,
  richtung,
}: LupenVerweißProps) {
  let newBottom = bottom;
  let newTop = top;
  if (richtung === "oben") {
    newBottom = bottom ? bottom + 7 : bottom;
  }
  if (richtung === "unten") {
    newTop = top ? top - 7 : top;
  }
  return (
    <div
      {...stylex.props(
        styles.wrapper(newTop, left, newBottom, right),
        richtung === "unten" && styles.wrapperUnten,
      )}
    >
      <div {...stylex.props(richtung === "unten" && styles.bezeichnerUnten)}>
        {richtung === "unten" && <></>}
        {children}
      </div>
      <div {...stylex.props(styles.gleis)}></div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right) => ({
    position: "absolute",
    top,
    left,
    right,
    bottom,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  }),
  wrapperUnten: {
    flexDirection: "column-reverse",
  },
  bezeichnerUnten: {
    textAlign: "right",
    marginTop: "4px",
  },
  gleis: {
    backgroundColor: colors.yellow,
    height: "4px",
    width: "20px",
    transform: "rotate(55deg)",
  },
});
