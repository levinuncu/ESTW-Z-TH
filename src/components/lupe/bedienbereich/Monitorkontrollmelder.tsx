import { useEffect, useState } from "react";
import stylex from "@stylexjs/stylex";
import { type StyleXVar } from "@stylexjs/stylex/lib/StyleXTypes";

import { colors } from "@/assets/theme.stylex";

const COLORS = [
  colors.green,
  colors.white,
  colors.red,
  colors.yellow,
  colors.blue,
];

export function Monitorkontrollmelder() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow((prev) => !prev);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <div {...stylex.props(styles.wrapper)}>
      {COLORS.map((color) => (
        <div key={color}>
          <div {...stylex.props(styles.farbeBlock(color))}></div>
          <div
            {...stylex.props(styles.farbeBlock(show ? color : colors.black))}
          ></div>
        </div>
      ))}
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    position: "absolute",
    bottom: "40px",
    left: "18px",
    display: "flex",
  },
  farbeBlock: (color: StyleXVar<string>) => ({
    height: "24px",
    width: "11px",
    backgroundColor: color,
  }),
});
