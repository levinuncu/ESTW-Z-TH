import stylex from "@stylexjs/stylex";

import { Lupe } from "@/components/Lupe";
import { Bahnsteig } from "@/components/lupe/bildbereich/Bahnsteig";
import { BahnübergangEingleisig } from "@/components/lupe/bildbereich/BahnübergangEingleisig";
import { BahnübergangZweigleisig } from "@/components/lupe/bildbereich/BahnübergangZweigleisig";
import { Betriebsstellenbezeichner } from "@/components/lupe/bildbereich/Betriebsstellenbezeichner";
import { BildschirmVerweiß } from "@/components/lupe/bildbereich/BildschirmVerweiß";
import { Blocksignal } from "@/components/lupe/bildbereich/Blocksignal";
import { Gleis } from "@/components/lupe/bildbereich/Gleis";
import { GleisSchräge } from "@/components/lupe/bildbereich/GleisSchräge";
import { Haltepunktbezeichner } from "@/components/lupe/bildbereich/Haltepunktbezeichner";
import { Hauptsignal } from "@/components/lupe/bildbereich/Hauptsignal";
import { LupenVerweiß } from "@/components/lupe/bildbereich/LupenVerweiß";
import { Prellbock } from "@/components/lupe/bildbereich/Prellbock";
import { Rangierfahrstraßenziel } from "@/components/lupe/bildbereich/Rangierfahrstraßenziel";
import { Sperrsignal } from "@/components/lupe/bildbereich/Sperrsignal";
import { Verschlussmelder } from "@/components/lupe/bildbereich/Verschlussmelder";
import { Vorsignal } from "@/components/lupe/bildbereich/Vorsignal";
import { Weiche1 } from "@/components/lupe/bildbereich/Weiche1";
import { Weiche2 } from "@/components/lupe/bildbereich/Weiche2";
import { Weiche3 } from "@/components/lupe/bildbereich/Weiche3";
import { WeichenVerbindung1 } from "@/components/lupe/bildbereich/WeichenVerbindung1";
import { WeichenVerbindung2 } from "@/components/lupe/bildbereich/WeichenVerbindung2";
import { BahnübergangStatus } from "@/constants/bahnübergang";
import { GleisStatus, type Gleis as GleisType } from "@/constants/gleis";
import { useLupeStore } from "@/store/lupe";

export function LupeTESU() {
  const TEST_GLEIS: GleisType = {
    status: GleisStatus.FREI,
  };
  useLupeStore.setState(() => ({ lupe: { betriebsstelle: "TESU" } }));
  return (
    <Lupe useLupeStore={useLupeStore}>
      <div {...stylex.props(styles.row)}>
        <Willsbach />
        <Affaltrach />
        <BildschirmVerweiß left={20} bottom={78} richtung="unten">
          L_TWR
        </BildschirmVerweiß>
        <LupenVerweiß bottom={27} left={25} richtung="unten-links">
          C
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={64} width={1200} />
        <LupenVerweiß bottom={27} right={25} richtung="unten-rechts">
          1
        </LupenVerweiß>
        {/*  */}
        <LupenVerweiß bottom={-17} left={25} richtung="unten-links">
          D
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={20} width={1200} />
        <LupenVerweiß bottom={-17} right={25} richtung="unten-rechts">
          2
        </LupenVerweiß>
      </div>
      <div {...stylex.props(styles.row)}>
        <LupenVerweiß bottom={64} left={25} richtung="oben-links">
          1
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={64} width={1200} />
        <LupenVerweiß bottom={27} right={25} richtung="unten-rechts">
          3
        </LupenVerweiß>
        {/*  */}
        <LupenVerweiß bottom={20} left={25} richtung="oben-links">
          2
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={20} width={1200} />
        <LupenVerweiß bottom={-17} right={25} richtung="unten-rechts">
          4
        </LupenVerweiß>
      </div>
      <div {...stylex.props(styles.row)}>
        <LupenVerweiß bottom={64} left={25} richtung="oben-links">
          3
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={64} width={1100} />
        {/*  */}
        <LupenVerweiß bottom={20} left={25} richtung="oben-links">
          4
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={20} width={1100} />
        <Haltepunktbezeichner bottom={37} right={40}>
          v/n Öhringen
        </Haltepunktbezeichner>
      </div>
    </Lupe>
  );
}

function Willsbach() {
  return (
    <>
      <Haltepunktbezeichner bottom={103} right={991}>
        Hp Willsbach
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={980} bottom={76} />
      <Bahnsteig gleisPosition="oben" right={980} bottom={6} />
    </>
  );
}
function Affaltrach() {
  return (
    <>
      <Haltepunktbezeichner bottom={103} right={598}>
        Hp Affaltrach
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={590} bottom={76} />
      <Bahnsteig gleisPosition="oben" right={590} bottom={6} />
    </>
  );
}

const styles = stylex.create({
  row: {
    height: "258px",
    width: "100%",
    position: "relative",
  },
});
