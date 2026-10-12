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

/** Contains data for the CRA Home Lending Report. */
export type CraVerificationReport = {
  /**
   * The unique identifier associated with the Home Lending Report object. This ID will be the same
   * as the Base Report ID.
   */
  reportId: string;
  /**
   * A unique token that can be shared with GSEs in order to provide them access to the report. This
   * is automatically created during report generation when GSE options are specified.
   */
  gseReferenceId?: string;
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  clientReportId?: string | null;
  /** An object representing a VOA report. */
  voa?: CraVoaReport | null;
  /** An object representing an Employment Refresh Report. */
  employmentRefresh?: CraEmploymentRefreshReport | null;
  /** An object representing an Income Report within the Home Lending Report. */
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
