import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";
import { SperrsignalStellung } from "@/constants/signal";

type SperrsignalProps = Readonly<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  richtung: "rechts" | "links";
  bezeichnung: string;
  stellung: SperrsignalStellung;
}>;

export function Sperrsignal({
  top,
  left,
  bottom,
  right,
  stellung,
  bezeichnung,
  richtung,
}: SperrsignalProps) {
  let backgroundColor;
  switch (stellung) {
    case SperrsignalStellung.Sh0: {
      backgroundColor = colors.red;
      break;
    }
    case SperrsignalStellung.Sh1: {
      backgroundColor = colors.white;
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
        {bezeichnung}
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
  mitte: (backgroundColor) => ({
    height: "12px",
    width: "8px",
    backgroundColor,
    position: "relative",
  }),
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
