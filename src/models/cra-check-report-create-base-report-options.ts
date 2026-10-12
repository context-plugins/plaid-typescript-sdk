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

/** Defines configuration options to generate a Base Report */
export type CraCheckReportCreateBaseReportOptions = {
  /**
   * Client-generated identifier, which can be used by lenders to track loan applications. This
   * field is deprecated. Use the `client_report_id` field at the top level of the request instead.
   *
   * @deprecated
   */
  clientReportId?: string | null;
  /**
   * Specifies options for creating reports that can be shared with GSEs for mortgage verification.
   */
  gseOptions?: CraCheckReportGseOptions | null;
  /**
   * Indicates that the report must include identity information. If identity information is not
   * available, the report will fail.
   */
  requireIdentity?: boolean | null;
  /** Options for configuring Home Lending Report (Verification Report) generation. */
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
