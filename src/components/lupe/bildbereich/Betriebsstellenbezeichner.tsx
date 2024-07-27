import stylex from "@stylexjs/stylex";

type BetriebsstellenbezeichnerProps = Readonly<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  children: React.ReactNode;
}>;

export function Betriebsstellenbezeichner({
  top,
  left,
  bottom,
  right,
  children,
}: BetriebsstellenbezeichnerProps) {
  return (
    <div {...stylex.props(styles.wrapper(top, left, bottom, right))}>
      {children}
    </div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right) => ({
    position: "absolute",
    top,
    left,
    bottom,
    right,
    border: "2px solid white",
    fontSize: "1.15rem",
    paddingRight: "12px",
    paddingLeft: "12px",
    height: "25px",
  }),
});
