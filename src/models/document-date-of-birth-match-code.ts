import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A match summary describing the cross comparison between the subject's date of birth, extracted
 * from the document image, and the date of birth they separately provided to the identity
 * verification attempt.
 */
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
