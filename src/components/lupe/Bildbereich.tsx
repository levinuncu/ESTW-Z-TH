import stylex from "@stylexjs/stylex";

type BildbereichProps = Readonly<{
  children: React.ReactNode;
}>;

export function Bildbereich({ children }: BildbereichProps) {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.inner)}>{children}</div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    height: "824px",
    paddingBottom: "25px",
    paddingTop: "25px",
  },
  inner: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
});
