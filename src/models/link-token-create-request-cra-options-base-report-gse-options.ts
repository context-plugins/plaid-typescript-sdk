import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gseReportTypeSchema, type GseReportType } from "./gse-report-type.js";

export type LinkTokenCreateRequestCraOptionsBaseReportGseOptions = {
  reportTypes: GseReportType[];
};

export const linkTokenCreateRequestCraOptionsBaseReportGseOptionsSchema: Schema<LinkTokenCreateRequestCraOptionsBaseReportGseOptions> =
  s.object<LinkTokenCreateRequestCraOptionsBaseReportGseOptions>({
    reportTypes: s.array(s.lazy(() => gseReportTypeSchema)),
    _keysMap: {
      reportTypes: "report_types",
    },
  });
