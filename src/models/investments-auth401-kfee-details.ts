import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvestmentsAuth401KFeeDetails = {
  accountFeeCount12M: number;
  accountFeeAmount12M: number;
};

export const investmentsAuth401KFeeDetailsSchema: Schema<InvestmentsAuth401KFeeDetails> =
  s.object<InvestmentsAuth401KFeeDetails>({
    accountFeeCount12M: s.number(),
    accountFeeAmount12M: s.number(),
    _keysMap: {
      accountFeeCount12M: "account_fee_count_12m",
      accountFeeAmount12M: "account_fee_amount_12m",
    },
  });
