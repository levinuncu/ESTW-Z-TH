import stylex from "@stylexjs/stylex";
import { type StyleXVar } from "@stylexjs/stylex/lib/StyleXTypes";

import { colors } from "@/assets/theme.stylex";

export function Kommunikationsanzeige() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Sammelmelderzeile />
      <div {...stylex.props(styles.item, styles.zw)}>
        <div>ZW: </div>
        <div {...stylex.props(styles.zwValue)}>0000</div>
      </div>
      <div {...stylex.props(styles.item, styles.ein)}>
        <div>EIN: </div>
        <div></div>
      </div>
      <div {...stylex.props(styles.item, styles.vq)}>
        <div>VQ: </div>
        <div></div>
      </div>
    </div>
  );
}

function Sammelmelderzeile() {
  return (
    <div {...stylex.props(styles.sammelmelderzeile)}>
      <div>TWR</div>
      <div {...stylex.props(styles.sammelmelderzeileValues)}>
        <div {...stylex.props(styles.sammelmelderzeileValue(colors.green))}>
          TA
        </div>
        <div {...stylex.props(styles.sammelmelderzeileValue(colors.black))}>
          NA
        </div>
        <div {...stylex.props(styles.sammelmelderzeileValue(colors.green))}>
          EV
        </div>
        <div {...stylex.props(styles.sammelmelderzeileValue(colors.green))}>
          ZL
        </div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  sammelmelderzeile: {
    display: "flex",
  },
  sammelmelderzeileValues: {
    marginLeft: "14px",
    display: "flex",
    gap: "10px",
  },
  sammelmelderzeileValue: (color: StyleXVar<string>) => ({
    color: color,
  }),
  wrapper: {
    position: "absolute",
    left: "180px",
    bottom: "57px",
    display: "flex",
    flexDirection: "column",
  },
  vq: {
    marginTop: "1px",
  },
  ein: {
    marginTop: "6px",
  },
  zwValue: {
    marginLeft: "14px",
  },
  zw: {
    marginTop: "10px",
  },
  item: {
    display: "flex",
  },
});
