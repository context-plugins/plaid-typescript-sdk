import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gseReportTypeSchema, type GseReportType } from "./gse-report-type.js";

export type CraCheckReportGseOptions = {
  reportTypes: GseReportType[];
};

export const craCheckReportGseOptionsSchema: Schema<CraCheckReportGseOptions> =
  s.object<CraCheckReportGseOptions>({
    reportTypes: s.array(s.lazy(() => gseReportTypeSchema)),
    _keysMap: {
      reportTypes: "report_types",
    },
  });
