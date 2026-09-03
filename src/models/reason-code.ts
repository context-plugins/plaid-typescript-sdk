import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReasonCode = {
  Ac03: "AC03",
  Am09: "AM09",
  Cust: "CUST",
  Dupl: "DUPL",
  Frad: "FRAD",
  Tech: "TECH",
  Upay: "UPAY",
  Ac14: "AC14",
  Am06: "AM06",
  Be05: "BE05",
  Focr: "FOCR",
  Ms02: "MS02",
  Ms03: "MS03",
  Rr04: "RR04",
  Ruta: "RUTA",
} as const;
export type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode] | (string & {});

export const reasonCodeSchema: EnumSchema<ReasonCode> = s.enumOf<ReasonCode>(ReasonCode);
