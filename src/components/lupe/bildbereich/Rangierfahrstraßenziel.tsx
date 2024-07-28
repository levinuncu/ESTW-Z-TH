import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type RangierfahrstraßenzielProps = Readonly<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  richtung: "rechts" | "links";
  children: React.ReactNode;
}>;

export function Rangierfahrstraßenziel({
  top,
  left,
  bottom,
  right,
  children,
  richtung,
}: RangierfahrstraßenzielProps) {
  return (
    <div
      {...stylex.props(
        styles.wrapper(top, left, bottom, right),
        richtung === "rechts" && styles.wrapperRechts,
      )}
    >
      <div {...stylex.props(styles.top)}></div>
      <div {...stylex.props(styles.mitte)}></div>
      <div
        {...stylex.props(
          styles.bezeichner,
          richtung === "rechts" && styles.bezeichnerRechts,
        )}
      >
        {children}
      </div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right) => ({
    top,
    left,
    bottom,
    right,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  }),
  wrapperRechts: {
    flexDirection: "row-reverse",
  },
  mitte: {
    height: "12px",
    width: "6px",
    backgroundColor: colors.white,
  },
  top: {
    height: "12px",
    width: "0",
    borderLeft: `3px solid ${colors.white}`,
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
  },
  bezeichner: {
    marginLeft: "4px",
    color: colors.white,
    height: "12px",
    fontSize: "0.95rem",
  },
  bezeichnerRechts: {
    marginLeft: "0px",
    marginRight: "4px",
  },
});
