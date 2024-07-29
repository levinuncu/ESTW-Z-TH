import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";

type WeichenVerbindungProps = Readonly<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  bezeichnungOben: string;
  bezeichnungUnten: string;
}>;

export function WeichenVerbindung({
  left,
  top,
  right,
  bottom,
  bezeichnungOben,
  bezeichnungUnten,
}: WeichenVerbindungProps) {
  let newBottom = bottom ? bottom - 25 : undefined;
  return (
    <div {...stylex.props(styles.wrapper(top, left, newBottom, right))}>
      <div {...stylex.props(styles.senkrechtWrapper)}>
        <div {...stylex.props(styles.senkrechtWrapperInner)}>
          <div {...stylex.props(styles.gleisSenkrechtOben)}></div>
          <div {...stylex.props(styles.verschlussmelderSenkrecht)}></div>
          <div {...stylex.props(styles.gleisSenkrechtUnten)}></div>
        </div>
      </div>
      <div>
        <div {...stylex.props(styles.bezeichnungOben)}>{bezeichnungOben}</div>
        <div {...stylex.props(styles.gleisWrapperOben)}>
          <div {...stylex.props(styles.verschlussmelder)}></div>
          <div {...stylex.props(styles.gleisGerade)}></div>
        </div>
      </div>
      <div>
        <div {...stylex.props(styles.gleisWrapperUnten)}>
          <div {...stylex.props(styles.verschlussmelder)}></div>
          <div {...stylex.props(styles.gleisGerade)}></div>
        </div>
        <div {...stylex.props(styles.bezeichnungUnten)}>{bezeichnungUnten}</div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  gleisWrapperUnten: {
    display: "flex",
    gap: "3px",
  },
  gleisWrapperOben: {
    display: "flex",
    gap: "3px",
    marginLeft: "35px",
  },
  wrapper: (top, left, bottom, right) => ({
    top,
    left,
    right,
    bottom,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  }),
  verschlussmelder: {
    height: "4px",
    width: "12px",
    backgroundColor: colors.yellow,
  },
  bezeichnungUnten: {
    marginTop: "8px",
    color: colors.yellow,
    fontSize: "0.95rem",
  },
  bezeichnungOben: {
    marginBottom: "4px",
    color: colors.yellow,
    fontSize: "0.95rem",
    marginLeft: "35px",
  },
  gleisGerade: {
    height: "4px",
    width: "32px",
    backgroundColor: colors.yellow,
  },
  senkrechtWrapper: {
    top: "25px",
    left: 0,
    height: "40px",
    width: "47px",
    position: "absolute",
  },
  senkrechtWrapperInner: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  gleisSenkrechtUnten: {
    height: "14px",
    width: "4px",
    left: "17px",
    bottom: "8px",
    backgroundColor: colors.white,
    position: "absolute",
    transform: "rotate(35deg)",
  },
  gleisSenkrechtOben: {
    height: "14px",
    width: "4px",
    top: "7px",
    right: "18px",
    position: "absolute",
    backgroundColor: colors.white,
    transform: "rotate(35deg)",
  },
  verschlussmelderSenkrecht: {
    width: "8px",
    height: "3px",
    bottom: "17px",
    left: "21px",
    backgroundColor: colors.white,
    position: "absolute",
    transform: "rotate(35deg)",
  },
});
