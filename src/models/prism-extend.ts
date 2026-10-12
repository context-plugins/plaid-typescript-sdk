import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prismCashScoreMetadataSchema, type PrismCashScoreMetadata } from "./prism-cash-score-metadata.js";

/** The data from the CashScore® Extend product returned by Prism Data. */
export type PrismExtend = {
  /** The version of Prism Data's CashScore® Extend model used. */
  modelVersion: string;
  /**
   * The score returned by Prism Data. Ranges from 1-999, with higher score indicating lower risk.
   */
  score: number | null;
  /** The reasons for an individual having risk according to the CashScore® Extend score. */
  reasonCodes?: string[];
  /** An object containing metadata about the provided transactions. */
  metadata?: PrismCashScoreMetadata;
  /** The error returned by Prism for this product. */
  errorReason?: string;
};

export const prismExtendSchema: Schema<PrismExtend> = s.object<PrismExtend>({
  modelVersion: s.string(),
  score: s.nullable(s.int()),
  reasonCodes: s.optional(s.array(s.string())),
  metadata: s.optional(s.lazy(() => prismCashScoreMetadataSchema)),
  errorReason: s.optional(s.string()),
  _keysMap: {
    modelVersion: "model_version",
    reasonCodes: "reason_codes",
    errorReason: "error_reason",
  },
});
