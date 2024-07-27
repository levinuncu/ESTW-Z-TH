import stylex from "@stylexjs/stylex";

import { Lupe } from "@/components/Lupe";
import { Bahnsteig } from "@/components/lupe/bildbereich/Bahnsteig";
import { BildschirmVerweiß } from "@/components/lupe/bildbereich/BildschirmVerweiß";
import { Gleis } from "@/components/lupe/bildbereich/Gleis";
import { Haltepunktbezeichner } from "@/components/lupe/bildbereich/Haltepunktbezeichner";
import { Hauptsignal } from "@/components/lupe/bildbereich/Hauptsignal";
import { LupenVerweiß } from "@/components/lupe/bildbereich/LupenVerweiß";
import { Vorsignal } from "@/components/lupe/bildbereich/Vorsignal";

export function LupeTWR() {
  return (
    <Lupe>
      <div {...stylex.props(styles.row)}>
        <BildschirmVerweiß.Bezeichner top={4} left={15}>
          A
        </BildschirmVerweiß.Bezeichner>
        <Gleis left={0} top={20} width={100} />
        {/*  */}
        <BildschirmVerweiß.Bezeichner top={48} left={15}>
          B
        </BildschirmVerweiß.Bezeichner>
        <BildschirmVerweiß.Pfeil richtung="links" top={83} left={10}>
          L_THP
        </BildschirmVerweiß.Pfeil>
        <Gleis left={0} top={64} width={100} />
      </div>
      <div {...stylex.props(styles.row)}>
        <EllhofenGewerbegebiet />
        <Vorsignal bottom={75} right={400} richtung="links" />
        <Hauptsignal bottom={75} right={265} richtung="links">
          A43
        </Hauptsignal>
        <Gleis right={40} bottom={64} width={400} />
        <LupenVerweiß bottom={27} right={25} richtung="unten">
          3
        </LupenVerweiß>
        {/*  */}
        <Gleis right={40} bottom={20} width={400} />
        <LupenVerweiß bottom={-17} right={25} richtung="unten">
          4
        </LupenVerweiß>
      </div>
      <div {...stylex.props(styles.row)}>
        <Hauptsignal bottom={75} left={115} richtung="links">
          55
        </Hauptsignal>
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
        <Gleis left={40} bottom={64} width={1240} />
        {/*  */}
        <Vorsignal bottom={0} left={145} richtung="rechts" />
        <Hauptsignal bottom={0} left={325} richtung="rechts">
          54
        </Hauptsignal>
        <Vorsignal bottom={0} left={775} richtung="rechts" />
        <LupenVerweiß bottom={20} left={25} richtung="oben">
          4
        </LupenVerweiß>
        <Gleis left={40} bottom={20} width={1240} />
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
