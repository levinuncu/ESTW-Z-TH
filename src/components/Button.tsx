import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function Button({
  children,
  ...rest
}: Props & JSX.IntrinsicElements["button"]) {
  return (
    <button {...stylex.props(styles.button)} {...rest}>
      {children}
    </button>
  );
}

const styles = stylex.create({
  button: {
    letterSpacing: "0.125rem",
    fontWeight: 100,
    fontFamily: "sans-serif", //??
    backgroundColor: colors.white,
    cursor: {
      default: "pointer !important",
      ":disabled": "auto",
    },
    color: {
      ":disabled": "#ccc",
    },
    borderWidth: "3px",
    borderTopStyle: "outset",
    borderBottomStyle: "outset",
    borderLeftStyle: "outset",
    borderRightStyle: "outset",
    borderColor: "#1c1c1c",
    height: "30px",
    width: "150px",
    fontSize: "0.9rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
