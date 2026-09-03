import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditSessionBankIncomeStatus = {
  Approved: "APPROVED",
  NoDepositsFound: "NO_DEPOSITS_FOUND",
  UserReportedNoIncome: "USER_REPORTED_NO_INCOME",
  Started: "STARTED",
  InternalError: "INTERNAL_ERROR",
} as const;
export type CreditSessionBankIncomeStatus =
  | (typeof CreditSessionBankIncomeStatus)[keyof typeof CreditSessionBankIncomeStatus]
  | (string & {});

export const creditSessionBankIncomeStatusSchema: EnumSchema<CreditSessionBankIncomeStatus> =
  s.enumOf<CreditSessionBankIncomeStatus>(CreditSessionBankIncomeStatus);
