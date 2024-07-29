import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type PfeilProps = Readonly<{
  children: React.ReactNode;
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
  richtung: "oben" | "unten" | "rechts" | "links";
}>;

export function BildschirmVerweiß({
  children,
  left,
  top,
  bottom,
  richtung,
  right,
}: PfeilProps) {
  return (
    <div
      {...stylex.props(
        styles.pfeilWrapper(top, left, bottom, right),
        styles.pfeilWrapperOben,
      )}
    >
      {richtung === "oben" && (
        <>
          <div>{children}</div>
          <div
            {...stylex.props(
              styles.pfeilKörperGerade,
              styles.pfeilKörperGeradeOben,
            )}
          ></div>
          <div
            {...stylex.props(
              styles.pfeilKörperSchräg,
              styles.pfeilKörperSchrägOben,
            )}
          ></div>
          <div
            {...stylex.props(styles.pfeilSpitze, styles.pfeilSpitzeOben)}
          ></div>
        </>
      )}
      {richtung === "unten" && (
        <>
          <div
            {...stylex.props(styles.pfeilSpitze, styles.pfeilSpitzeUnten)}
          ></div>
          <div
            {...stylex.props(
              styles.pfeilKörperSchräg,
              styles.pfeilKörperSchrägUnten,
            )}
          ></div>
          <div
            {...stylex.props(
              styles.pfeilKörperGerade,
              styles.pfeilKörperGeradeUnten,
            )}
          ></div>
          <div>{children}</div>
        </>
      )}
      {richtung === "links" && (
        <>
          <div {...stylex.props(styles.pfeilSpitze)}></div>
          <div {...stylex.props(styles.pfeilKörperGerade)}></div>
          <div>{children}</div>
        </>
      )}
      {richtung === "rechts" && (
        <>
          <div>{children}</div>
          <div
            {...stylex.props(
              styles.pfeilKörperGerade,
              styles.pfeilKörperGeradeRechts,
            )}
          ></div>
          <div
            {...stylex.props(styles.pfeilSpitze, styles.pfeilSpitzeRechts)}
          ></div>
        </>
      )}
    </div>
  );
}

const styles = stylex.create({
  pfeilWrapper: (top, left, bottom, right) => ({
    position: "absolute",
    top,
    left,
    right,
    bottom,
    display: "flex",
    alignItems: "center",
  }),
  pfeilWrapperOben: {
    paddingRight: "16px",
  },
  pfeilSpitze: {
    width: 0,
    height: 0,
    borderTop: "6px solid transparent",
    borderBottom: "6px solid transparent",
    borderRight: "8px solid white",
  },
  pfeilSpitzeOben: {
    transform: "rotate(135deg)",
    top: "-8px",
    right: "2px",
    position: "absolute",
  },
  pfeilSpitzeUnten: {
    transform: "rotate(-45deg)",
    bottom: "-8px",
    left: "2px",
    position: "absolute",
  },
  pfeilSpitzeRechts: {
    transform: "rotate(180deg)",
  },
  pfeilKörperSchräg: {
    width: "20px",
    height: "4px",
    backgroundColor: colors.white,
    transform: "rotate(55deg)",
    position: "absolute",
  },
  pfeilKörperSchrägOben: {
    width: "12px",
    transform: "rotate(135deg)",
    right: "7px",
    top: "3px",
  },
  pfeilKörperSchrägUnten: {
    width: "12px",
    transform: "rotate(-45deg)",
    left: "7px",
    bottom: "3px",
  },
  pfeilKörperGerade: {
    width: "20px",
    height: "4px",
    backgroundColor: colors.white,
    marginRight: "10px",
  },
  pfeilKörperGeradeRechts: {
    marginRight: 0,
    marginLeft: "10px",
  },
  pfeilKörperGeradeOben: {
    width: "20px",
    marginRight: 0,
    marginLeft: "10px",
  },
  pfeilKörperGeradeUnten: {
    width: "20px",
    marginRight: "10px",
    marginLeft: "16px",
  },
});
