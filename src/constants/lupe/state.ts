type Signalspannung = {
  ein: boolean;
  stoerung: boolean;
};

export type LupeState = {
  lupe: {
    betriebsstelle: string;
  };
  ein: string;
  vq: string;
  sammelmelderzeile: {
    weichenLaufketteGesperrt: boolean;
    zuglenkung: boolean;
    tagspannung: Signalspannung;
    nachtspannung: Signalspannung;
  };
};
