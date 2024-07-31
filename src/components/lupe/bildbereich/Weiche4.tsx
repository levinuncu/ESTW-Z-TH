import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";
import { Weiche } from "@/constants/weiche";

type Weiche4Props = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  weiche: Weiche;
}>;

export function Weiche4({ left, top, right, bottom, weiche }: Weiche4Props) {
  return (
    <div {...stylex.props(styles.wrapper(top, left, bottom, right))}>
      <div>
        <div {...stylex.props(styles.bezeichnung)}>{weiche.name}</div>
        <div {...stylex.props(styles.gleisWrapper)}>
          <div {...stylex.props(styles.verschlussmelder)}></div>
        </div>
      </div>
      <div {...stylex.props(styles.gleisSenkrecht)}></div>
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
  gleisSenkrecht: {
    height: "40px",
    width: "4px",
    left: "-15px",
    bottom: "-46px",
    backgroundColor: colors.white,
    position: "absolute",
    transform: "rotate(215deg)",
  },
});
