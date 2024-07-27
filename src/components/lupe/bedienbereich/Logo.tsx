import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

export function Logo() {
  return <div {...stylex.props(styles.wrapper)}>SIEMENS</div>;
}

const styles = stylex.create({
  wrapper: {
    position: "absolute",
    left: "10px",
    bottom: "2px",
    color: colors.blue,
  },
});
