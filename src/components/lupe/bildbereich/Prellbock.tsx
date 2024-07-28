import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type PrellbockProps = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>;

export function Prellbock({ left, top, right, bottom }: PrellbockProps) {
  return (
    <div {...stylex.props(styles.wrapper(top, left, bottom, right))}></div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right) => ({
    top,
    left,
    right,
    bottom,
    width: "2px",
    height: "12px",
    backgroundColor: colors.white,
    position: "absolute",
  }),
});
