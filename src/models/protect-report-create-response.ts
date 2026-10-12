import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response object for /protect/report/create */
export type ProtectReportCreateResponse = {
  /** A unique identifier representing the submitted report. */
  reportId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const protectReportCreateResponseSchema: Schema<ProtectReportCreateResponse> =
  s.object<ProtectReportCreateResponse>({
    reportId: s.string(),
    requestId: s.string(),
    _keysMap: {
      reportId: "report_id",
      requestId: "request_id",
    },
  });
