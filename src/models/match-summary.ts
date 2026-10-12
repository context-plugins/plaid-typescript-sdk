import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchSummaryCodeSchema, type MatchSummaryCode } from "./match-summary-code.js";

/** Summary object reflecting the match result of the associated data */
export type MatchSummary = {
  /**
   * An enum indicating the match type between data provided by user and data checked against an
   * external data source.
   *
   *
   * `match` indicates that the provided input data was a strong match against external data.
   *
   * `partial_match` indicates the data approximately matched against external data. For example,
   * "Knope" vs. "Knope-Wyatt" for last name.
   *
   * `no_match` indicates that Plaid was able to perform a check against an external data source and
   * it did not match the provided input data.
   *
   * `no_data` indicates that Plaid was unable to find external data to compare against the provided
   * input data.
   *
   * `no_input` indicates that Plaid was unable to perform a check because no information was
   * provided for this field by the end user.
   */
  summary: MatchSummaryCode;
};

export const matchSummarySchema: Schema<MatchSummary> = s.object<MatchSummary>({
  summary: matchSummaryCodeSchema,
});
