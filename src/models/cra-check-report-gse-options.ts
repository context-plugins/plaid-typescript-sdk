import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gseReportTypeSchema, type GseReportType } from "./gse-report-type.js";

/**
 * Specifies options for creating reports that can be shared with GSEs for mortgage verification.
 */
export type CraCheckReportGseOptions = {
  /** Specifies which types of reports should be made available to GSEs. */
  reportTypes: GseReportType[];
};

export const craCheckReportGseOptionsSchema: Schema<CraCheckReportGseOptions> =
  s.object<CraCheckReportGseOptions>({
    reportTypes: s.array(s.lazy(() => gseReportTypeSchema)),
    _keysMap: {
      reportTypes: "report_types",
    },
  });
