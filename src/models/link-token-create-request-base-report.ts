import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestBaseReport = {
  daysRequested: number;
  clientReportId?: string | null;
};

export const linkTokenCreateRequestBaseReportSchema: Schema<LinkTokenCreateRequestBaseReport> =
  s.object<LinkTokenCreateRequestBaseReport>({
    daysRequested: s.number(),
    clientReportId: s.optionalNullable(s.string()),
    _keysMap: {
      daysRequested: "days_requested",
      clientReportId: "client_report_id",
    },
  });
