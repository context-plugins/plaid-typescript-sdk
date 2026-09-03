import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankStatementUploadBankAccountPeriod = {
  startDate: string | null;
  endDate: string | null;
  startingBalance: number | null;
  endingBalance: number | null;
};

export const creditBankStatementUploadBankAccountPeriodSchema: Schema<CreditBankStatementUploadBankAccountPeriod> =
  s.object<CreditBankStatementUploadBankAccountPeriod>({
    startDate: s.nullable(s.dateOnly()),
    endDate: s.nullable(s.dateOnly()),
    startingBalance: s.nullable(s.number()),
    endingBalance: s.nullable(s.number()),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      startingBalance: "starting_balance",
      endingBalance: "ending_balance",
    },
  });
