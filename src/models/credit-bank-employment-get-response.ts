import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankEmploymentReportSchema,
  type CreditBankEmploymentReport,
} from "./credit-bank-employment-report.js";

/**
 * CreditBankEmploymentGetResponse defines the response schema for
 * `/beta/credit/v1/bank_employment/get`.
 */
export type CreditBankEmploymentGetResponse = {
  /** Bank Employment data. Each entry in the array will be a distinct bank employment report. */
  bankEmploymentReports: CreditBankEmploymentReport[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const creditBankEmploymentGetResponseSchema: Schema<CreditBankEmploymentGetResponse> =
  s.object<CreditBankEmploymentGetResponse>({
    bankEmploymentReports: s.array(s.lazy(() => creditBankEmploymentReportSchema)),
    requestId: s.string(),
    _keysMap: {
      bankEmploymentReports: "bank_employment_reports",
      requestId: "request_id",
    },
  });
