import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";
import {
  BahnübergangStatus,
  type Bahnübergang,
} from "@/constants/bahnübergang";
import { GleisStatus, type Gleis } from "@/constants/gleis";

type BahnübergangZweigleisigProps = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  bahnübergangOben: Bahnübergang;
  bahnübergangUnten: Omit<Bahnübergang, "kilometer">;
}>;

export function BahnübergangZweigleisig({
  left,
  top,
  right,
  bottom,
  bahnübergangOben,
  bahnübergangUnten,
}: BahnübergangZweigleisigProps) {
  let newBottom = bottom;
  if (
    (bahnübergangOben.status === BahnübergangStatus.GESICHERT ||
      bahnübergangOben.status === BahnübergangStatus.SCHLIEßVORGANG) &&
    (bahnübergangUnten.status === BahnübergangStatus.GESICHERT ||
      bahnübergangUnten.status === BahnübergangStatus.SCHLIEßVORGANG)
  ) {
    newBottom = bottom ? bottom - 1 : bottom;
  }
  if (
    (bahnübergangOben.status === BahnübergangStatus.GESICHERT ||
      bahnübergangOben.status === BahnübergangStatus.SCHLIEßVORGANG) &&
    bahnübergangUnten.status === BahnübergangStatus.GRUNDSTELLUNG
  ) {
    newBottom = bottom ? bottom - 1 : bottom;
  }
  if (
    bahnübergangOben.status === BahnübergangStatus.GRUNDSTELLUNG &&
    (bahnübergangUnten.status === BahnübergangStatus.GESICHERT ||
      bahnübergangUnten.status === BahnübergangStatus.SCHLIEßVORGANG)
  ) {
    newBottom = bottom ? bottom - 1 : bottom;
  }
  return (
    <div
      {...stylex.props(
        styles.wrapper(top, left, newBottom, right),
        (bahnübergangOben.status === BahnübergangStatus.GESICHERT ||
          bahnübergangOben.status === BahnübergangStatus.SCHLIEßVORGANG) &&
          (bahnübergangUnten.status === BahnübergangStatus.GESICHERT ||
            bahnübergangUnten.status === BahnübergangStatus.SCHLIEßVORGANG) &&
          styles.wrapperGap2,
        bahnübergangOben.status === BahnübergangStatus.GRUNDSTELLUNG &&
          (bahnübergangUnten.status === BahnübergangStatus.GESICHERT ||
            bahnübergangUnten.status === BahnübergangStatus.SCHLIEßVORGANG) &&
          styles.wrapperGap1,
        (bahnübergangOben.status === BahnübergangStatus.GESICHERT ||
          bahnübergangOben.status === BahnübergangStatus.SCHLIEßVORGANG) &&
          bahnübergangUnten.status === BahnübergangStatus.GRUNDSTELLUNG &&
          styles.wrapperGap1,
      )}
    >
      <div {...stylex.props(styles.bezeichnung)}>
        {bahnübergangOben.kilometer}
      </div>
      <div
        {...stylex.props(
          styles.gleisOben(
            bahnübergangOben.status === BahnübergangStatus.GRUNDSTELLUNG
              ? colors.yellow
              : colors.green,
          ),
          bahnübergangOben.status !== BahnübergangStatus.GRUNDSTELLUNG &&
            styles.gleisSchließen,
          bahnübergangOben.status === BahnübergangStatus.GESICHERT &&
            styles.gleisGesichert,
        )}
      ></div>
      <div
        {...stylex.props(
          styles.gleisUnten(
            bahnübergangUnten.status === BahnübergangStatus.GRUNDSTELLUNG
              ? colors.yellow
              : colors.green,
          ),
          bahnübergangUnten.status !== BahnübergangStatus.GRUNDSTELLUNG &&
            styles.gleisSchließen,
          bahnübergangUnten.status === BahnübergangStatus.GESICHERT &&
            styles.gleisGesichert,
        )}
      ></div>
      <div
        {...stylex.props(
          styles.straßeOben,
          bahnübergangOben.status === BahnübergangStatus.GRUNDSTELLUNG &&
            styles.straßeGrundstellung,
          (bahnübergangOben.status !== BahnübergangStatus.GRUNDSTELLUNG ||
            bahnübergangUnten.status !== BahnübergangStatus.GRUNDSTELLUNG) &&
            styles.straßeObenGap,
        )}
      >
        {bahnübergangOben.status === BahnübergangStatus.SCHLIEßVORGANG && (
          <div {...stylex.props(styles.einschaltmelder)}></div>
        )}
        {[...Array(4)].map((n) => (
          <div key={n} {...stylex.props(styles.linie)}></div>
        ))}
      </div>
      <div
        {...stylex.props(
          styles.straßeUnten,
          bahnübergangUnten.status === BahnübergangStatus.GRUNDSTELLUNG &&
            styles.straßeGrundstellung,
          (bahnübergangOben.status !== BahnübergangStatus.GRUNDSTELLUNG ||
            bahnübergangUnten.status !== BahnübergangStatus.GRUNDSTELLUNG) &&
            styles.straßeUntenGap1,
          bahnübergangOben.status !== BahnübergangStatus.GRUNDSTELLUNG &&
            bahnübergangUnten.status !== BahnübergangStatus.GRUNDSTELLUNG &&
            styles.straßeUntenGap2,
        )}
      >
        {bahnübergangUnten.status === BahnübergangStatus.SCHLIEßVORGANG && (
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
    position: "absolute",
    display: "flex",
    gap: "40px",
    flexDirection: "column",
  }),
  wrapperGap1: {
    gap: "39px",
  },
  wrapperGap2: {
    gap: "38px",
  },
  einschaltmelder: {
    height: "4px",
    backgroundColor: colors.white,
    width: "14px",
    position: "absolute",
  },
  gleisSchließen: {
    height: "6px",
  },
  gleisGesichert: {
    position: "relative",
    zIndex: 1,
  },
  gleisOben: (backgroundColor) => ({
    height: "4px",
    width: "60px",
    backgroundColor,
  }),
  gleisUnten: (backgroundColor) => ({
    height: "4px",
    width: "60px",
    backgroundColor,
  }),
  straßeOben: {
    position: "absolute",
    height: "43px",
    width: "20px",
    left: "50%",
    transform: "translate(-50%, -46%)",
    top: 0,
    backgroundColor: colors.black,
    border: `1px solid ${colors.yellow}`,
    borderBottomWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  straßeObenGap: {
    height: "45px",
  },
  straßeUnten: {
    position: "absolute",
    height: "43px",
    width: "20px",
    left: "50%",
    transform: "translate(-50%, -10%)",
    bottom: "-50%",
    backgroundColor: colors.black,
    border: `1px solid ${colors.yellow}`,
    borderTopWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  straßeUntenGap1: {
    height: "44px",
  },
  straßeUntenGap2: {
    height: "45px",
  },
  straßeGrundstellung: {
    "::before": {
      content: "' '",
      height: "100%",
      position: "absolute",
      top: 0,
      width: "4px",
      backgroundColor: colors.black,
      left: "-5px",
    },
    "::after": {
      content: "' '",
      height: "100%",
      position: "absolute",
      top: 0,
      width: "4px",
      backgroundColor: colors.black,
      right: "-5px",
    },
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
