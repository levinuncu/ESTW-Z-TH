import { useEffect, useState } from "react";
import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

export function Aktualitätsmelder() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow((prev) => !prev);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [show]);
  return (
    <>
      <div {...stylex.props(styles.status)}>A</div>
      <div {...stylex.props(styles.uzBezeichner)}>TH</div>
      <div {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.inner)}>
          <div {...stylex.props(styles.smallRectangle, styles.topLeft)}></div>
          <div {...stylex.props(styles.smallRectangle, styles.topRight)}></div>
          <div
            {...stylex.props(styles.smallRectangle, styles.bottomLeft)}
          ></div>
          <div
            {...stylex.props(styles.smallRectangle, styles.bottomRight)}
          ></div>
          <div {...stylex.props(styles.circle)}>
            <div
              {...stylex.props(styles.melder, show && styles.melderWaagerecht)}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = stylex.create({
  wrapper: {
    position: "absolute",
    bottom: "52px",
    left: "127px",
    display: "flex",
    width: "30px",
    height: "30px",
  },
  uzBezeichner: {
    position: "absolute",
    bottom: "57px",
    left: "94px", //94
  },
  status: {
    position: "absolute",
    bottom: "83px",
    left: "127px",
    width: "30px",
    textAlign: "center",
    marginLeft: "2px",
  },
  inner: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  melder: {
    width: "4px",
    height: "20px",
    backgroundColor: colors.white,
  },
  melderWaagerecht: {
    transform: "rotate(90deg)",
  },
  smallRectangle: {
    width: "10px",
    height: "10px",
    position: "absolute",
    backgroundColor: "rgb(214,214,240)",
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  topRight: {
    top: 0,
    right: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
  },
  circle: {
    width: "28px",
    height: "28px",
    borderRadius: "100%",
    backgroundColor: "rgb(155,155,200)",
    position: "absolute",
    left: "1px",
    top: "1px",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
