import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportHomeLendingReportOptionsSchema,
  type CraCheckReportHomeLendingReportOptions,
} from "./cra-check-report-home-lending-report-options.js";
import {
  linkTokenCreateRequestCraOptionsBaseReportGseOptionsSchema,
  type LinkTokenCreateRequestCraOptionsBaseReportGseOptions,
} from "./link-token-create-request-cra-options-base-report-gse-options.js";

export type LinkTokenCreateRequestCraOptionsBaseReport = {
  clientReportId?: string | null;
  gseOptions?: LinkTokenCreateRequestCraOptionsBaseReportGseOptions | null;
  requireIdentity?: boolean | null;
  homeLendingReportOptions?: CraCheckReportHomeLendingReportOptions | null;
};

export const linkTokenCreateRequestCraOptionsBaseReportSchema: Schema<LinkTokenCreateRequestCraOptionsBaseReport> =
  s.object<LinkTokenCreateRequestCraOptionsBaseReport>({
    clientReportId: s.optionalNullable(s.string()),
    gseOptions: s.optionalNullable(s.lazy(() => linkTokenCreateRequestCraOptionsBaseReportGseOptionsSchema)),
    requireIdentity: s.optionalNullable(s.boolean()),
    homeLendingReportOptions: s.optionalNullable(s.lazy(() => craCheckReportHomeLendingReportOptionsSchema)),
    _keysMap: {
      clientReportId: "client_report_id",
      gseOptions: "gse_options",
      requireIdentity: "require_identity",
      homeLendingReportOptions: "home_lending_report_options",
    },
  });
