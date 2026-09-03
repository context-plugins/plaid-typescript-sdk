import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CashFlowInsight = {
  LargeDepositDetected: "LARGE_DEPOSIT_DETECTED",
  LowBalanceDetected: "LOW_BALANCE_DETECTED",
  NewLoanPaymentDetected: "NEW_LOAN_PAYMENT_DETECTED",
  NsfOverdraftDetected: "NSF_OVERDRAFT_DETECTED",
} as const;
export type CashFlowInsight = (typeof CashFlowInsight)[keyof typeof CashFlowInsight] | (string & {});

export const cashFlowInsightSchema: EnumSchema<CashFlowInsight> = s.enumOf<CashFlowInsight>(CashFlowInsight);
