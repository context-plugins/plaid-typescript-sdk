import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlaidLendScoreVersion = {
  V10: "v1.0",
  V20: "v2.0",
  Ls1: "LS1",
} as const;
export type PlaidLendScoreVersion =
  | (typeof PlaidLendScoreVersion)[keyof typeof PlaidLendScoreVersion]
  | (string & {});

export const plaidLendScoreVersionSchema: EnumSchema<PlaidLendScoreVersion> =
  s.enumOf<PlaidLendScoreVersion>(PlaidLendScoreVersion);
