import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A match summary describing the cross comparison between the subject's name, extracted from the
 * document image, and the name they separately provided to the identity verification attempt.
 */
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
