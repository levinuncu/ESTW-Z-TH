import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";
import {
  BahnübergangStatus,
  type Bahnübergang,
} from "@/constants/bahnübergang";
import { GleisStatus, type Gleis } from "@/constants/gleis";

type BahnübergangEingleisigProps = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  bahnübergang: Bahnübergang;
}>;

export function BahnübergangEingleisig({
  left,
  top,
  right,
  bottom,
  bahnübergang,
}: BahnübergangEingleisigProps) {
  let newBottom =
    bahnübergang.status === BahnübergangStatus.GRUNDSTELLUNG
      ? bottom
      : bottom
        ? bottom + 1
        : undefined;
  return (
    <div {...stylex.props(styles.wrapper(top, left, newBottom, right))}>
      <div {...stylex.props(styles.bezeichnung)}>{bahnübergang.kilometer}</div>
      <div
        {...stylex.props(
          styles.gleis(
            bahnübergang.status === BahnübergangStatus.GRUNDSTELLUNG
              ? colors.yellow
              : colors.green,
          ),
          bahnübergang.status !== BahnübergangStatus.GRUNDSTELLUNG &&
            styles.gleisGesichert,
        )}
      ></div>
      <div
        {...stylex.props(
          styles.straße,
          bahnübergang.status === BahnübergangStatus.GRUNDSTELLUNG &&
            styles.straßeGrundstellung,
        )}
      >
        {bahnübergang.status === BahnübergangStatus.SCHLIEßVORGANG && (
          <div {...stylex.props(styles.einschaltmelder)}></div>
        )}
        {[...Array(4)].map((n) => (
          <div key={n} {...stylex.props(styles.linie)}></div>
        ))}
      </div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right) => ({
    top,
    left,
    right,
    bottom,
    height: "4px",
    position: "absolute",
  }),
  gleis: (backgroundColor) => ({
    height: "4px",
    width: "60px",
    backgroundColor,
  }),

  gleisGesichert: {
    height: "6px",
    position: "relative",
    zIndex: 1,
  },
  einschaltmelder: {
    height: "4px",
    backgroundColor: colors.white,
    width: "14px",
    position: "absolute",
  },
  straße: {
    position: "absolute",
    height: "43px",
    width: "20px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    top: "50%",
    backgroundColor: colors.black,
    border: `1px solid ${colors.yellow}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  straßeGrundstellung: {
    boxShadow: "0px 0px 0px 4px black",
  },
  linie: {
    width: "1px",
    height: "4px",
    backgroundColor: colors.yellow,
  },
  bezeichnung: {
    fontSize: "0.95rem",
    position: "absolute",
    top: "-40px",
    left: "6px",
    color: colors.yellow,
  },
});
