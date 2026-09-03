import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craEmploymentRefreshReportSchema,
  type CraEmploymentRefreshReport,
} from "./cra-employment-refresh-report.js";
import {
  craVerificationIncomeReportSchema,
  type CraVerificationIncomeReport,
} from "./cra-verification-income-report.js";
import { craVoaReportSchema, type CraVoaReport } from "./cra-voa-report.js";

export type CraVerificationReport = {
  reportId: string;
  gseReferenceId?: string;
  clientReportId?: string | null;
  voa?: CraVoaReport | null;
  employmentRefresh?: CraEmploymentRefreshReport | null;
  income?: CraVerificationIncomeReport | null;
};

export const craVerificationReportSchema: Schema<CraVerificationReport> = s.object<CraVerificationReport>({
  reportId: s.string(),
  gseReferenceId: s.optional(s.string()),
  clientReportId: s.optionalNullable(s.string()),
  voa: s.optionalNullable(s.lazy(() => craVoaReportSchema)),
  employmentRefresh: s.optionalNullable(s.lazy(() => craEmploymentRefreshReportSchema)),
  income: s.optionalNullable(s.lazy(() => craVerificationIncomeReportSchema)),
  _keysMap: {
    reportId: "report_id",
    gseReferenceId: "gse_reference_id",
    clientReportId: "client_report_id",
    employmentRefresh: "employment_refresh",
  },
});
