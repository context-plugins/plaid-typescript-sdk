import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Information about the comparison between the selfie and the document (if documentary verification
 * also ran).
 */
export const SelfieAnalysisDocumentComparison = {
  Match: "match",
  NoMatch: "no_match",
  NoInput: "no_input",
} as const;
export type SelfieAnalysisDocumentComparison =
  | (typeof SelfieAnalysisDocumentComparison)[keyof typeof SelfieAnalysisDocumentComparison]
  | (string & {});

export const selfieAnalysisDocumentComparisonSchema: EnumSchema<SelfieAnalysisDocumentComparison> =
  s.enumOf<SelfieAnalysisDocumentComparison>(SelfieAnalysisDocumentComparison);
