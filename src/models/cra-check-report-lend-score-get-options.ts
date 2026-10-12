import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plaidLendScoreVersionSchema, type PlaidLendScoreVersion } from "./plaid-lend-score-version.js";

/**
 * Deprecated. This field is no longer accepted for new clients (created on or after 2026-07-01).
 * New clients should specify required products when creating the Consumer Report. Existing
 * integrations may continue to pass `options`.
 */
export type CraCheckReportLendScoreGetOptions = {
  /** The version of the LendScore to use. Required if using LendScore. */
  lendScoreVersion?: PlaidLendScoreVersion | null;
};

export const craCheckReportLendScoreGetOptionsSchema: Schema<CraCheckReportLendScoreGetOptions> =
  s.object<CraCheckReportLendScoreGetOptions>({
    lendScoreVersion: s.optionalNullable(s.lazy(() => plaidLendScoreVersionSchema)),
    _keysMap: {
      lendScoreVersion: "lend_score_version",
    },
  });
