import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prismCashScoreMetadataSchema, type PrismCashScoreMetadata } from "./prism-cash-score-metadata.js";

/** The data from the CashScore® product returned by Prism Data. */
export type PrismCashScore = {
  /**
   * The version of Prism Data's cash score model used. This field is deprecated in favor of
   * `model_version`.
   *
   * @deprecated
   */
  version: number;
  /** The version of Prism Data's cash score model used. */
  modelVersion?: string;
  /**
   * The score returned by Prism Data. Ranges from 1-999, with higher score indicating lower risk.
   */
  score: number | null;
  /** The reasons for an individual having risk according to the cash score. */
  reasonCodes?: string[];
  /** An object containing metadata about the provided transactions. */
  metadata?: PrismCashScoreMetadata;
  /** The error returned by Prism for this product. */
  errorReason?: string;
};

export const prismCashScoreSchema: Schema<PrismCashScore> = s.object<PrismCashScore>({
  version: s.int(),
  modelVersion: s.optional(s.string()),
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
