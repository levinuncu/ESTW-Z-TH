import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type SperrsignalProps = Readonly<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  richtung: "rechts" | "links";
  children: React.ReactNode;
}>;

export function Sperrsignal({
  top,
  left,
  bottom,
  right,
  children,
  richtung,
}: SperrsignalProps) {
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
    width: "8px",
    backgroundColor: colors.red,
  },
  verbindung: {
    width: "9px",
    height: "6px",
    marginLeft: "-1px",
    backgroundColor: colors.red,
  },
  verbindungRechts: {
    marginLeft: "0",
    marginRight: "-1px",
  },
  fuß: {
    width: "4px",
    height: "12px",
    backgroundColor: colors.red,
  },
  bezeichner: {
    marginLeft: "4px",
    color: colors.red,
    height: "12px",
    fontSize: "0.95rem",
  },
  bezeichnerRechts: {
    marginLeft: "0px",
    marginRight: "4px",
  },
});
