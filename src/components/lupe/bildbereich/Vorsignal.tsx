import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type VorsignalProps = Readonly<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  children: React.ReactNode;
  richtung: "rechts" | "links";
}>;

export function Vorsignal({
  top,
  left,
  bottom,
  right,
  children,
  richtung,
}: VorsignalProps) {
  return (
    <div
      {...stylex.props(
        styles.wrapper(top, left, bottom, right),
        richtung === "rechts" && styles.wrapperRechts,
      )}
    >
      <div {...stylex.props(styles.mitte)}></div>
      <div
        {...stylex.props(
          styles.bottom,
          richtung === "rechts" && styles.bottomRechts,
        )}
      ></div>
      <div
        {...stylex.props(
          styles.verbindung,
          richtung === "rechts" && styles.verbindungRechts,
        )}
      ></div>
      <div {...stylex.props(styles.fuß)}></div>
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
    backgroundColor: colors.yellow,
  },
  bottom: {
    height: "12px",
    width: "6px",
    backgroundColor: colors.yellow,
    borderRadius: "0 6px 6px 0",
  },
  bottomRechts: {
    borderRadius: "6px 0 0 6px",
  },
  verbindung: {
    width: "9px",
    height: "6px",
    marginLeft: "-1px",
    backgroundColor: colors.yellow,
  },
  verbindungRechts: {
    marginLeft: "0",
    marginRight: "-1px",
  },
  fuß: {
    width: "4px",
    height: "12px",
    backgroundColor: colors.yellow,
  },
  bezeichner: {
    marginLeft: "8px",
    color: colors.red,
    height: "12px",
    fontSize: "0.95rem",
  },
  bezeichnerRechts: {
    marginLeft: "0px",
    marginRight: "8px",
  },
});
