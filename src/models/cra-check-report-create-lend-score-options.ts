import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plaidLendScoreVersionSchema, type PlaidLendScoreVersion } from "./plaid-lend-score-version.js";

/** Defines configuration options to generate the LendScore */
export type CraCheckReportCreateLendScoreOptions = {
  /** The version of the LendScore to use. Required if using LendScore. */
  lendScoreVersion?: PlaidLendScoreVersion | null;
};

export const craCheckReportCreateLendScoreOptionsSchema: Schema<CraCheckReportCreateLendScoreOptions> =
  s.object<CraCheckReportCreateLendScoreOptions>({
    lendScoreVersion: s.optionalNullable(s.lazy(() => plaidLendScoreVersionSchema)),
    _keysMap: {
      lendScoreVersion: "lend_score_version",
    },
  });
