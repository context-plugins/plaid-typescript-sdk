import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DocumentNameMatchCode = {
  Match: "match",
  PartialMatch: "partial_match",
  NoMatch: "no_match",
  NoData: "no_data",
} as const;
export type DocumentNameMatchCode =
  | (typeof DocumentNameMatchCode)[keyof typeof DocumentNameMatchCode]
  | (string & {});

export const documentNameMatchCodeSchema: EnumSchema<DocumentNameMatchCode> =
  s.enumOf<DocumentNameMatchCode>(DocumentNameMatchCode);
