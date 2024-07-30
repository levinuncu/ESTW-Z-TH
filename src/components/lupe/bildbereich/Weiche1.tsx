import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";
import { Weiche } from "@/constants/weiche";

type Weiche1Props = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  weiche: Weiche;
}>;

export function Weiche1({ left, top, right, bottom, weiche }: Weiche1Props) {
  let newBottom = bottom ? bottom - 25 : undefined;
  return (
    <div {...stylex.props(styles.wrapper(top, left, newBottom, right))}>
      <div {...stylex.props(styles.gleisSenkrecht)}></div>
      <div>
        <div {...stylex.props(styles.gleisGeradeOben)}></div>
      </div>
      <div>
        <div {...stylex.props(styles.gleisWrapper)}>
          <div {...stylex.props(styles.verschlussmelder)}></div>
          <div {...stylex.props(styles.gleisGeradeUnten)}></div>
        </div>
        <div {...stylex.props(styles.bezeichnung)}>{weiche.name}</div>
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
  },
  gleisGeradeOben: {
    height: "4px",
    width: "32px",
    marginLeft: "35px",
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
    left: "23px",
    top: "-2px",
    backgroundColor: colors.white,
    position: "absolute",
    transform: "rotate(35deg)",
  },
});
