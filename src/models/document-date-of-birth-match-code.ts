import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DocumentDateOfBirthMatchCode = {
  Match: "match",
  PartialMatch: "partial_match",
  NoMatch: "no_match",
  NoData: "no_data",
} as const;
export type DocumentDateOfBirthMatchCode =
  | (typeof DocumentDateOfBirthMatchCode)[keyof typeof DocumentDateOfBirthMatchCode]
  | (string & {});

export const documentDateOfBirthMatchCodeSchema: EnumSchema<DocumentDateOfBirthMatchCode> =
  s.enumOf<DocumentDateOfBirthMatchCode>(DocumentDateOfBirthMatchCode);
