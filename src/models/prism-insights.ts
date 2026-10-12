import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The data from the Insights product returned by Prism Data. */
export type PrismInsights = {
  /**
   * The version of Prism Data's insights model used. This field is deprecated in favor of
   * `model_version`.
   *
   * @deprecated
   */
  version: number;
  /** The version of Prism Data's insights model used. */
  modelVersion?: string;
  /**
   * The Insights Result object is a map of cash flow attributes, where the key is a string, and the
   * value is a float or string. For a full list of attributes, contact your account manager. The
   * attributes may vary depending on the Prism version used.
   */
  result?: Record<string, unknown>;
  /** The error returned by Prism for this product. */
  errorReason?: string;
};

export const prismInsightsSchema: Schema<PrismInsights> = s.object<PrismInsights>({
  version: s.int(),
  modelVersion: s.optional(s.string()),
  result: s.optional(s.record(s.string(), s.unknown())),
  errorReason: s.optional(s.string()),
  _keysMap: {
    modelVersion: "model_version",
    errorReason: "error_reason",
  },
});
