import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type GleisProps = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  width?: number;
}>;

export function Gleis({ left, top, width, bottom }: GleisProps) {
  return (
    <div {...stylex.props(styles.wrapper(top, left, bottom, width))}></div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, width) => ({
    top,
    left,
    bottom,
    width,
    height: "4px",
    backgroundColor: colors.yellow,
    position: "absolute",
  }),
});
