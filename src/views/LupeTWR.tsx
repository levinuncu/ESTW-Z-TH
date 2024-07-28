import stylex from "@stylexjs/stylex";

import { Lupe } from "@/components/Lupe";
import { Bahnsteig } from "@/components/lupe/bildbereich/Bahnsteig";
import { Betriebsstellenbezeichner } from "@/components/lupe/bildbereich/Betriebsstellenbezeichner";
import { BildschirmVerweiß } from "@/components/lupe/bildbereich/BildschirmVerweiß";
import { Blocksignal } from "@/components/lupe/bildbereich/Blocksignal";
import { Gleis } from "@/components/lupe/bildbereich/Gleis";
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
import { GleisStatus, type Gleis as GleisType } from "@/constants/gleis";

export function LupeTWR() {
  const TEST_GLEIS: GleisType = {
    status: GleisStatus.FREI,
  };
  return (
    <Lupe>
      <div {...stylex.props(styles.row)}>
        <Betriebsstellenbezeichner top={0} left={300}>
          Weinsberg Bf (TWR) 16
        </Betriebsstellenbezeichner>
        <BildschirmVerweiß.Bezeichner top={4} left={15}>
          A
        </BildschirmVerweiß.Bezeichner>
        <Gleis gleis={TEST_GLEIS} left={0} top={20} width={100} />
        {/*  */}
        <BildschirmVerweiß.Bezeichner top={48} left={15}>
          B
        </BildschirmVerweiß.Bezeichner>
        <BildschirmVerweiß.Pfeil richtung="links" top={83} left={10}>
          L_THP
        </BildschirmVerweiß.Pfeil>
        <Gleis gleis={TEST_GLEIS} left={0} top={64} width={100} />
      </div>
      <div {...stylex.props(styles.row)}>
        <LupenVerweiß bottom={152} left={25} richtung="oben">
          1
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={152} width={105} />
        <Weiche2 bottom={108} left={148} />
        <Gleis gleis={TEST_GLEIS} left={185} bottom={64} width={30} />
        <Weiche3 bottom={64} left={215} />
        <Sperrsignal left={303} bottom={77} richtung="links">
          40X
        </Sperrsignal>
        <Verschlussmelder bottom={64} left={315} />
        <Rangierfahrstraßenziel richtung="rechts" left={449} bottom={44}>
          40Y
        </Rangierfahrstraßenziel>
        <Gleis
          gleis={{ status: GleisStatus.FREI, nummer: "40" }}
          left={331} // 385
          bottom={64}
          width={154}
        />
        <Prellbock left={485} bottom={60} />
        <LupenVerweiß bottom={20} left={25} richtung="oben">
          2
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={20} width={75} />
        <Weiche1 bottom={20} left={118} />
        <EllhofenGewerbegebiet />
        <Vorsignal bottom={75} right={400} richtung="links" />
        <Hauptsignal bottom={75} right={265} richtung="links">
          A43
        </Hauptsignal>
        <Gleis gleis={TEST_GLEIS} right={40} bottom={64} width={400} />
        <LupenVerweiß bottom={27} right={25} richtung="unten">
          3
        </LupenVerweiß>
        {/*  */}
        <Gleis gleis={TEST_GLEIS} right={40} bottom={20} width={400} />
        <LupenVerweiß bottom={-17} right={25} richtung="unten">
          4
        </LupenVerweiß>
      </div>
      <div {...stylex.props(styles.row)}>
        <Blocksignal bottom={75} left={115} richtung="links">
          55
        </Blocksignal>
        <Vorsignal bottom={75} left={325} richtung="links" />
        <Ellhofen />
        <Sülzbach />
        <SülzbachSchule />
        <BildschirmVerweiß.Bezeichner bottom={78} right={15}>
          C
        </BildschirmVerweiß.Bezeichner>
        <LupenVerweiß bottom={64} left={25} richtung="oben">
          3
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={64} width={1240} />
        {/*  */}
        <Vorsignal bottom={0} left={145} richtung="rechts" />
        <Blocksignal bottom={0} left={325} richtung="rechts">
          54
        </Blocksignal>
        <Vorsignal bottom={0} left={775} richtung="rechts" />
        <LupenVerweiß bottom={20} left={25} richtung="oben">
          4
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={20} width={1240} />
        <BildschirmVerweiß.Bezeichner bottom={34} right={15}>
          D
        </BildschirmVerweiß.Bezeichner>
        <BildschirmVerweiß.Pfeil richtung="rechts" bottom={98} right={10}>
          L_TESU
        </BildschirmVerweiß.Pfeil>
      </div>
    </Lupe>
  );
}

function Ellhofen() {
  return (
    <>
      <Haltepunktbezeichner bottom={103} right={991}>
        Hp Ellhofen
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={980} bottom={73} />
      <Bahnsteig gleisPosition="oben" right={980} bottom={8} />
    </>
  );
}
function Sülzbach() {
  return (
    <>
      <Haltepunktbezeichner bottom={103} right={598}>
        Hp Sülzbach
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={590} bottom={73} />
      <Bahnsteig gleisPosition="oben" right={590} bottom={8} />
    </>
  );
}
function SülzbachSchule() {
  return (
    <>
      <Haltepunktbezeichner bottom={103} right={183.5}>
        Hp Sülzbach Schule
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={200} bottom={73} />
      <Bahnsteig gleisPosition="oben" right={200} bottom={8} />
    </>
  );
}
function EllhofenGewerbegebiet() {
  return (
    <>
      <Haltepunktbezeichner bottom={103} right={109}>
        Hp Ellhofen Gewerbegebiet
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={150} bottom={73} />
      <Bahnsteig gleisPosition="oben" right={150} bottom={8} />
    </>
  );
}

const styles = stylex.create({
  row: {
    height: "258px",
    width: "100%",
    position: "relative",
    // border: "1px solid blue",
  },
});
