import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type Weiche3Props = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>;

export function Weiche3({ left, top, right, bottom }: Weiche3Props) {
  let newBottom = bottom ? bottom - 25 : undefined;
  return (
    <div {...stylex.props(styles.wrapper(top, left, newBottom, right))}>
      <div>
        <div {...stylex.props(styles.gleisGeradeOben)}></div>
      </div>
      <div {...stylex.props(styles.gleisSenkrecht)}></div>
      <div>
        <div {...stylex.props(styles.gleisWrapper)}>
          <div {...stylex.props(styles.gleisGeradeUnten)}></div>
          <div {...stylex.props(styles.verschlussmelder)}></div>
        </div>
        <div {...stylex.props(styles.bezeichnung)}>43</div>
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
    marginTop: "8px",
    color: colors.yellow,
    fontSize: "0.95rem",
    textAlign: "right",
  },
  gleisGeradeOben: {
    height: "4px",
    width: "32px",
    marginLeft: "0",
    backgroundColor: colors.white,
  },
  gleisGeradeUnten: {
    height: "4px",
    width: "52px",
    backgroundColor: colors.yellow,
  },
  gleisSenkrecht: {
    height: "40px",
    width: "4px",
    right: "23px",
    top: "-2px",
    backgroundColor: colors.white,
    position: "absolute",
    transform: "rotate(145deg)",
  },
});
