import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gseReportTypeSchema, type GseReportType } from "./gse-report-type.js";

/**
 * Specifies options for initializing Link to create reports that can be shared with GSEs for
 * mortgage verification.
 */
export type LinkTokenCreateRequestCraOptionsBaseReportGseOptions = {
  /** Specifies which types of reports should be made available to GSEs. */
  reportTypes: GseReportType[];
};

export const linkTokenCreateRequestCraOptionsBaseReportGseOptionsSchema: Schema<LinkTokenCreateRequestCraOptionsBaseReportGseOptions> =
  s.object<LinkTokenCreateRequestCraOptionsBaseReportGseOptions>({
    reportTypes: s.array(s.lazy(() => gseReportTypeSchema)),
    _keysMap: {
      reportTypes: "report_types",
    },
  });
