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
import { Tunnel } from "@/components/lupe/bildbereich/Tunnel";
import { Verschlussmelder } from "@/components/lupe/bildbereich/Verschlussmelder";
import { Vorsignal } from "@/components/lupe/bildbereich/Vorsignal";
import { Weiche1 } from "@/components/lupe/bildbereich/Weiche1";
import { Weiche2 } from "@/components/lupe/bildbereich/Weiche2";
import { Weiche3 } from "@/components/lupe/bildbereich/Weiche3";
import { Weiche4 } from "@/components/lupe/bildbereich/Weiche4";
import { WeichenVerbindung1 } from "@/components/lupe/bildbereich/WeichenVerbindung1";
import { WeichenVerbindung2 } from "@/components/lupe/bildbereich/WeichenVerbindung2";
import { BahnübergangStatus } from "@/constants/bahnübergang";
import { GleisStatus, type Gleis as GleisType } from "@/constants/gleis";
import { useLupeStore } from "@/store/lupe";

export function LupeTHP() {
  const TEST_GLEIS: GleisType = {
    status: GleisStatus.FREI,
  };
  useLupeStore.setState(() => ({ lupe: { betriebsstelle: "THP" } }));
  return (
    <Lupe useLupeStore={useLupeStore}>
      <div {...stylex.props(styles.row, styles.rowLarge)}>
        <Pfühlpark />
        <Gleis
          left={100}
          bottom={372}
          width={250}
          gleis={{ status: GleisStatus.AUßERHALB }}
        />
        <Gleis
          left={350}
          bottom={372}
          width={630}
          gleis={{ status: GleisStatus.FREI }}
        />
        <Haltepunktbezeichner bottom={345} left={40}>
          v/n Heilbronn-Hbf
        </Haltepunktbezeichner>
        <Gleis
          left={100}
          bottom={328}
          width={250}
          gleis={{ status: GleisStatus.AUßERHALB }}
        />
        <Gleis
          left={350}
          bottom={328}
          width={277}
          gleis={{ status: GleisStatus.FREI }}
        />
        <Verschlussmelder bottom={328} left={630} />
        <Blocksignal bottom={308} left={601} richtung="rechts">
          28
        </Blocksignal>
        <Gleis
          left={646}
          bottom={328}
          width={224}
          gleis={{ status: GleisStatus.FREI }}
        />
        <Gleis
          right={40}
          bottom={372}
          width={210}
          gleis={{ status: GleisStatus.FREI }}
        />
        <LupenVerweiß bottom={335} right={25} richtung="unten-rechts">
          1
        </LupenVerweiß>
        {/*  */}
        <Gleis
          left={100}
          bottom={240}
          width={250}
          gleis={{ status: GleisStatus.AUßERHALB }}
        />
        <Gleis
          left={350}
          bottom={240}
          width={277}
          gleis={{ status: GleisStatus.FREI }}
        />
        <Verschlussmelder bottom={240} left={630} />
        <Blocksignal bottom={252} left={591} richtung="rechts">
          881
        </Blocksignal>
        <Gleis
          left={646}
          bottom={240}
          width={173}
          gleis={{ status: GleisStatus.FREI }}
        />
        <GleisSchräge richtung="oben" left={819} bottom={240} />
        <Weiche4 right={387} bottom={328} weiche={{ name: "24" }} />
        <Gleis
          right={335}
          bottom={328}
          gleis={{ status: GleisStatus.FREI }}
          width={57}
        />
        <WeichenVerbindung1
          weicheOben={{
            name: "22",
          }}
          weicheUnten={{
            name: "23",
          }}
          bottom={328}
          right={250}
        />
        <Gleis
          right={260}
          bottom={328}
          gleis={{ status: GleisStatus.FREI }}
          width={25}
        />
        <Haltepunktbezeichner bottom={213} left={40}>
          v/n Heilbronn DB/AVG
        </Haltepunktbezeichner>
        <Gleis
          left={100}
          bottom={196}
          width={250}
          gleis={{ status: GleisStatus.AUßERHALB }}
        />
        <Gleis
          left={350}
          bottom={196}
          width={277}
          gleis={{ status: GleisStatus.FREI }}
        />
        <Verschlussmelder bottom={196} left={630} />
        <Blocksignal bottom={176} left={591} richtung="rechts">
          880
        </Blocksignal>
        <Gleis
          left={646}
          bottom={196}
          width={292}
          gleis={{ status: GleisStatus.FREI }}
        />
        <GleisSchräge richtung="oben" left={969} bottom={240} />
        <GleisSchräge richtung="oben" left={938} bottom={196} />
        <Weiche4 right={237} bottom={328} weiche={{ name: "21" }} />
        <Gleis
          right={40}
          bottom={328}
          width={202}
          gleis={{ status: GleisStatus.FREI }}
        />
        <LupenVerweiß bottom={291} right={25} richtung="unten-rechts">
          2
        </LupenVerweiß>
      </div>
      <div {...stylex.props(styles.row)}>
        <Trappensee />
        <WeinsbergWest />
        <LupenVerweiß bottom={64} left={25} richtung="oben-links">
          1
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={64} width={460} />
        <BahnübergangZweigleisig
          bottom={20}
          left={500}
          bahnübergangOben={{
            kilometer: "114.4",
            status: BahnübergangStatus.GRUNDSTELLUNG,
          }}
          bahnübergangUnten={{
            status: BahnübergangStatus.GRUNDSTELLUNG,
          }}
        />
        <Gleis gleis={TEST_GLEIS} right={566} bottom={64} width={154} />
        <Verschlussmelder bottom={64} right={550} />
        <Blocksignal bottom={75} right={530} richtung="links">
          21
        </Blocksignal>
        <Tunnel right={400} bottom={0} name="" />
        <Vorsignal bottom={75} right={340} richtung="links" />
        <Gleis gleis={TEST_GLEIS} right={40} bottom={64} width={507} />
        <LupenVerweiß bottom={64} right={25} richtung="oben-rechts">
          A
        </LupenVerweiß>
        {/*  */}
        <LupenVerweiß bottom={20} left={25} richtung="oben-links">
          2
        </LupenVerweiß>
        <Gleis gleis={TEST_GLEIS} left={40} bottom={20} width={262} />
        <Verschlussmelder bottom={20} left={305} />
        <Blocksignal bottom={0} left={275} richtung="rechts">
          32
        </Blocksignal>
        <Gleis gleis={TEST_GLEIS} left={321} bottom={20} width={179} />
        <Gleis gleis={TEST_GLEIS} right={540} bottom={20} width={180} />
        <Vorsignal bottom={0} right={340} richtung="rechts" />
        <Gleis gleis={TEST_GLEIS} right={40} bottom={20} width={500} />
        <LupenVerweiß bottom={20} right={25} richtung="oben-rechts">
          B
        </LupenVerweiß>
        <BildschirmVerweiß right={20} bottom={-10} richtung="oben">
          L_TWR
        </BildschirmVerweiß>
      </div>
    </Lupe>
  );
}

function Pfühlpark() {
  return (
    <>
      <Betriebsstellenbezeichner top={20} left={444}>
        Pfühlpark Abzw (THP) 15
      </Betriebsstellenbezeichner>
    </>
  );
}
function Trappensee() {
  return (
    <>
      <Haltepunktbezeichner bottom={123} left={480}>
        Hp Trappensee
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={779} bottom={76} />
      <Bahnsteig gleisPosition="oben" left={559} bottom={6} />
    </>
  );
}

function WeinsbergWest() {
  return (
    <>
      <Haltepunktbezeichner bottom={103} right={183.5}>
        Hp Weinsberg West
      </Haltepunktbezeichner>
      <Bahnsteig gleisPosition="unten" right={200} bottom={76} />
      <Bahnsteig gleisPosition="oben" right={200} bottom={6} />
    </>
  );
}

const styles = stylex.create({
  row: {
    height: "180px",
    width: "100%",
    position: "relative",
    // border: "1px solid blue",
  },
  rowLarge: {
    height: "516px",
  },
});
