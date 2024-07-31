import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";
import { GleisStatus, type Gleis } from "@/constants/gleis";

type GleisProps = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  width?: number;
  right?: number;
  gleis: Gleis;
}>;

export function Gleis({ left, top, width, right, bottom, gleis }: GleisProps) {
  let backgroundColor = colors.yellow;
  switch (gleis.status) {
    case GleisStatus.FREI: {
      backgroundColor = colors.yellow;
      break;
    }
    case GleisStatus.UNBEKANNT: {
      backgroundColor = colors.white;
      break;
    }
    case GleisStatus.BESETZT: {
      backgroundColor = colors.red;
      break;
    }
    case GleisStatus.ZUGFAHRSTRAßE: {
      backgroundColor = colors.green;
      break;
    }
    case GleisStatus.RANGIERFAHRSTRAßE: {
      backgroundColor = colors.blue;
      break;
    }
    case GleisStatus.AUßERHALB: {
      backgroundColor = colors.gray;
      break;
    }
  }
  return (
    <div
      {...stylex.props(
        styles.wrapper(top, left, bottom, right, width, backgroundColor),
      )}
    >
      {gleis.nummer && (
        <div {...stylex.props(styles.nummer)}>{gleis.nummer}</div>
      )}
    </div>
  );
}

const styles = stylex.create({
  wrapper: (top, left, bottom, right, width, backgroundColor) => ({
    top,
    left,
    right,
    bottom,
    width,
    height: "4px",
    backgroundColor,
    position: "absolute",
  }),
  nummer: {
    position: "absolute",
    top: "-5px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: colors.black,
    width: "22px",
    paddingLeft: "2px",
    textAlign: "center",
  },
});
