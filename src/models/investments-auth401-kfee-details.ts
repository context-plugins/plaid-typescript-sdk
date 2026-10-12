import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Object containing information on account fee transactions for the 401k account. */
export type InvestmentsAuth401KFeeDetails = {
  /** Number of account fee transactions on this account, for the past 12 months. */
  accountFeeCount12M: number;
  /** Sum of account fee transactions on this account, for the past 12 months. */
  accountFeeAmount12M: number;
};

export const investmentsAuth401KFeeDetailsSchema: Schema<InvestmentsAuth401KFeeDetails> =
  s.object<InvestmentsAuth401KFeeDetails>({
    accountFeeCount12M: s.int(),
    accountFeeAmount12M: s.float64(),
    _keysMap: {
      accountFeeCount12M: "account_fee_count_12m",
      accountFeeAmount12M: "account_fee_amount_12m",
    },
  });
