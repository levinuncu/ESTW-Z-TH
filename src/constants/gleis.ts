export enum GleisStatus {
  FREI,
  UNBEKANNT,
  BESETZT,
  ZUGFAHRSTRAßE,
  RANGIERFAHRSTRAßE,
}

export type Gleis = {
  nummer?: string;
  status: GleisStatus;
};
