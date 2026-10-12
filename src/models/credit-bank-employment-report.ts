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

/** The report of the Bank Employment data for an end user. */
export type CreditBankEmploymentReport = {
  /** The unique identifier associated with the Bank Employment Report. */
  bankEmploymentReportId: string;
  /**
   * The time when the Bank Employment Report was generated, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (e.g. "2018-04-12T03:32:11Z").
   */
  generatedTime: Date;
  /** The number of days requested by the customer for the Bank Employment Report. */
  daysRequested: number;
  /** The list of Items in the report along with the associated metadata about the Item. */
  items: CreditBankEmploymentItem[];
  /**
   * If data from the Bank Employment report was unable to be retrieved, the warnings will contain
   * information about the error that caused the data to be incomplete.
   */
  warnings: CreditBankEmploymentWarning[];
};

export const creditBankEmploymentReportSchema: Schema<CreditBankEmploymentReport> =
  s.object<CreditBankEmploymentReport>({
    bankEmploymentReportId: s.string(),
    generatedTime: s.dateTime(),
    daysRequested: s.int(),
    items: s.array(s.lazy(() => creditBankEmploymentItemSchema)),
    warnings: s.array(s.lazy(() => creditBankEmploymentWarningSchema)),
    _keysMap: {
      bankEmploymentReportId: "bank_employment_report_id",
      generatedTime: "generated_time",
      daysRequested: "days_requested",
    },
  });
