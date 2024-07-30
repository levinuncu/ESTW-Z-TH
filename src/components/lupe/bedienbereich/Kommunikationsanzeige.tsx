import { useContext } from "react";
import stylex from "@stylexjs/stylex";
import { type StyleXVar } from "@stylexjs/stylex/lib/StyleXTypes";

import { colors } from "@/assets/theme.stylex";
import { useGlobalStore } from "@/store/global";
import { LupeStoreContext } from "@/store/lupe";

export function Kommunikationsanzeige() {
  const { zw } = useGlobalStore();
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Sammelmelderzeile />
      <div {...stylex.props(styles.item, styles.zw)}>
        <div>ZW: </div>
        <div {...stylex.props(styles.zwValue)}>
          {zw.toString().padStart(4, "0")}
        </div>
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
  const { nachtspannung, tagspannung, weichenLaufketteGesperrt, zuglenkung } =
    useContext(LupeStoreContext)((state) => state.sammelmelderzeile);
  return (
    <div {...stylex.props(styles.sammelmelderzeile)}>
      <div>TWR</div>
      <div {...stylex.props(styles.sammelmelderzeileValues)}>
        <div {...stylex.props(styles.sammelmelderzeileValue(colors.green))}>
          {(tagspannung.ein || tagspannung.stoerung) && (
            <div
              {...stylex.props(
                tagspannung.stoerung && styles.sammelmelderzeileValueBlink,
              )}
            >
              TA
            </div>
          )}
        </div>
        <div {...stylex.props(styles.sammelmelderzeileValue(colors.green))}>
          {(nachtspannung.ein || nachtspannung.stoerung) && (
            <div
              {...stylex.props(
                nachtspannung.stoerung && styles.sammelmelderzeileValueBlink,
              )}
            >
              NA
            </div>
          )}
        </div>
        <div {...stylex.props(styles.sammelmelderzeileValue(colors.green))}>
          EV
        </div>
        <div {...stylex.props(styles.sammelmelderzeileValue(colors.green))}>
          {zuglenkung && <>ZL</>}
        </div>
        <div {...stylex.props(styles.sammelmelderzeileValue(colors.yellow))}>
          {weichenLaufketteGesperrt && <>LK</>}
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
    gap: "14px",
  },
  sammelmelderzeileValue: (color: StyleXVar<string>) => ({
    color: color,
    width: "22px",
    textAlign: "center",
  }),
  sammelmelderzeileValueBlink: {
    animation: "blink 1s infinite",
    visibility: "hidden",
  },
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
