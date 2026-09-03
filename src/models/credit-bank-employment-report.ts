import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankEmploymentItemSchema,
  type CreditBankEmploymentItem,
} from "./credit-bank-employment-item.js";
import {
  creditBankEmploymentWarningSchema,
  type CreditBankEmploymentWarning,
} from "./credit-bank-employment-warning.js";

export type CreditBankEmploymentReport = {
  bankEmploymentReportId: string;
  generatedTime: Date;
  daysRequested: number;
  items: CreditBankEmploymentItem[];
  warnings: CreditBankEmploymentWarning[];
};

export const creditBankEmploymentReportSchema: Schema<CreditBankEmploymentReport> =
  s.object<CreditBankEmploymentReport>({
    bankEmploymentReportId: s.string(),
    generatedTime: s.dateTime(),
    daysRequested: s.number(),
    items: s.array(s.lazy(() => creditBankEmploymentItemSchema)),
    warnings: s.array(s.lazy(() => creditBankEmploymentWarningSchema)),
    _keysMap: {
      bankEmploymentReportId: "bank_employment_report_id",
      generatedTime: "generated_time",
      daysRequested: "days_requested",
    },
  });
