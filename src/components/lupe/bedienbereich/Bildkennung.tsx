import stylex from "@stylexjs/stylex";

export function Bildkennung() {
  return <div {...stylex.props(styles.wrapper)}>L_TWR</div>;
}

const styles = stylex.create({
  wrapper: {
    position: "absolute",
    left: "775px",
    bottom: "2px",
  },
});
