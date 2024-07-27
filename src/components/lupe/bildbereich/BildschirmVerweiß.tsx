import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type BezeichnerProps = Readonly<{
  children: React.ReactNode;
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
}>;

function Bezeichner({ children, left, top, bottom, right }: BezeichnerProps) {
  return (
    <span {...stylex.props(styles.bezeichner(top, left, bottom, right))}>
      {children}
    </span>
  );
}

type PfeilProps = Readonly<{
  children: React.ReactNode;
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
  richtung: "links" | "rechts";
}>;

function Pfeil({ children, left, top, bottom, richtung, right }: PfeilProps) {
  return (
    <div {...stylex.props(styles.pfeilWrapper(top, left, bottom, right))}>
      {richtung === "links" && (
        <>
          <div {...stylex.props(styles.pfeilSpitze)}></div>
          <div {...stylex.props(styles.pfeilKörper)}></div>
          <div>{children}</div>
        </>
      )}
      {richtung === "rechts" && (
        <>
          <div>{children}</div>
          <div
            {...stylex.props(styles.pfeilKörper, styles.pfeilKörperRechts)}
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
  bezeichner: (top, left, bottom, right) => ({
    position: "absolute",
    top,
    left,
    right,
    bottom,
    lineHeight: "8px",
  }),
  pfeilWrapper: (top, left, bottom, right) => ({
    position: "absolute",
    top,
    left,
    right,
    bottom,
    display: "flex",
    alignItems: "center",
  }),
  pfeilSpitze: {
    width: 0,
    height: 0,
    borderTop: "5px solid transparent",
    borderBottom: "5px solid transparent",
    borderRight: "10px solid white",
  },
  pfeilSpitzeRechts: {
    transform: "rotate(180deg)",
  },
  pfeilKörper: {
    width: "20px",
    height: "4px",
    backgroundColor: colors.white,
    marginRight: "10px",
  },
  pfeilKörperRechts: {
    marginRight: 0,
    marginLeft: "10px",
  },
});

export const BildschirmVerweiß = {
  Bezeichner,
  Pfeil,
};
