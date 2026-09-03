import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportGseOptionsSchema,
  type CraCheckReportGseOptions,
} from "./cra-check-report-gse-options.js";
import {
  craCheckReportHomeLendingReportOptionsSchema,
  type CraCheckReportHomeLendingReportOptions,
} from "./cra-check-report-home-lending-report-options.js";

export type CraCheckReportCreateBaseReportOptions = {
  clientReportId?: string | null;
  gseOptions?: CraCheckReportGseOptions | null;
  requireIdentity?: boolean | null;
  homeLendingReportOptions?: CraCheckReportHomeLendingReportOptions | null;
};

export const craCheckReportCreateBaseReportOptionsSchema: Schema<CraCheckReportCreateBaseReportOptions> =
  s.object<CraCheckReportCreateBaseReportOptions>({
    clientReportId: s.optionalNullable(s.string()),
    gseOptions: s.optionalNullable(s.lazy(() => craCheckReportGseOptionsSchema)),
    requireIdentity: s.optionalNullable(s.boolean()),
    homeLendingReportOptions: s.optionalNullable(s.lazy(() => craCheckReportHomeLendingReportOptionsSchema)),
    _keysMap: {
      clientReportId: "client_report_id",
      gseOptions: "gse_options",
      requireIdentity: "require_identity",
      homeLendingReportOptions: "home_lending_report_options",
    },
  });
