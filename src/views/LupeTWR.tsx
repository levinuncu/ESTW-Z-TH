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

export function LupeTWR() {
  const TEST_GLEIS: GleisType = {
    status: GleisStatus.FREI,
  };
  useLupeStore.setState(() => ({ lupe: { betriebsstelle: "TWR" } }));
  return (
    <Lupe useLupeStore={useLupeStore}>
      <div {...stylex.props(styles.row)}>
        <Weinsberg />
        <BildschirmVerweiß left={20} top={78} richtung="unten">
          L_THP
        </BildschirmVerweiß>
        <LupenVerweiß bottom={115} left={25} richtung="unten-links">
          A
        </LupenVerweiß>
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
          }}
          left={40}
          bottom={152}
          width={257}
        />
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
          }}
          left={347}
          bottom={152}
          width={117}
        />
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
          }}
          right={40}
          bottom={152}
          width={350}
        />
        <BahnübergangEingleisig
          bottom={152}
          right={390}
          bahnübergang={{
            kilometer: "110.0",
            status: BahnübergangStatus.GRUNDSTELLUNG,
          }}
        />
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
          }}
          right={450}
          bottom={152}
          width={134}
        />
        <Sperrsignal left={640} bottom={131} richtung="rechts">
          41Y
        </Sperrsignal>
        <Verschlussmelder bottom={152} left={680} />
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
            nummer: "41",
          }}
          left={483}
          bottom={152}
          width={194}
        />
        <Verschlussmelder bottom={152} left={467} />
        <Hauptsignal bottom={165} left={440} richtung="links">
          N41
        </Hauptsignal>
        <LupenVerweiß bottom={115} right={25} richtung="unten-rechts">
          1
        </LupenVerweiß>
        {/*  */}
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
          }}
          left={40}
          bottom={108}
          width={147}
        />
        <Verschlussmelder bottom={108} left={190} />
        <Hauptsignal left={150} bottom={87} richtung="rechts">
          F46
        </Hauptsignal>
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
          }}
          left={206}
          bottom={108}
          width={126}
        />
        <WeichenVerbindung2
          weicheOben={{ name: "48" }}
          weicheUnten={{ name: "47" }}
          left={300}
          bottom={108}
        />
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
          }}
          left={382}
          bottom={108}
          width={82}
        />
        <Hauptsignal bottom={121} left={440} richtung="links">
          N42
        </Hauptsignal>
        <Verschlussmelder bottom={108} left={680} />
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
            nummer: "42",
          }}
          left={483}
          bottom={108}
          width={194}
        />
        <Hauptsignal rangier left={640} bottom={87} richtung="rechts">
          P42
        </Hauptsignal>
        <Verschlussmelder bottom={108} left={467} />
        <LupenVerweiß bottom={71} left={25} richtung="unten-links">
          B
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} right={40} bottom={20} width={250} />
        <BahnübergangEingleisig
          bottom={20}
          right={290}
          bahnübergang={{
            kilometer: "110.0",
            status: BahnübergangStatus.GRUNDSTELLUNG,
          }}
        />
        <Gleis gleis={TEST_GLEIS} right={350} bottom={20} width={50} />
        <GleisSchräge bottom={20} richtung="oben-links" right={400} />
        <GleisSchräge bottom={64} richtung="oben-links" right={431} />
        <Gleis gleis={TEST_GLEIS} right={460} bottom={108} width={124} />
        <LupenVerweiß bottom={-17} right={25} richtung="unten-rechts">
          2
        </LupenVerweiß>
      </div>
      <div {...stylex.props(styles.row)}>
        <LupenVerweiß bottom={152} left={25} richtung="oben-links">
          1
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={152} width={105} />
        <Weiche2 bottom={108} left={148} weiche={{ name: "44" }} />
        <Gleis gleis={TEST_GLEIS} left={215} bottom={152} width={125} />
        <GleisSchräge left={340} bottom={108} richtung="unten" />
        <Gleis gleis={TEST_GLEIS} left={369} bottom={108} width={270} />
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
          }}
          left={185}
          bottom={64}
          width={30}
        />
        <BahnübergangZweigleisig
          bottom={64}
          left={639}
          bahnübergangOben={{
            kilometer: "111.0",
            status: BahnübergangStatus.GRUNDSTELLUNG,
          }}
          bahnübergangUnten={{
            status: BahnübergangStatus.GRUNDSTELLUNG,
          }}
        />
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
          }}
          left={699}
          bottom={64}
          width={50}
        />
        <Gleis
          gleis={{
            status: GleisStatus.FREI,
          }}
          left={699}
          bottom={108}
          width={85}
        />
        <WeichenVerbindung1
          weicheOben={{ name: "41" }}
          weicheUnten={{ name: "42" }}
          left={752}
          bottom={64}
        />
        <Weiche3 bottom={64} left={215} weiche={{ name: "43" }} />
        <Sperrsignal left={303} bottom={77} richtung="links">
          40X
        </Sperrsignal>
        <Verschlussmelder bottom={64} left={315} />
        <Rangierfahrstraßenziel richtung="rechts" left={480} bottom={44}>
          40Y
        </Rangierfahrstraßenziel>
        <Gleis
          gleis={{ status: GleisStatus.FREI }}
          left={285}
          bottom={64}
          width={27}
        />
        <Gleis
          gleis={{ status: GleisStatus.FREI, nummer: "40" }}
          left={331}
          bottom={64}
          width={185}
        />
        <Prellbock left={516} bottom={60} />
        <LupenVerweiß bottom={20} left={25} richtung="oben-links">
          2
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={20} width={75} />
        <Weiche1 bottom={20} left={118} weiche={{ name: "45" }} />
        <Gleis gleis={TEST_GLEIS} left={185} bottom={20} width={400} />
        <GleisSchräge left={585} bottom={20} richtung="oben" />
        <Gleis
          gleis={{ status: GleisStatus.FREI }}
          left={614}
          bottom={64}
          width={25}
        />
        <EllhofenGewerbegebiet />
        <Vorsignal bottom={121} right={400} richtung="links" />
        <Hauptsignal bottom={121} right={265} richtung="links">
          A43
        </Hauptsignal>
        <Gleis gleis={TEST_GLEIS} right={40} bottom={108} width={406} />
        <LupenVerweiß bottom={71} right={25} richtung="unten-rechts">
          3
        </LupenVerweiß>
        {/*  */}
        <Gleis gleis={TEST_GLEIS} right={40} bottom={64} width={441} />
        <LupenVerweiß bottom={27} right={25} richtung="unten-rechts">
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
        <LupenVerweiß bottom={64} right={25} richtung="oben-rechts">
          C
        </LupenVerweiß>
        <LupenVerweiß bottom={64} left={25} richtung="oben-links">
          3
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={64} width={1200} />
        {/*  */}
        <Vorsignal bottom={0} left={145} richtung="rechts" />
        <Blocksignal bottom={0} left={325} richtung="rechts">
          54
        </Blocksignal>
        <Vorsignal bottom={0} left={775} richtung="rechts" />
        <LupenVerweiß bottom={20} left={25} richtung="oben-links">
          4
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={20} width={1200} />
        <LupenVerweiß bottom={20} right={25} richtung="oben-rechts">
          D
        </LupenVerweiß>
        <BildschirmVerweiß right={20} bottom={-10} richtung="oben">
          L_TESU
        </BildschirmVerweiß>
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
      <Bahnsteig gleisPosition="unten" right={980} bottom={76} />
      <Bahnsteig gleisPosition="oben" right={980} bottom={6} />
    </>
  );
}
function Sülzbach() {
  return (
    <>
      <Haltepunktbezeichner bottom={103} right={598}>
        Hp Sülzbach
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={590} bottom={76} />
      <Bahnsteig gleisPosition="oben" right={590} bottom={6} />
    </>
  );
}
function SülzbachSchule() {
  return (
    <>
      <Haltepunktbezeichner bottom={103} right={183.5}>
        Hp Sülzbach Schule
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={200} bottom={76} />
      <Bahnsteig gleisPosition="oben" right={200} bottom={6} />
    </>
  );
}
function EllhofenGewerbegebiet() {
  return (
    <>
      <Haltepunktbezeichner bottom={147} right={109}>
        Hp Ellhofen Gewerbegebiet
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={150} bottom={120} />
      <Bahnsteig gleisPosition="oben" right={150} bottom={50} />
    </>
  );
}
function Weinsberg() {
  return (
    <>
      <Betriebsstellenbezeichner top={20} left={444}>
        Weinsberg Bf (TWR) 16
      </Betriebsstellenbezeichner>
      <Bahnsteig gleisPosition="unten" right={650} bottom={123} />
      <Bahnsteig gleisPosition="oben" right={650} bottom={135} />
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
