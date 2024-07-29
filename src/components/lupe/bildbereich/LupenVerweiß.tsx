import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type LupenVerweißProps = Readonly<{
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
  children: React.ReactNode;
  richtung: "oben-links" | "unten-rechts" | "unten-links" | "oben-rechts";
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
  if (richtung === "oben-links" || richtung === "oben-rechts") {
    newBottom = bottom ? bottom + 7 : bottom;
  }
  if (richtung === "unten-rechts" || richtung === "unten-links") {
    newTop = top ? top - 7 : top;
  }
  return (
    <div
      {...stylex.props(
        styles.wrapper(newTop, left, newBottom, right),
        (richtung === "unten-rechts" || richtung === "unten-links") &&
          styles.wrapperUnten,
      )}
    >
      <div
        {...stylex.props(
          richtung === "unten-rechts" && styles.bezeichnerUntenRechts,
          richtung === "unten-links" && styles.bezeichnerUntenLinks,
          richtung === "oben-rechts" && styles.bezeichnerRechtsOben,
        )}
      >
        {/* {richtung === "unten" && <></>} */}
        {children}
      </div>
      <div
        {...stylex.props(
          styles.gleis,
          richtung === "oben-rechts" && styles.gleisObenRechts,
          richtung === "unten-links" && styles.gleisUntenLinks,
        )}
      ></div>
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
  bezeichnerUntenLinks: {
    textAlign: "left",
    marginTop: "4px",
  },
  bezeichnerUntenRechts: {
    textAlign: "right",
    marginTop: "4px",
  },
  bezeichnerRechtsOben: {
    textAlign: "right",
  },
  gleis: {
    backgroundColor: colors.yellow,
    height: "4px",
    width: "20px",
    transform: "rotate(55deg)",
  },
  gleisObenRechts: {
    transform: "rotate(125deg)",
  },
  gleisUntenLinks: {
    transform: "rotate(-55deg)",
  },
});
