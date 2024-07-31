import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type TunnelProps = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  name: string;
}>;

export function Tunnel({ left, top, right, bottom, name }: TunnelProps) {
  let newBottom = bottom || bottom === 0 ? bottom + 4 : undefined;
  return (
    <div {...stylex.props(styles.wrapper(top, left, newBottom, right))}>
      <div {...stylex.props(styles.bezeichner)}>{name}</div>
      <div>
        <div
          {...stylex.props(styles.schrägeOben, styles.schrägeObenLinks)}
        ></div>
        <div {...stylex.props(styles.senkrechteLinie)}></div>
        <div
          {...stylex.props(styles.schrägeUnten, styles.schrägeUntenLinks)}
        ></div>
      </div>
      <div>
        <div {...stylex.props(styles.schrägeOben)}></div>
        <div {...stylex.props(styles.senkrechteLinie)}></div>
        <div {...stylex.props(styles.schrägeUnten)}></div>
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
    gap: "80px",
  }),
  bezeichner: {
    fontSize: "0.75rem",
    fontFamily: "Roboto",
    fontWeight: "300",
    position: "absolute",
    top: "-45px",
    width: "100%",
    textAlign: "center",
  },
  senkrechteLinie: {
    width: "2px",
    height: "80px",
    zIndex: 10,
    position: "relative",
    backgroundColor: colors.white,
  },
  schrägeOben: {
    position: "absolute",
    top: "-20px",
    right: "8px",
    width: "2px",
    height: "24px",
    backgroundColor: colors.white,
    transform: "rotate(-45deg)",
  },
  schrägeObenLinks: {
    left: "8px",
    right: "initial",
    transform: "rotate(45deg)",
  },
  schrägeUnten: {
    position: "absolute",
    bottom: "-20px",
    right: "8px",
    width: "2px",
    height: "24px",
    backgroundColor: colors.white,
    transform: "rotate(45deg)",
  },
  schrägeUntenLinks: {
    left: "8px",
    transform: "rotate(-45deg)",
  },
});
