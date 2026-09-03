import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DocumentAuthenticityMatchCode = {
  Match: "match",
  PartialMatch: "partial_match",
  NoMatch: "no_match",
  NoData: "no_data",
} as const;
export type DocumentAuthenticityMatchCode =
  | (typeof DocumentAuthenticityMatchCode)[keyof typeof DocumentAuthenticityMatchCode]
  | (string & {});

export const documentAuthenticityMatchCodeSchema: EnumSchema<DocumentAuthenticityMatchCode> =
  s.enumOf<DocumentAuthenticityMatchCode>(DocumentAuthenticityMatchCode);
