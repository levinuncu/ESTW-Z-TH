import stylex from "@stylexjs/stylex";

export function Stellwerkskennung() {
  return <div {...stylex.props(styles.wrapper)}>HEILBRONN HBF Z</div>;
}

const styles = stylex.create({
  wrapper: {
    position: "absolute",
    left: "325px",
    bottom: "2px",
  },
});
