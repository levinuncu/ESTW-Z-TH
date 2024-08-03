import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";
import { HauptsignalStellung } from "@/constants/signal";

type BlocksignalProps = Readonly<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  richtung: "rechts" | "links";
  bezeichnung: string;
  stellung: HauptsignalStellung;
  zuglenkung: boolean;
}>;

export function Blocksignal({
  top,
  left,
  bottom,
  right,
  bezeichnung,
  stellung,
  richtung,
  zuglenkung,
}: BlocksignalProps) {
  let backgroundColor;
  switch (stellung) {
    case HauptsignalStellung.Hp0: {
      backgroundColor = colors.red;
      break;
    }
    case HauptsignalStellung.Ks1: {
      backgroundColor = colors.green;
      break;
    }
    case HauptsignalStellung.Ks2: {
      backgroundColor = colors.yellow;
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
      <div
        {...stylex.props(
          styles.top(backgroundColor),
          richtung === "rechts" && styles.topRechts,
        )}
      ></div>
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
      <div
        {...stylex.props(
          styles.bezeichner(zuglenkung ? colors.green : colors.red),
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
  top: (backgroundColor) => ({
    height: "12px",
    width: "6px",
    backgroundColor,
    borderRadius: "6px 0 0 6px",
  }),
  topRechts: {
    borderRadius: "0 6px 6px 0",
  },
  mitte: (backgroundColor) => ({
    height: "12px",
    width: "12px",
    backgroundColor,
  }),
  bottomRechts: {
    borderRadius: "6px 0 0 6px",
  },
  bottom: (backgroundColor) => ({
    height: "12px",
    width: "6px",
    backgroundColor,
    borderRadius: "0 6px 6px 0",
  }),
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
  bezeichner: (color) => ({
    marginLeft: "4px",
    color,
    height: "12px",
    fontSize: "0.95rem",
  }),
  bezeichnerRechts: {
    marginLeft: "0px",
    marginRight: "4px",
  },
});
