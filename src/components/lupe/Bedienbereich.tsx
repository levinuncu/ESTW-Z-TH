import stylex from "@stylexjs/stylex";

import { Aktualitätsmelder } from "./bedienbereich/Aktualitätsmelder";
import { Bedienfelder } from "./bedienbereich/Bedienfelder";
import { Bildkennung } from "./bedienbereich/Bildkennung";
import { Gittersymbol } from "./bedienbereich/Gittersymbol";
import { Kommunikationsanzeige } from "./bedienbereich/Kommunikationsanzeige";
import { Logo } from "./bedienbereich/Logo";
import { Monitorkontrollmelder } from "./bedienbereich/Monitorkontrollmelder";
import { Stellwerkskennung } from "./bedienbereich/Stellwerkskennung";

export function Bedienbereich() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Bedienfelder />
      <Logo />
      <Monitorkontrollmelder />
      <Gittersymbol />
      <Aktualitätsmelder />
      <Stellwerkskennung />
      <Bildkennung />
      <Kommunikationsanzeige />
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    height: "200px",
    position: "relative",
  },
});
