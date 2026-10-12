import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies options for initializing Link for use with the Base Report product. This field is
 * required if `assets` is included in the `products` array and the client is CRA-enabled.
 */
export type LinkTokenCreateRequestBaseReport = {
  /** The maximum integer number of days of history to include in the Base Report. */
  daysRequested: number;
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  clientReportId?: string | null;
};

export const linkTokenCreateRequestBaseReportSchema: Schema<LinkTokenCreateRequestBaseReport> =
  s.object<LinkTokenCreateRequestBaseReport>({
    daysRequested: s.int(),
    clientReportId: s.optionalNullable(s.string()),
    _keysMap: {
      daysRequested: "days_requested",
      clientReportId: "client_report_id",
    },
  });
