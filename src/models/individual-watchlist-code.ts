import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IndividualWatchlistCode = {
  AuCon: "AU_CON",
  CaCon: "CA_CON",
  EuCon: "EU_CON",
  IzCia: "IZ_CIA",
  IzIpl: "IZ_IPL",
  IzPep: "IZ_PEP",
  IzUnc: "IZ_UNC",
  IzWbk: "IZ_WBK",
  UkHmc: "UK_HMC",
  UsDpl: "US_DPL",
  UsDtc: "US_DTC",
  UsFbi: "US_FBI",
  UsFse: "US_FSE",
  UsIsn: "US_ISN",
  UsMbs: "US_MBS",
  UsPlc: "US_PLC",
  UsSam: "US_SAM",
  UsSdn: "US_SDN",
  UsSsi: "US_SSI",
  SgSof: "SG_SOF",
  TrTwl: "TR_TWL",
  TrDfd: "TR_DFD",
  TrFor: "TR_FOR",
  TrWmd: "TR_WMD",
  TrCmb: "TR_CMB",
} as const;
export type IndividualWatchlistCode =
  | (typeof IndividualWatchlistCode)[keyof typeof IndividualWatchlistCode]
  | (string & {});

export const individualWatchlistCodeSchema: EnumSchema<IndividualWatchlistCode> =
  s.enumOf<IndividualWatchlistCode>(IndividualWatchlistCode);
