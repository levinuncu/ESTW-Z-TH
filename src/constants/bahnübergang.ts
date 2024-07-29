export enum BahnübergangStatus {
  GRUNDSTELLUNG,
  SCHLIEßVORGANG,
  GESICHERT,
}

export type Bahnübergang = {
  kilometer: string;
  status: BahnübergangStatus;
};
