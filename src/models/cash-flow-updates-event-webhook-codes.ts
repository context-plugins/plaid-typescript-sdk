import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CashFlowUpdatesEventWebhookCodes = {
  LargeDepositDetected: "LARGE_DEPOSIT_DETECTED",
  LowBalanceDetected: "LOW_BALANCE_DETECTED",
  NewLoanPaymentDetected: "NEW_LOAN_PAYMENT_DETECTED",
  NsfOverdraftDetected: "NSF_OVERDRAFT_DETECTED",
} as const;
export type CashFlowUpdatesEventWebhookCodes =
  | (typeof CashFlowUpdatesEventWebhookCodes)[keyof typeof CashFlowUpdatesEventWebhookCodes]
  | (string & {});

export const cashFlowUpdatesEventWebhookCodesSchema: EnumSchema<CashFlowUpdatesEventWebhookCodes> =
  s.enumOf<CashFlowUpdatesEventWebhookCodes>(CashFlowUpdatesEventWebhookCodes);
