import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type Weiche2Props = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>;

export function Weiche2({ left, top, right, bottom }: Weiche2Props) {
  return (
    <div {...stylex.props(styles.wrapper(top, left, bottom, right))}>
      <div>
        <div {...stylex.props(styles.bezeichnung)}>44</div>
        <div {...stylex.props(styles.gleisWrapper)}>
          <div {...stylex.props(styles.verschlussmelder)}></div>
          <div {...stylex.props(styles.gleisGeradeOben)}></div>
        </div>
      </div>
      <div {...stylex.props(styles.gleisSenkrecht)}></div>
      <div>
        <div {...stylex.props(styles.gleisGeradeUnten)}></div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  gleisWrapper: {
    display: "flex",
    gap: "3px",
  },
  wrapper: (top, left, bottom, right) => ({
    top,
    left,
    right,
    bottom,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  }),
  verschlussmelder: {
    height: "4px",
    width: "12px",
    backgroundColor: colors.yellow,
  },
  bezeichnung: {
    marginBottom: "4px",
    color: colors.yellow,
    fontSize: "0.95rem",
  },
  gleisGeradeOben: {
    height: "4px",
    width: "52px",
    backgroundColor: colors.yellow,
  },
  gleisGeradeUnten: {
    height: "4px",
    width: "32px",
    marginLeft: "35px",
    backgroundColor: colors.white,
  },
  gleisSenkrecht: {
    height: "40px",
    width: "4px",
    left: "23px",
    bottom: "-2px",
    backgroundColor: colors.white,
    position: "absolute",
    transform: "rotate(145deg)",
  },
});
