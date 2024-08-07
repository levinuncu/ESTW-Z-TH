import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type VerschlussmelderProps = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>;

export function VerschlussmelderWeiche({
  left,
  top,
  right,
  bottom,
}: VerschlussmelderProps) {
  return (
    <div {...stylex.props(styles.wrapper(top, left, bottom, right))}>
      <div {...stylex.props(styles.melder)}></div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right) => ({
    top,
    left,
    right,
    bottom,
    height: "10px",
    position: "absolute",
    display: "flex",
    alignItems: "flex-end",
  }),
  melder: {
    height: "10px",
    width: "3px",
    backgroundColor: colors.yellow,
  },
});
