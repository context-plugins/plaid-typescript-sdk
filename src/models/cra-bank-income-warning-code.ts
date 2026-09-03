import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraBankIncomeWarningCode = {
  IdentityUnavailable: "IDENTITY_UNAVAILABLE",
  TransactionsUnavailable: "TRANSACTIONS_UNAVAILABLE",
  ReportDeleted: "REPORT_DELETED",
  DataUnavailable: "DATA_UNAVAILABLE",
} as const;
export type CraBankIncomeWarningCode =
  | (typeof CraBankIncomeWarningCode)[keyof typeof CraBankIncomeWarningCode]
  | (string & {});

export const craBankIncomeWarningCodeSchema: EnumSchema<CraBankIncomeWarningCode> =
  s.enumOf<CraBankIncomeWarningCode>(CraBankIncomeWarningCode);
