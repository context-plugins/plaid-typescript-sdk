import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plaidLendScoreVersionSchema, type PlaidLendScoreVersion } from "./plaid-lend-score-version.js";

/** Specifies options for initializing Link for use with the CRA LendScore product. */
export type LinkTokenCreateRequestCraOptionsLendScore = {
  /** The version of the LendScore to use. Required if using LendScore. */
  lendScoreVersion?: PlaidLendScoreVersion | null;
};

export const linkTokenCreateRequestCraOptionsLendScoreSchema: Schema<LinkTokenCreateRequestCraOptionsLendScore> =
  s.object<LinkTokenCreateRequestCraOptionsLendScore>({
    lendScoreVersion: s.optionalNullable(s.lazy(() => plaidLendScoreVersionSchema)),
    _keysMap: {
      lendScoreVersion: "lend_score_version",
    },
  });
