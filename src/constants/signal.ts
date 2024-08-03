enum SignalArten {
  Vorsignal,
  Sperrsignal,
  Hauptsignal,
}

export enum HauptsignalStellung {
  Hp0,
  Ks1,
  Ks2,
}

export enum HauptSperrsignalStellung {
  Hp0,
  Ks1,
  Ks2,
  Sh1,
}

export enum SperrsignalStellung {
  Sh0,
  Sh1,
}

export enum VorsignalStellung {
  Vr0,
  Vr1,
}

type SignalState =
  | {
      name: string;
      bkz: number;
      art: SignalArten.Vorsignal;
      stellung: VorsignalStellung;
    }
  | {
      name: string;
      bkz: number;
      art: SignalArten.Sperrsignal;
      stellung: SperrsignalStellung;
    };
