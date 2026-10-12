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

/**
 * Specifies options for initializing Link for use with the Base Report product, specifically the
 * `client_report_id`.
 */
export type LinkTokenCreateRequestCraOptionsBaseReport = {
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  clientReportId?: string | null;
  /**
   * Specifies options for initializing Link to create reports that can be shared with GSEs for
   * mortgage verification.
   */
  gseOptions?: LinkTokenCreateRequestCraOptionsBaseReportGseOptions | null;
  /**
   * Indicates that the report must include identity information. If identity information is not
   * available, the report will fail.
   */
  requireIdentity?: boolean | null;
  /** Options for configuring Home Lending Report (Verification Report) generation. */
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
