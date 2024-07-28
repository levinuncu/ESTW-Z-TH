import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type BlocksignalProps = Readonly<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  children: React.ReactNode;
  richtung: "rechts" | "links";
}>;

export function Blocksignal({
  top,
  left,
  bottom,
  right,
  children,
  richtung,
}: BlocksignalProps) {
  return (
    <div
      {...stylex.props(
        styles.wrapper(top, left, bottom, right),
        richtung === "rechts" && styles.wrapperRechts,
      )}
    >
      <div
        {...stylex.props(styles.top, richtung === "rechts" && styles.topRechts)}
      ></div>
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
  top: {
    height: "12px",
    width: "6px",
    backgroundColor: colors.red,
    borderRadius: "6px 0 0 6px",
  },
  topRechts: {
    borderRadius: "0 6px 6px 0",
  },
  mitte: {
    height: "12px",
    width: "12px",
    backgroundColor: colors.red,
  },
  bottomRechts: {
    borderRadius: "6px 0 0 6px",
  },
  bottom: {
    height: "12px",
    width: "6px",
    backgroundColor: colors.red,
    borderRadius: "0 6px 6px 0",
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
    color: colors.green,
    height: "12px",
    fontSize: "0.95rem",
  },
  bezeichnerRechts: {
    marginLeft: "0px",
    marginRight: "4px",
  },
});
