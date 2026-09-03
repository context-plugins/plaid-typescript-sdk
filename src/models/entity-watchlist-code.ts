import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityWatchlistCode = {
  CaCon: "CA_CON",
  EuCon: "EU_CON",
  IzSoe: "IZ_SOE",
  IzUnc: "IZ_UNC",
  IzWbk: "IZ_WBK",
  UsCap: "US_CAP",
  UsFse: "US_FSE",
  UsMbs: "US_MBS",
  UsSdn: "US_SDN",
  UsSsi: "US_SSI",
  UsCmc: "US_CMC",
  UsUvl: "US_UVL",
  UsSam: "US_SAM",
  UsTel: "US_TEL",
  AuCon: "AU_CON",
  UkHmc: "UK_HMC",
} as const;
export type EntityWatchlistCode =
  | (typeof EntityWatchlistCode)[keyof typeof EntityWatchlistCode]
  | (string & {});

export const entityWatchlistCodeSchema: EnumSchema<EntityWatchlistCode> =
  s.enumOf<EntityWatchlistCode>(EntityWatchlistCode);
