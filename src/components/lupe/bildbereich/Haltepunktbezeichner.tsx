import stylex from "@stylexjs/stylex";

type HaltepunktbezeichnerProps = Readonly<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  children: React.ReactNode;
}>;

export function Haltepunktbezeichner({
  top,
  left,
  bottom,
  right,
  children,
}: HaltepunktbezeichnerProps) {
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
    fontSize: "0.75rem",
    fontFamily: "Roboto",
    fontWeight: "300",
  }),
});
