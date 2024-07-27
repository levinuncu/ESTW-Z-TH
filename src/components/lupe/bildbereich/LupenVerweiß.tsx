import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type LupenVerweißProps = Readonly<{
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
  children: React.ReactNode;
}>;

export function LupenVerweiß({
  left,
  top,
  bottom,
  right,
  children,
}: LupenVerweißProps) {
  let newBottom = bottom ? bottom + 7 : undefined;
  return (
    <div {...stylex.props(styles.wrapper(top, left, newBottom, right))}>
      <div>{children}</div>
      <div {...stylex.props(styles.gleis)}></div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right) => ({
    position: "absolute",
    top,
    left,
    right,
    bottom,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  }),
  gleis: {
    backgroundColor: colors.yellow,
    height: "4px",
    width: "20px",
    transform: "rotate(55deg)",
  },
});
