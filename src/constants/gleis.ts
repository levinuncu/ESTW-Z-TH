export enum GleisStatus {
  FREI,
  UNBEKANNT,
  BESETZT,
  ZUGFAHRSTRAßE,
  RANGIERFAHRSTRAßE,
  AUßERHALB,
}

export type Gleis = {
  nummer?: string;
  status: GleisStatus;
};
