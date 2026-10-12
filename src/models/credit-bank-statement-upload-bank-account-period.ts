import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object containing data on the overall period of the statement. */
export type CreditBankStatementUploadBankAccountPeriod = {
  /** The start date of the statement period in ISO 8601 format (YYYY-MM-DD). */
  startDate: string | null;
  /** The end date of the statement period in ISO 8601 format (YYYY-MM-DD). */
  endDate: string | null;
  /** The starting balance of the bank account for the period. */
  startingBalance: number | null;
  /** The ending balance of the bank account for the period. */
  endingBalance: number | null;
};

export const creditBankStatementUploadBankAccountPeriodSchema: Schema<CreditBankStatementUploadBankAccountPeriod> =
  s.object<CreditBankStatementUploadBankAccountPeriod>({
    startDate: s.nullable(s.dateOnly()),
    endDate: s.nullable(s.dateOnly()),
    startingBalance: s.nullable(s.float64()),
    endingBalance: s.nullable(s.float64()),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      startingBalance: "starting_balance",
      endingBalance: "ending_balance",
    },
  });
