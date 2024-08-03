import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";
import { VorsignalStellung } from "@/constants/signal";

type VorsignalProps = Readonly<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  richtung: "rechts" | "links";
  stellung: VorsignalStellung;
}>;

export function Vorsignal({
  top,
  left,
  bottom,
  right,
  richtung,
  stellung,
}: VorsignalProps) {
  let backgroundColor;
  switch (stellung) {
    case VorsignalStellung.Vr0: {
      backgroundColor = colors.yellow;
      break;
    }
    case VorsignalStellung.Vr1: {
      backgroundColor = colors.green;
      break;
    }
  }
  return (
    <div
      {...stylex.props(
        styles.wrapper(top, left, bottom, right),
        richtung === "rechts" && styles.wrapperRechts,
      )}
    >
      <div {...stylex.props(styles.mitte(backgroundColor))}></div>
      <div
        {...stylex.props(
          styles.bottom(backgroundColor),
          richtung === "rechts" && styles.bottomRechts,
        )}
      ></div>
      <div
        {...stylex.props(
          styles.verbindung(backgroundColor),
          richtung === "rechts" && styles.verbindungRechts,
        )}
      ></div>
      <div {...stylex.props(styles.fuß(backgroundColor))}></div>
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
  mitte: (backgroundColor) => ({
    height: "12px",
    width: "6px",
    backgroundColor,
  }),
  bottom: (backgroundColor) => ({
    height: "12px",
    width: "6px",
    backgroundColor,
    borderRadius: "0 6px 6px 0",
  }),
  bottomRechts: {
    borderRadius: "6px 0 0 6px",
  },
  verbindung: (backgroundColor) => ({
    width: "9px",
    height: "6px",
    marginLeft: "-1px",
    backgroundColor,
  }),
  verbindungRechts: {
    marginLeft: "0",
    marginRight: "-1px",
  },
  fuß: (backgroundColor) => ({
    width: "4px",
    height: "12px",
    backgroundColor,
  }),
});
