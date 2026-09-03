import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankEmploymentReportSchema,
  type CreditBankEmploymentReport,
} from "./credit-bank-employment-report.js";

export type CreditBankEmploymentGetResponse = {
  bankEmploymentReports: CreditBankEmploymentReport[];
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
